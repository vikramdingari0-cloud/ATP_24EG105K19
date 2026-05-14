import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {

  const { user, setUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  // LOGOUT
  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);

    navigate("/login");
  };

  return (

    <div className="min-h-screen bg-gray-900 text-white">

      {/* NAVBAR */}
      <nav className="flex justify-between items-center p-5 bg-gray-800">

        <h1 className="text-2xl font-bold">
          Blog App
        </h1>

        <div className="flex gap-3">

          {user ? (
            <>
              <Link
                to="/articles"
                className="px-4 py-2 bg-blue-500 rounded"
              >
                Articles
              </Link>

              <button
                onClick={logout}
                className="px-4 py-2 bg-red-500 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 py-2 bg-green-500 rounded"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="px-4 py-2 bg-blue-500 rounded"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </nav>

      {/* HOME CONTENT */}
      <div className="text-center mt-20 px-5">

        <h1 className="text-4xl font-bold">
          Welcome to Blog App ✍️
        </h1>

        <p className="mt-5 text-gray-300">
          Read blogs and share your ideas with others.
        </p>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          {user ? (
            <>
              {user.role === "AUTHOR" && (
                <Link
                  to="/author"
                  className="px-5 py-3 bg-purple-500 rounded"
                >
                  Author Dashboard
                </Link>
              )}

              {user.role === "ADMIN" && (
                <Link
                  to="/admin"
                  className="px-5 py-3 bg-yellow-500 rounded"
                >
                  Admin Panel
                </Link>
              )}

              <Link
                to="/articles"
                className="px-5 py-3 bg-blue-500 rounded"
              >
                Explore Articles
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="px-5 py-3 bg-blue-500 rounded"
              >
                Get Started
              </Link>

              <Link
                to="/login"
                className="px-5 py-3 bg-green-500 rounded"
              >
                Login
              </Link>
            </>
          )}

        </div>

        {/* USER INFO */}
        {user && (
          <div className="mt-10">

            <h2 className="text-2xl">
              Hello, {user.firstName}
            </h2>

            <p className="text-gray-400">
              Role : {user.role}
            </p>

          </div>
        )}

      </div>

    </div>
  );
}