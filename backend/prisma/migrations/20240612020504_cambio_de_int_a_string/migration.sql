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
    "phone" TEXT,
    "dni" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "userDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_userDetails" ("address", "birthdate", "city", "country", "district", "dni", "firstName", "gender", "id", "lastName", "phone", "userId") SELECT "address", "birthdate", "city", "country", "district", "dni", "firstName", "gender", "id", "lastName", "phone", "userId" FROM "userDetails";
DROP TABLE "userDetails";
ALTER TABLE "new_userDetails" RENAME TO "userDetails";
CREATE UNIQUE INDEX "userDetails_dni_key" ON "userDetails"("dni");
CREATE UNIQUE INDEX "userDetails_userId_key" ON "userDetails"("userId");
PRAGMA foreign_key_check("userDetails");
PRAGMA foreign_keys=ON;
