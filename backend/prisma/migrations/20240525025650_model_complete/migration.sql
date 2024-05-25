/*
  Warnings:

  - Added the required column `academicDegree` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hare_date` to the `teachers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `yearOfExperience` to the `teachers` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "teacherCourse" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "teacherId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    CONSTRAINT "teacherCourse_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "teacherCourse_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "courses" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "desciption" TEXT
);

-- CreateTable
CREATE TABLE "enrollments" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    CONSTRAINT "enrollments_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "enrollments_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "courses" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "records" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "bimestre" INTEGER NOT NULL,
    "record1" DECIMAL NOT NULL,
    "record2" DECIMAL NOT NULL,
    "promedio" DECIMAL NOT NULL,
    "enrollmentId" INTEGER NOT NULL,
    CONSTRAINT "records_enrollmentId_fkey" FOREIGN KEY ("enrollmentId") REFERENCES "enrollments" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_teachers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "academicDegree" TEXT NOT NULL,
    "yearOfExperience" INTEGER NOT NULL,
    "hare_date" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "teachers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_teachers" ("id", "userId") SELECT "id", "userId" FROM "teachers";
DROP TABLE "teachers";
ALTER TABLE "new_teachers" RENAME TO "teachers";
PRAGMA foreign_key_check("teachers");
PRAGMA foreign_keys=ON;
