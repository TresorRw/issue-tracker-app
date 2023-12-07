/*
  Warnings:

  - The values [IN_PROGRESS] on the enum `IssueStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "IssueStatus_new" AS ENUM ('OPEN', 'CLOSED');
ALTER TABLE "Issue" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Issue" ALTER COLUMN "status" TYPE "IssueStatus_new" USING ("status"::text::"IssueStatus_new");
ALTER TYPE "IssueStatus" RENAME TO "IssueStatus_old";
ALTER TYPE "IssueStatus_new" RENAME TO "IssueStatus";
DROP TYPE "IssueStatus_old";
ALTER TABLE "Issue" ALTER COLUMN "status" SET DEFAULT 'OPEN';
COMMIT;
