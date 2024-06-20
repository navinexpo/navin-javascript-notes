import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    try {
        const decode = jwt.verify(token, process.env.JWT_SECRET)
    } catch (error) {
        
    }
}