-- CreateTable
CREATE TABLE "roles" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "userDetails" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "birthdate" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "city" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "dni" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "userDetails_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "userDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "users" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "parents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "workPlaceAddress" TEXT NOT NULL,
    "workPlaceNumber" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "parents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "parentStudent" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "parentId" INTEGER NOT NULL,
    "studentId" INTEGER NOT NULL,
    CONSTRAINT "parentStudent_parentId_fkey" FOREIGN KEY ("parentId") REFERENCES "parents" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "parentStudent_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "students" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "sectionId" INTEGER NOT NULL,
    "degreeId" INTEGER NOT NULL,
    CONSTRAINT "students_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "students_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "sections" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "students_degreeId_fkey" FOREIGN KEY ("degreeId") REFERENCES "degrees" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "academicDegree" TEXT NOT NULL,
    "yearOfExperience" INTEGER NOT NULL,
    "hare_date" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "teachers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "sections" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "degrees" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

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
    "description" TEXT
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

-- CreateIndex
CREATE UNIQUE INDEX "roles_name_key" ON "roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "userDetails_dni_key" ON "userDetails"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
