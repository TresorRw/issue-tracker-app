import { Issue } from '@/interfaces'
import classNames from 'classnames'
import Link from 'next/link'

const IssueCard = ({ issue }: { issue: Issue }) => {
  return (
    <div className="card hover:bg-base-200 max-w-[420px] w-full hover:shadow-lg hover:transition-all bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">
          <Link href={`/dashboard/issues/${issue.id}`}>{issue.title}</Link>
        </h2>
        <div className="card-actions justify-end">
          <div className={classNames({
            'badge badge-primary': issue.status == 'OPEN',
            'badge badge-success': issue.status == 'CLOSED',
          })}>{issue.status}</div>
          <div className="badge badge-outline">{issue.category}</div>
        </div>
        <p className='text-justify mt-5'>{issue.description!.substring(0, 200)} (...)</p>
      </div>
    </div>
  )
}

export default IssueCard