import prisma from '../../prisma/db';

async function login(email: string, password: string) {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  if (user.password !== password) {
    throw new Error('Credenciais inválidas.');
  }

  return user;
}

export const loginActions = {
  login,
};
