import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { sign } from "jsonwebtoken";

import { User } from "@prisma/client";

// POST /api/auth/register
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, name } = req.body;

  const users = await prisma.place.findMany();

  const user = await prisma.user.create({
    data: {
      user_id: users.length + 1,
      email,
      password,
      name,
    },
  });

  const userCopied = { ...user } as Partial<User>;
  delete userCopied.password;

  res.json({
    user,
    token: sign(userCopied, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    }),
  });
}
