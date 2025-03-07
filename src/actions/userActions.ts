'use server';

import { PlanRelationUser } from '@/interfaces/IPlan';
import { User } from '@/interfaces/IUser';
import { revalidatePath } from 'next/cache';
import prisma from '../../prisma/db';

async function create(data: User, plan?: PlanRelationUser) {
  const newUser = await prisma.user.create({
    data: {
      email: data.email,
      name: data.name,
      password: data.password,
      telephone: data.telephone,
      havePlan: data.havePlan,
      addressId: data.addressId,
    },
  });

  if (plan) {
    await prisma.userPlan.create({
      data: {
        userId: newUser.id,
        planId: plan.planId,
        planDesc: plan.planDesc,
      },
    });
  }

  revalidatePath('/');
}

export const userActions = {
  create,
};
