import { Issue } from "@/interfaces"
import IssueCard from "./IssueCard"

const Issues = ({ issues }: { issues: Issue[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {issues.map(issue => {
        return (
          <IssueCard key={issue.id} issue={issue} />
        )
      })}
    </div>
  )
}

export default Issues