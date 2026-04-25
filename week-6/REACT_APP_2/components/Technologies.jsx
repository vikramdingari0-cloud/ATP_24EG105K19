import React from 'react'
import {Outlet,NavLink} from 'react-router'
function Technologies() {
  return (
  <div>
    <nav className='p-5'>
      <ul className='flex justify-center gap-5 text-2xl'>
        <li>
          <NavLink to='/java' className={({ isActive }) => (isActive ? "text-red-700 bg-blue-200 p-3" : "")}>Java</NavLink>
        </li>
        <li>
          <NavLink to ='/nodejs' className={({ isActive }) => (isActive ? "text-red-700 bg-blue-200 p-3" : "")}>Nodejs</NavLink>
        </li>
        <li>
          <NavLink to ='/vue' className={({ isActive }) => (isActive ? "text-red-700 bg-blue-200 p-3" : "")}>Vue</NavLink>
        </li>
      </ul>
    </nav>
    <Outlet />
  </div>
  )
}

export default Technologies