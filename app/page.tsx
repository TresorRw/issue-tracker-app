import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex-col flex justify-center items-center">
      <h2>HomePage</h2>
      <progress className="progress w-1/3"></progress>
      <h3>Still in Development </h3>
      <h4>Available Routes for now</h4>
      <div className="active-links flex p-5 gap-5 text-blue-600">
        <Link href={"/login"}>/login</Link>
        <Link href={"/register"}>/register</Link>
        <Link href={"/dashoard"}>/dashboard</Link>
        <Link href={"/dashboard/issues"}>/dashboard/isues</Link>
        <Link href={"/dashboard/users"}>/dashboard/users</Link>
        <Link href={"/dashboard/issues/new"}>/dashboard/issues/new</Link>
        <Link href={"/dashboard/issues/issue-id"}>/dashboard/issues/[id]</Link>
      </div>
    </div>
  );
}
