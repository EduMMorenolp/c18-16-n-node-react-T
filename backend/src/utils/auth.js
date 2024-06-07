const bcrypt = require("bcrypt")

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

const checkPassword = async (enteredPassword, storedHash) => {
    return await bcrypt.compare(enteredPassword, storedHash)
}


module.exports = {hashPassword, checkPassword}