const DashboardSkeletonUI = () => {
  return (
    <div className="flex flex-wrap gap-3">
      <div className="card skeleton max-w-[320px] bg-slate-50 shadow-xl w-full">
        <div className="card-body">
          <h3 className="card-title text-primary h-5 skeleton"></h3>
          <div className="card-actions justify-end">
            <h1 className="text-3xl skeleton h-10 w-6"></h1>
          </div>
        </div>
      </div>
      <div className="card skeleton max-w-[320px] bg-slate-50 shadow-xl w-full">
        <div className="card-body">
          <h3 className="card-title text-primary h-5 skeleton"></h3>
          <div className="card-actions justify-end">
            <h1 className="text-3xl skeleton h-10 w-6"></h1>
          </div>
        </div>
      </div>
      <div className="card skeleton max-w-[320px] bg-slate-50 shadow-xl w-full">
        <div className="card-body">
          <h3 className="card-title text-primary h-5 skeleton"></h3>
          <div className="card-actions justify-end">
            <h1 className="text-3xl skeleton h-10 w-6"></h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardSkeletonUI