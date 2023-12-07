const UsersSkeleton = () => {
  return (
    <div className="p-10">
      <table className="table table-zebra max-w-[780px] w-full my-4">
        <tr>
          <th>#</th>
          <th>Names</th>
          <th>Email</th>
          <th>N <sup><u>o</u></sup> of Projects</th>
          <th>Joined At</th>
        </tr>
        <tbody>
          <tr>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
          </tr>
          <tr>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
          </tr>
          <tr>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
            <td className="skeleton"></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersSkeleton