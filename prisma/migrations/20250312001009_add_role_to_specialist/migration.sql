-- Criar o tipo enum role
CREATE TYPE "role" AS ENUM ('ADMIN', 'DOCTOR', 'NURSE', 'RECEPTIONIST');

-- Adicionar a coluna com um valor padrão temporário
ALTER TABLE "Specialist" ADD COLUMN "role" "role" NOT NULL DEFAULT 'DOCTOR';

-- Remover o valor padrão temporário
ALTER TABLE "Specialist" ALTER COLUMN "role" DROP DEFAULT;