const userPost = require("../../controllers/createUser");

const createUser = async(req, res) =>{
  const { email, password } = req.body;
  try {
    const responseRegister = await userPost(email, password)
    res.status(200).json(responseRegister);
  } catch (error) {
    console-console.log('====================================');
    console.log(error);
    console.log('====================================');
    res.status(401).json({ error: error.message });
  }

};

module.exports = createUser;