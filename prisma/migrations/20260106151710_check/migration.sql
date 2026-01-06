/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `isMarried` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `nationality` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "age",
DROP COLUMN "isMarried",
DROP COLUMN "nationality";
