-- CreateEnum
CREATE TYPE "inputdataset_sourceType" AS ENUM ('S3', 'GoogleStorage', 'HDFS', 'Streaming');

-- CreateEnum
CREATE TYPE "inputdataset_dataFormat" AS ENUM ('CSV', 'XML', 'OTHER');

-- CreateEnum
CREATE TYPE "project_frequency" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'REAL_TIME');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "inputdataset" (
    "id" SERIAL NOT NULL,
    "sourceType" "inputdataset_sourceType" NOT NULL,
    "location" TEXT NOT NULL,
    "dataFormat" "inputdataset_dataFormat" NOT NULL,

    CONSTRAINT "inputdataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "script" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "code" TEXT,

    CONSTRAINT "script_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "job" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "code" TEXT,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "latestEdit" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categoryId" INTEGER NOT NULL,
    "scriptId" INTEGER,

    CONSTRAINT "job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jobtoproject" (
    "id" SERIAL NOT NULL,
    "jobId" INTEGER NOT NULL,
    "projectId" INTEGER NOT NULL,
    "inputDatasetId" INTEGER,

    CONSTRAINT "jobtoproject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "outputdataset" (
    "id" SERIAL NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateDate" TIMESTAMP(3),
    "jobAssociationId" INTEGER NOT NULL,

    CONSTRAINT "outputdataset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "project" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "frequency" "project_frequency" NOT NULL,
    "status" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3),
    "endDate" TIMESTAMP(3),

    CONSTRAINT "project_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "idx_job_category" ON "job"("categoryId");

-- CreateIndex
CREATE INDEX "idx_job_script" ON "job"("scriptId");

-- CreateIndex
CREATE INDEX "JobToProject_inputDatasetId_idx" ON "jobtoproject"("inputDatasetId");

-- CreateIndex
CREATE INDEX "JobToProject_jobId_idx" ON "jobtoproject"("jobId");

-- CreateIndex
CREATE INDEX "JobToProject_projectId_idx" ON "jobtoproject"("projectId");

-- CreateIndex
CREATE INDEX "OutputDataset_jobAssociationId_idx" ON "outputdataset"("jobAssociationId");

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "job" ADD CONSTRAINT "job_scriptId_fkey" FOREIGN KEY ("scriptId") REFERENCES "script"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobtoproject" ADD CONSTRAINT "JobToProject_inputDatasetId_fk" FOREIGN KEY ("inputDatasetId") REFERENCES "inputdataset"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobtoproject" ADD CONSTRAINT "JobToProject_jobId_fk" FOREIGN KEY ("jobId") REFERENCES "job"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobtoproject" ADD CONSTRAINT "JobToProject_projectId_fk" FOREIGN KEY ("projectId") REFERENCES "project"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "outputdataset" ADD CONSTRAINT "OutputDataset_jobAssociationId_fk" FOREIGN KEY ("jobAssociationId") REFERENCES "jobtoproject"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
