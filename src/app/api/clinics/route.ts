import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { prisma } from '../../../../prisma/db';

export async function POST(request: Request) {
  try {
    const transaction = await prisma.$transaction(
      async (prisma) => {
        const body = await request.json();

        const { email, name, password, phone, address, cnpj } = body;

        if (!email || !name || !password || !phone || !address || !cnpj) {
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

        const passwordEncrypted = await bcrypt.hash(password, 10);

        await prisma.clinic.create({
          data: {
            email,
            name,
            password: passwordEncrypted,
            telephone: phone,
            cnpj,
            addressId: createdAddress.id,
          },
        });

        return NextResponse.json(
          { message: 'Clínica criada com sucesso!' },
          { status: 201 }
        );
      },
      {
        timeout: 10000,
      }
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
