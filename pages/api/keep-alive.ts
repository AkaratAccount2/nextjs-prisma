import { PrismaClient } from "./../../prisma/generated/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handle(
    req: NextApiRequest,
    res: NextApiResponse
  ) {
      const aliveCount = await prisma.keep_alive.count();
      
      res.status(200).json({
        keep_alive: aliveCount
      });
  };


