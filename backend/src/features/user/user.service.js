require("dotenv").config();

const prisma = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateToken, setAuthCookie } = require("../../utils/auth");

const loginUserService = async (email, password, res) => {
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({ user_id: user.id });
  setAuthCookie(res, token);
  return token;
};

const createUserService = async (firstName, lastName, email, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
    },
  });
  return result;
};

module.exports = { loginUserService, createUserService };
