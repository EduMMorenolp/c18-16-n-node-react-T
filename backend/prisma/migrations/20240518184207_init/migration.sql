-- CreateTable
CREATE TABLE "Estudiante" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "historial" TEXT NOT NULL,
    "padreId" INTEGER,
    CONSTRAINT "Estudiante_padreId_fkey" FOREIGN KEY ("padreId") REFERENCES "Padre" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Padre" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Profesor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Evaluacion" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "comentario" TEXT NOT NULL,
    "nota" REAL NOT NULL,
    "estudianteId" INTEGER NOT NULL,
    "profesorId" INTEGER NOT NULL,
    CONSTRAINT "Evaluacion_estudianteId_fkey" FOREIGN KEY ("estudianteId") REFERENCES "Estudiante" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Evaluacion_profesorId_fkey" FOREIGN KEY ("profesorId") REFERENCES "Profesor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Estudiante_email_key" ON "Estudiante"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Padre_email_key" ON "Padre"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profesor_email_key" ON "Profesor"("email");
