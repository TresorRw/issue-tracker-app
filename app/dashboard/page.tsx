// import Chart from "@/components/dashboard/Chart";
import Stat from "@/components/dashboard/card"
import DashboardSkeletonUI from "@/components/skeletons/dashboard";
import prisma from "@/prisma/client"
import type { Metadata } from "next";
import { Suspense } from "react";

function addAndReturnCount(acc: number, current: { _count: number }) {
  return acc + current._count;
}

async function countUsers() {
  return await prisma.user.count()
}

async function issuesCounter(): Promise<{ open: number, closed: number, bugReports: number, featureRequest: number }> {
  const data = await prisma.issue.groupBy({ by: ['status', 'category'], _count: true })
  const open = data.filter(record => record.status == "OPEN").reduce(addAndReturnCount, 0)
  const closed = data.filter(record => record.status == "CLOSED").reduce(addAndReturnCount, 0)
  const bugReports = data.filter(record => record.category == "BUG_REPORT").reduce(addAndReturnCount, 0)
  const featureRequest = data.filter(record => record.category == "FEATURE_REQUEST").reduce(addAndReturnCount, 0)
  return { open, closed, bugReports, featureRequest }
}

export const metadata: Metadata = {
  title: "Dashboard ~ Issue Tracker APP",
  description: 'System summary page'
}

const Dashboard = async () => {
  const issues = await issuesCounter()
  const users = await countUsers()

  return (
    <Suspense fallback={<DashboardSkeletonUI />}>
      <div className="p-10">
        <div className="flex flex-wrap gap-2">
          <Stat title="USERS" count={users} url="/dashboard/users" />
          <Stat title="OPEN ISSUES" count={issues.open} url="/dashboard/issues?status=OPEN" />
          <Stat title="CLOSED ISSUES" count={issues.closed} url="/dashboard/issues?status=CLOSED" />
          <Stat count={issues.featureRequest} title="FEATURE REQUEST" url="/dashboard/issues?category=FEATURE_REQUEST" />
          <Stat count={issues.bugReports} title="BUG REPORT" url="/dashboard/issues?category=BUG_REPORT" />
        </div>
        <div className="flex flex-wrap gap-2">
          {/* <Chart /> */}
        </div>
      </div>
    </Suspense>
  )
}

export default Dashboard