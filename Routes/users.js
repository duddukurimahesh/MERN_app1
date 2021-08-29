
const authMiddleware = require('../auth_middleware');
const users = require('../Models/users');
const jwt = require('jsonwebtoken');
const md5 = require('md5');
const reviews = require('../Models/reviews');


module.exports =  (app) => {

    // Reg API
    app.post('/reg', async (req, res) => {

        try {

            const { firstName, lastName, email, pass, mobileNum, skills } = req.body;

            const userExist = await users.findOne({ email });
            if (userExist) {
                return res.status(400).send("User eamil Already exist. Please register with another email.");
            }
            let password = md5(pass);
            let newUserObj = new users({ firstName, lastName, email, password, mobileNum, skills });
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

            const { email, pass } = req.body;
            let password = md5(pass);
            const userExist = await users.findOne({ email });
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

    });

    // get users profile API
    app.get('/userssList', authMiddleware, async (req, res) => {

        try {
            let userssList = await users.find();
            return res.send(userssList);
        }
        catch {
            console.log("At listing userss error is: ", err);
            return res.status(500).send("Internal server error.");
        }
    });

    app.get('/myProfile', authMiddleware, async (req, res) => {

        try {
            let userDetails = await users.findById(req.user.id);
            return res.json(userDetails);
        }
        catch (err){
            console.log("At fetching my profile error is: ", err);
            return res.status(500).send("Internal server error.");
        }

    });

    // Add Review
    app.post('/addReview', authMiddleware, async(req, res)=>{

        try{
            const {rating, comments, freelancer} = req.body;
            const workProvider = req.user.email;
            const newReview = new reviews({rating, comments, workProvider, freelancer});
            newReview.save();
            return res.status(200).send('Review added successfully.')
        }
        catch(err){
            console.log("At adding review error is: ", err);
            return res.status(500).send("Internal server error.");
        }

    });

    // Get Reviews provided by me.
    app.get('/reviewsByMe', authMiddleware, async(req, res)=>{

        try{

            const email = req.user.email;
            let reviewsList = await reviews.find({workProvider: email});
            return res.status(200).send(reviewsList);

        }
        catch(err){
            console.log("At reviewsByMe error is: ", err);
            return res.status(500).send("Internal server error.");
        }
    });

    // Get Reviews provided to me.
    app.get('/reviewsToMe', authMiddleware, async(req, res)=>{

        try{

            const email = req.user.email;
            let reviewsList = await reviews.find({freelancer: email});
            return res.status(200).send(reviewsList);

        }
        catch(err){
            console.log("At reviewsToMe error is: ", err);
            return res.status(500).send("Internal server error.");
        }
    });
};