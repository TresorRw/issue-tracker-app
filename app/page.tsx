import Link from "next/link";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-4xl font-bold">Hello there!</h1>
          <p className="py-6">An issue tracker is a web application used to manage and keep track of various tasks, bugs, feature requests, and other issues in a project or organization. It&apos;s a valuable tool for project management, software development, and other collaborative work environments. <br /> I have built this project to learn NextJS framework.</p>
          <Link className="btn btn-primary" href="/login">Get Started</Link>
        </div>
      </div>
    </div>
  );
}
