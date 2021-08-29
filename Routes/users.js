
const authMiddleware = require('../auth_middleware');
const freelancer = require('../Models/freelancer');
const jwt = require('jsonwebtoken');

module.exports =  (app) => {

    // Reg API
    app.post('/reg', async (req, res) => {

        try {

            const { firstName, lastName, email, password, mobileNum, skills } = req.body;

            const userExist = await freelancer.findOne({ email });
            if (userExist) {
                return res.status(400).send("User eamil Already exist. Please register with another email.");
            }

            let newUserObj = new freelancer({ firstName, lastName, email, password, mobileNum, skills });
            newUserObj.save();
            return res.status(200).send("User registratation completed successfully.")

        }
        catch (err) {
            console.log("At REG error is: ", err);
            return res.status(500).send("Internal server error.");
        }

    });

    // login API
    app.post('/login', async (req, res) => {

        try {

            const { email, password } = req.body;
            const userExist = await freelancer.findOne({ email });
            if (!userExist) {
                return res.status(400).send("user email does'nt exist.")
            }
            if (password != userExist.password) {
                return res.status(400).send("Password does'nt match. Please try another password.");
            };
            // JWT token generation.
            let payload = {
                user: {
                    id: userExist.id,
                    email: userExist.email,
                    firstName: userExist.firstName
                }
            };
            jwt.sign(payload, "freelancerJWTsecKey", { expiresIn: 3600000 }, (err, token) => {
                if (err) throw err
                return res.json({ token })
            });


        }
        catch (err) {
            console.log("At LOGIN error is: ", err);
            return res.status(500).send("Internal server error.");
        }

    })

    // get freelancers profile API
    app.get('/freelancersList', authMiddleware, async (req, res) => {

        try {
            let freelancersList = await freelancer.find();
            return res.send(freelancersList);
        }
        catch {
            console.log("At listing freelancers error is: ", err);
            return res.status(500).send("Internal server error.");
        }
    })

    app.get('/myProfile', authMiddleware, async (req, res) => {

        try {
            let userDetails = await freelancer.findById(req.user.id);
            return res.json(userDetails);
        }
        catch {
            console.log("At fetching my profile error is: ", err);
            return res.status(500).send("Internal server error.");
        }

    })

}