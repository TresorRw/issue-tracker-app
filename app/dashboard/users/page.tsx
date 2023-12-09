import UsersSkeleton from "@/components/skeletons/Users";
import prisma from "@/prisma/client"
import type { Metadata } from "next";
import { Suspense } from "react";

async function fetchUsers() {
  return await prisma.user.findMany({ select: { displayName: true, email: true, createdAt: true, createdIssues: true, assignedProjects: true }, orderBy: { createdAt: 'desc' } });
}

export const metadata: Metadata = {
  title: "Users ~ Issue Tracker APP",
  description: 'Page with table of users of system'
}

const UsersPage = async () => {
  const users = await fetchUsers();
  return (
    <Suspense fallback={<UsersSkeleton />}>
      <div className='p-5 md:p-5 lg:p-10'>
        <h3 className="text-xl">Users</h3>
        <table className="table table-zebra max-w-[780px] w-full my-4">
          <tr className="bg-primary text-white">
            <th>#</th>
            <th>Names</th>
            <th>Email</th>
            <th>Assigned Projects</th>
            <th>Created Projects</th>
            <th>Joined At</th>
          </tr>
          <tbody>
            {users.map((user, i) => (
              <tr key={i} className="hover:bg-slate-200 cursor-pointer">
                <td className="table-cell">{i + 1}</td>
                <td className="table-cell">{user.displayName}</td>
                <td className="table-cell">{user.email}</td>
                <td className="table-cell">{user.assignedProjects.length}</td>
                <td className="table-cell">{user.createdIssues.length}</td>
                <td className="table-cell">{new Date(user.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Suspense>
  )
}

export default UsersPage