import jwt from "jsonwebtoken";

// Middleware to authenticate admin
const adminAuth = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        const token = authHeader && authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token provided" });
        }

        const secret = process.env.JWT_SECRET || "yourSuperSecretKey123";
        const decoded = jwt.verify(token, secret);

        const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
        if (decoded.email !== adminEmail) {
            return res.status(403).json({ success: false, message: "Forbidden: Not an admin user" });
        }

        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token", error: error.message });
    }
};

export default adminAuth;
