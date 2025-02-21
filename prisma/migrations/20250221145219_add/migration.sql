/*
  Warnings:

  - You are about to drop the column `cep` on the `Address` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cnpj]` on the table `Clinic` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `Plan` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Specialist` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "cep";

-- CreateIndex
CREATE UNIQUE INDEX "Clinic_cnpj_key" ON "Clinic"("cnpj");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "Plan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Specialist_email_key" ON "Specialist"("email");
