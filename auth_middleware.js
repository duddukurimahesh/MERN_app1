const jwt = require('jsonwebtoken');

module.exports =  function(req, res, next) {

    try {

        let authToken = req.header('authToken');
        if(!authToken) {
            return res.status(400).send("Unauthorised Access.");
        };

        let decodeTokenData = jwt.verify(authToken, "freelancerJWTsecKey");
        console.log("decodeTokenData------", decodeTokenData);
        req.user = decodeTokenData.user;
        next();

    }
    catch(err){
        console.log("Error at Auth middleware: ", err);
        return res.status(400).send("User authentication error.")
    }

}