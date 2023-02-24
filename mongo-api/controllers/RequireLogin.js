import jwt from "jsonwebtoken";


export const requireLogin = (req, res, next) => {
    // get a token from signing and send through get request header section, key will be authorization and value will be token. 
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ error: "you must be logged in!" });
        }
        try {
            const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
            req.user = userId;
            next();
        } catch (err) {
            return res.status(401).json({ error: "invalid token!" });
        }
    }