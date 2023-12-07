import React from 'react'

const CommentsSkeleton = () => {
  return (
    <div className="my-2">
      <div className="collapse my-1 collapse-arrow bg-slate-100">
        <input type="checkbox" />
        <div className="collapse-title font-medium">
          <div className="flex justify-between">
            <h1 className="skeleton w-1/3 h-5"> <span className="text-xs skeleton"></span> </h1>
            <h5 className="font-light skeleton w-1/4 h-5"></h5>
          </div>
        </div>
        <div className="collapse-content space-y-2">
          <p className="skeleton h-5"></p>
          <p className="skeleton h-5"></p>
          <p className="skeleton h-5"></p>
        </div>
      </div>
    </div>
  )
}

export default CommentsSkeleton