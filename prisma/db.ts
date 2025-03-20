import { PrismaClient } from '@prisma/client';
import { env } from 'process';

const globalForPrisma = global as typeof global & { prisma?: PrismaClient };

export const prisma = (() => {
  if (typeof window !== 'undefined') {
    return {} as unknown as PrismaClient;
  }
  return (
    globalForPrisma.prisma ??
    new PrismaClient({
      log:
        env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
    })
  );
})();
