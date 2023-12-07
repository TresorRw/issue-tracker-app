import NavBar from '@/components/NavBar';
import DashboardSkeletonUI from '@/components/skeletons/dashboard';
import { Suspense } from 'react';

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <Suspense fallback={<DashboardSkeletonUI />}>
        {children}
      </Suspense>
    </>
  )
}
