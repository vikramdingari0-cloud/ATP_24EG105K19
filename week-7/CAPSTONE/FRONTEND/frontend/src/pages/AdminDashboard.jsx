import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const [users, setUsers] = useState([]);

  const { setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  // 📥 FETCH USERS
  const fetchUsers = async () => {
    try {
      const res = await api.get("/admin-api/users");

      setUsers(res.data.payload);

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Failed to fetch users"
      );
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // 🔄 TOGGLE USER STATUS
  const toggleStatus = async (u) => {
    try {
      await api.patch(`/admin-api/users/${u._id}`, {
        isUserActive: !u.isUserActive,
      });

      fetchUsers();

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Failed to update status"
      );
    }
  };

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-10 relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5 mb-10">

        <div>
          <h1 className="text-5xl font-black">
            🛡️ Admin Dashboard
          </h1>

          <p className="text-gray-400 mt-3 text-lg">
            Manage users, monitor platform activity, and control access professionally.
          </p>
        </div>

        {/* LOGOUT BUTTON */}
        <button
          onClick={logout}
          className="px-5 py-3 rounded-2xl bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg shadow-red-500/30"
        >
          Logout
        </button>
      </div>

      {/* STATS */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
          <h2 className="text-gray-400 text-sm">
            Total Users
          </h2>

          <p className="text-4xl font-black mt-2">
            {users.length}
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
          <h2 className="text-gray-400 text-sm">
            Active Users
          </h2>

          <p className="text-4xl font-black mt-2 text-green-400">
            {
              users.filter((u) => u.isUserActive)
                .length
            }
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">
          <h2 className="text-gray-400 text-sm">
            Blocked Users
          </h2>

          <p className="text-4xl font-black mt-2 text-red-400">
            {
              users.filter((u) => !u.isUserActive)
                .length
            }
          </p>
        </div>
      </div>

      {/* USERS TABLE */}
      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">

        <div className="overflow-x-auto">

          <table className="w-full text-left">

            {/* TABLE HEADER */}
            <thead className="bg-white/5 border-b border-white/10">
              <tr>
                <th className="p-5 text-gray-300 font-semibold">
                  User
                </th>

                <th className="p-5 text-gray-300 font-semibold">
                  Email
                </th>

                <th className="p-5 text-gray-300 font-semibold">
                  Role
                </th>

                <th className="p-5 text-gray-300 font-semibold">
                  Status
                </th>

                <th className="p-5 text-gray-300 font-semibold">
                  Action
                </th>
              </tr>
            </thead>

            {/* TABLE BODY */}
            <tbody>

              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-10 text-gray-400"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr
                    key={u._id}
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >

                    {/* NAME */}
                    <td className="p-5">
                      <div>
                        <p className="font-semibold text-white">
                          {u.firstName} {u.lastName}
                        </p>

                        <p className="text-sm text-gray-400">
                          User ID: {u._id.slice(0, 8)}...
                        </p>
                      </div>
                    </td>

                    {/* EMAIL */}
                    <td className="p-5 text-gray-300">
                      {u.email}
                    </td>

                    {/* ROLE */}
                    <td className="p-5">
                      <span className="px-4 py-2 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/20">
                        {u.role}
                      </span>
                    </td>

                    {/* STATUS */}
                    <td className="p-5">
                      <span
                        className={`px-4 py-2 rounded-full text-xs font-semibold ${
                          u.isUserActive
                            ? "bg-green-500/20 text-green-300 border border-green-500/20"
                            : "bg-red-500/20 text-red-300 border border-red-500/20"
                        }`}
                      >
                        {u.isUserActive
                          ? "Active"
                          : "Blocked"}
                      </span>
                    </td>

                    {/* ACTION */}
                    <td className="p-5">

                      <button
                        onClick={() => toggleStatus(u)}
                        className={`px-5 py-2 rounded-xl text-sm font-semibold transition ${
                          u.isUserActive
                            ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/20"
                            : "bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/20"
                        }`}
                      >
                        {u.isUserActive
                          ? "Block"
                          : "Unblock"}
                      </button>

                    </td>
                  </tr>
                ))
              )}

            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}