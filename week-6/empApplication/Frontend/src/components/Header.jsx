import { NavLink } from "react-router"

function Header() {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center text-white">
        <h1 className="text-2xl font-bold">EmpApp</h1>
        <ul className="flex gap-6">
          <li>
            <NavLink 
              to="" 
              className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-blue-200"}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="create-emp" 
              className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-blue-200"}
            >
              Add Employee
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="list" 
              className={({ isActive }) => isActive ? "underline font-bold" : "hover:text-blue-200"}
            >
              Employee List
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header
