const jwt = require("jsonwebtoken");

const rutasPublicas = ["/auth/sign-in", "/auth/sign-up", "/auth/forgot-password", "/auth/reset-password", 
    "/auth/refresh-token", "/achievements/update-achievement", "/contact-support/new",
    "/private/startPrivateGame", "/private/pausePrivateGame", "/private/uploadValues",
    "/private/getValues" ]

/**
 * @description Middleware para verificar si el usuario está autenticado 
 * @param {Object} req - Request object
 * @param {Object} res - Response object
 * @param {Function} next - Next middleware function
 * @returns {Function} next - Next middleware function
 * @throws {Error} - Si no hay token o el token es inválido
 */ 
const authMiddleware = (req, res, next) => {
    // Permitir rutas públicas sin autenticación
    const currentPath = req.path; // O usa req.originalUrl si tienes prefijos
    if (rutasPublicas.some((ruta) => currentPath.startsWith(ruta))) {
        return next();
    }

    const token = req.header("Auth");

    if (!token) {
        return res.status(401).json({ message: "No hay token, autorización denegada" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Token inválido" });
    }
};

module.exports = authMiddleware;
