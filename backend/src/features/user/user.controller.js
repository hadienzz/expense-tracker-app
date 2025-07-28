const { createUserService, loginUserService } = require("./user.service");

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUserService(email, password, res);
    return res.status(200).json("Berhasil login");
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const result = await createUserService(
      firstName,
      lastName,
      email,
      password
    );
    return res.status(201).json({ message: "User baru berhasil dibuat" });
  } catch (err) {
    console.error(err);
    return res.status(400).json({ message: "Internal Server Error" });
  }
};

module.exports = { loginUser, createUser };
