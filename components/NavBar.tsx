'use client'

import Link from "next/link"
import classNames from "classnames";
import { usePathname, useRouter } from "next/navigation";
import { Logout } from "@/app/actions/auth";

function Menus({ currentPath }: { currentPath: string }) {
  const menus = [
    { href: '/dashboard', label: 'Dashboard'},
    { href: '/dashboard/issues', label: 'Issues'},
    { href: '/dashboard/users', label: 'Users'},
    { href: '/dashboard/profile', label: 'Profile'},
  ]
  return (
    menus.map((menu) => (
      <li key={menu.href} className="mx-2 rounded-sm">
        <Link
          className={classNames({
            'bg-primary text-white': menu.href == currentPath,
          })}
          href={menu.href}
        >
          {menu.label}
        </Link>
      </li>
    ))
  )
}

const NavBar = () => {
  const currentPath = usePathname();
  const router = useRouter();
  const logout = async () => {
    await Logout()
    router.push('/');
  }

  return (
    <nav className="navbar shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu dropdown-content z-[1] bg-white mt-3 p-2 shadow-md rounded-box w-56">
            <Menus currentPath={currentPath} />
          </ul>
        </div>
        <Link href={'/dashboard'} className="text-xl">Issue Tracker</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Menus currentPath={currentPath} />
        </ul>
      </div>
      <div className="navbar-end">
        <button onClick={logout} className="btn text-white btn-sm btn-error">Logout</button>
      </div>
    </nav>
  )
}

export default NavBar