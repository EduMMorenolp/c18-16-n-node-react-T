/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `userDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "userDetails_userId_key" ON "userDetails"("userId");
