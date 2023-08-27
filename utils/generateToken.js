const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const generateToken=async(user)=>{
    return jwt.sign({ user }, 'secret-key', { expiresIn: '1h' });
}

module.exports={generateToken}