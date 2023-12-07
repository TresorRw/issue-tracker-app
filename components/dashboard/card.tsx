import Link from "next/link"

const Stat = ({ title, count, url }: { url:string,title: string, count: string | number }) => {
  return (
    <div className="card max-w-[320px] hover:bg-base-200 hover:shadow-lg hover:transition-all bg-base-100 shadow-xl w-full">
      <div className="card-body">
        <Link href={url} className="card-title text-primary">
          {title}
        </Link>
        <div className="card-actions justify-end">
          <h1 className="text-3xl">{count}</h1>
        </div>
      </div>
    </div>
  )
}

export default Stat