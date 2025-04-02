import { prisma } from '../../prisma/db';

async function getPlans() {
  const plans = await prisma.plan.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return plans;
}
export const planActions = {
  getPlans,
};
