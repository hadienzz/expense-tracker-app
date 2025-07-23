const prisma = require("../../config/db");
const bcrypt = require("bcrypt");

const getUserService = async () => {
  const result = await prisma.user.findMany();
  return result;
};

const createUserService = async (email, password) => {
  if (!email || !password) {
    return res.status(400).json({ message: "Incomplete data" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const result = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });
  return result;
};

module.exports = { getUserService, createUserService };
