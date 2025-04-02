import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/db';
import { SALT } from '@/constants/constants';

export async function POST(request: Request) {
  try {
    const transaction = await prisma.$transaction(
      async (prisma) => {
        const body = await request.json();

        const { email, name, password, phone, havePlan, address, plan, image } =
          body;

        if (!email || !name || !password || !phone || !address) {
          return NextResponse.json(
            { error: 'Todos os campos obrigatórios devem ser preenchidos.' },
            { status: 400 }
          );
        }

        let createdAddress = await prisma.address.findFirst({
          where: {
            street: address.street,
          },
        });

        const numHouse = parseInt(address.numberStreet);

        if (!createdAddress) {
          createdAddress = await prisma.address.create({
            data: {
              street: address.street,
              numHouse,
              state: address.state,
              complement: address.complement,
            },
          });
        }

        const passwordEncrypted = await bcrypt.hash(password, SALT);

        const newUser = await prisma.user.create({
          data: {
            email,
            name,
            password: passwordEncrypted,
            telephone: phone,
            havePlan,
            addressId: createdAddress.id,
            image,
          },
        });

        if (havePlan && plan) {
          const planExist = await prisma.plan.findUnique({
            where: {
              id: plan,
            },
          });

          if (planExist) {
            await prisma.userPlan.create({
              data: {
                userId: newUser.id,
                planId: planExist.id,
                planDesc: planExist.name,
              },
            });
          }
        }

        return NextResponse.json(
          { message: 'Usuário criado com sucesso!' },
          { status: 201 }
        );
      },
      { timeout: 10000 }
    );

    return transaction;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return NextResponse.json(
      { error: 'Não foi possível processar a solicitação.' },
      { status: 500 }
    );
  }
}
