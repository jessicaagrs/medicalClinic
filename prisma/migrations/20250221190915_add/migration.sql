/*
  Warnings:

  - Added the required column `planDesc` to the `SpecialistPlan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SpecialistPlan" ADD COLUMN     "planDesc" TEXT NOT NULL;
