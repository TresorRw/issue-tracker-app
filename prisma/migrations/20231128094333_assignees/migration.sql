-- CreateTable
CREATE TABLE "Assignees" (
    "userId" TEXT NOT NULL,
    "issueId" TEXT NOT NULL,

    CONSTRAINT "Assignees_pkey" PRIMARY KEY ("userId","issueId")
);

-- AddForeignKey
ALTER TABLE "Assignees" ADD CONSTRAINT "Assignees_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assignees" ADD CONSTRAINT "Assignees_issueId_fkey" FOREIGN KEY ("issueId") REFERENCES "Issue"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
