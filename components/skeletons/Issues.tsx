const IssuesSkeleton = () => {
  return (
    <div className="flex flex-wrap gap-5">
      <div className="card skeleton max-w-[360px] w-full bg-slate-50 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary skeleton h-5"></h2>
          <div className="card-actions justify-end">
            <div className="skeleton h-6 w-20"></div>
            <div className="skeleton h-6 w-32"></div>
          </div>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
        </div>
      </div>
      <div className="card skeleton max-w-[360px] w-full bg-slate-50 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary skeleton h-5"></h2>
          <div className="card-actions justify-end">
            <div className="skeleton h-6 w-20"></div>
            <div className="skeleton h-6 w-32"></div>
          </div>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
        </div>
      </div>
      <div className="card skeleton max-w-[360px] w-full bg-slate-50 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-primary skeleton h-5"></h2>
          <div className="card-actions justify-end">
            <div className="skeleton h-6 w-20"></div>
            <div className="skeleton h-6 w-32"></div>
          </div>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
          <p className="skeleton h-4"></p>
        </div>
      </div>
    </div>
  )
}

export default IssuesSkeleton