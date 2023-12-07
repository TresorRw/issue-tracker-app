import Stat from "@/components/dashboard/card"
import DashboardSkeletonUI from "@/components/skeletons/dashboard";
import prisma from "@/prisma/client"
import { Suspense } from "react";

async function countIssuesWithStatus() {
  return await prisma.issue.groupBy({ by: 'status', _count: true })
}

async function countIssues() {
  return await prisma.issue.groupBy({ by: 'category', _count: true });
}

async function countUsers() {
  return await prisma.user.count();
}

const Dashboard = async () => {
  const categorizedIssues = await countIssues();
  const users = await countUsers();
  const statusIssues = await countIssuesWithStatus();
  return (
    <Suspense fallback={<DashboardSkeletonUI />}>
      <div className="p-10">
        <div className="flex flex-wrap gap-3">
          <Stat title="USERS" count={users} url="/dashboard/users" />
          {categorizedIssues.map((stats, i) => (
            <Stat
              key={i}
              title={stats.category.replace('_', ' ')}
              count={stats._count}
              url={`/dashboard/issues?category=${stats.category}`}
            />
          ))}
          {statusIssues.map((stats, i) => (
            <Stat
              key={i}
              title={stats.status + ' ISSUES'}
              count={stats._count}
              url={`/dashboard/issues?status=${stats.status}`}
            />
          ))}
        </div>
      </div>
    </Suspense>
  )
}

export default Dashboard