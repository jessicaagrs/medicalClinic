import bcrypt from 'bcrypt';
import prisma from '../../prisma/db';

async function login(email: string, password: string, clinic?: string) {
  let user;

  if (clinic && clinic !== 'null') {
    user = await prisma.specialist.findUnique({
      where: {
        email,
      },
    });
  } else {
    user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  const isMatchPassword = await bcrypt.compare(password, user?.password ?? '');

  if (!isMatchPassword) {
    throw new Error('Credenciais inválidas.');
  }

  return user;
}

export const loginActions = {
  login,
};
