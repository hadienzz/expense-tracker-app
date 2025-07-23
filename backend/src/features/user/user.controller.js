const { getUserService, createUserService } = require("./user.service");

const getUser = async (req, res) => {
  try {
    const data = await getUserService();
    return res.status(200).json({ data });
  } catch (err) {
    console.error(err)
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

module.exports = { getUser, createUser };
