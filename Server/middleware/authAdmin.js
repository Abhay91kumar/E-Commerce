const Users = require('../models/userModel')

const authAdmin = async (req, res, next) => {
    try {
        const user = await Users.findOne({
            _id: req.user.id
        });
        if (user.role === 0) {
            return res.status(403).json({ msg: 'Admin Resource Denied' })
        }
        next();
    } catch (err) {
         return res.status(500).json({ msg: err.message }); 
        }
}
module.exports = authAdmin;