import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <header className="sticky top-0 bg-white shadow-md py-4">
      <div className="container">
        <nav className="flex justify-center items-center">
          <div className="flex mx-2 text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-medium" : ""
              }
              to="/"
            >
              Products
            </NavLink>
          </div>
          <div className="flex mx-2 text-lg">
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline font-medium" : ""
              }
              to="/orders"
            >
              Orders
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
