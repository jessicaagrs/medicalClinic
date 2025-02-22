/*
  Warnings:

  - Added the required column `clinicId` to the `Specialist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Specialist" ADD COLUMN     "clinicId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Specialist" ADD CONSTRAINT "Specialist_clinicId_fkey" FOREIGN KEY ("clinicId") REFERENCES "Clinic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
