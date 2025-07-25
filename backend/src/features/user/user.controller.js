const { createUserService, loginUserService } = require("./user.service");

const loginUser = async (req, res) => {
  try {
    // const data = await loginUserService();
    const { email, password } = req.body;
    const result = loginUserService(email, password);
    return res.status(200).json({ result });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const data = await createUserService(email, password);
    return res.status(201).json({ message: "User baru berhasil dibuat" });
  } catch (err) {
    // console.error(err)
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

module.exports = { loginUser, createUser };
