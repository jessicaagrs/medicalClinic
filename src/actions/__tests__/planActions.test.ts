import { prisma } from '../../../prisma/db';
import { planActions } from '../planActions';

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

jest.mock('../../../prisma/db', () => ({
  prisma: {
    plan: {
      findMany: jest.fn(),
    },
  },
}));

describe('Plan Actions', () => {
  const plansMock = [
    {
      id: '62c9b1f2-fedd-43ef-80ae-313da55dc615',
      name: 'Plan A',
    },
    {
      id: 'a094a468-6d05-40a1-84f5-255f0190bfaf',
      name: 'Plan B',
    },
    {
      id: 'e0e75e55-bef0-4b4a-93df-1c43b297d6c7',
      name: 'Plan C',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should must render all existing planes', () => {
    (prisma.plan.findMany as jest.Mock).mockResolvedValue(plansMock);

    const result = planActions.getPlans();
    expect(prisma.plan.findMany).toHaveBeenCalledWith({
      select: {
        id: true,
        name: true,
      },
    });

    expect(result).resolves.toEqual(plansMock);
  });
});
