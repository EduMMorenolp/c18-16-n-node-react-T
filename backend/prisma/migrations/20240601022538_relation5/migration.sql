/*
  Warnings:

  - Made the column `roleId` on table `userDetails` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `userDetails` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_userDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT,
    "lastName" TEXT,
    "birthdate" DATETIME,
    "city" TEXT,
    "district" TEXT,
    "country" TEXT,
    "gender" TEXT,
    "address" TEXT,
    "phone" INTEGER,
    "dni" INTEGER,
    "roleId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "userDetails_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userDetails" ("address", "birthdate", "city", "country", "district", "dni", "firstName", "gender", "id", "lastName", "phone", "roleId", "userId") SELECT "address", "birthdate", "city", "country", "district", "dni", "firstName", "gender", "id", "lastName", "phone", "roleId", "userId" FROM "userDetails";
DROP TABLE "userDetails";
ALTER TABLE "new_userDetails" RENAME TO "userDetails";
CREATE UNIQUE INDEX "userDetails_dni_key" ON "userDetails"("dni");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
