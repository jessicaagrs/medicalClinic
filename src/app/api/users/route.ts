import { NextResponse } from 'next/server';
import prisma from '../../../../prisma/db';

export async function GET() {
  const users = await prisma.user.findMany({
    include: {
      plans: true,
    },
  });

  return NextResponse.json(users);
}
