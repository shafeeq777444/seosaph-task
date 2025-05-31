import prisma from "../config/prismaClient.js";
import customError from "../utils/errorHandlers/CustomErrorClass.js"
import { generateAccessToken, generateRefreshToken } from "../utils/JWT.js"
import bcrypt from 'bcrypt'

// register
export const registerService = async ({ email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

  const user = await prisma.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  return user;
};

// login
export const loginService = async ({ email, password }) => {
  // Find user by name
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new customError('User is not registered', 404);
  }

  // Compare passwords (assuming stored password is hashed)
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new customError('Password is incorrect', 401); // 401 Unauthorized is better here
  }

  // Generate tokens
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  return {
    accessToken,
    refreshToken,
    name: user.name,
    id: user.id, // Prisma uses `id`, not `_id`
  };
};