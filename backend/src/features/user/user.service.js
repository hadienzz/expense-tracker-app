const prisma = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUserService = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

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

module.exports = { loginUserService, createUserService };
