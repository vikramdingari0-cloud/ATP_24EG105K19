import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");

      const res = await api.post("/auth/login", form);

      setUser(res.data.payload);

      const role = res.data.payload.role;

      if (role === "AUTHOR") navigate("/author");
      else if (role === "ADMIN") navigate("/admin");
      else navigate("/");

    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-30 blur-[120px] rounded-full"></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-white">
            Welcome Back 👋
          </h1>

          <p className="text-gray-300 mt-3">
            Login to continue your blogging journey
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Error */}
          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-300 text-sm rounded-2xl px-4 py-3">
              {error}
            </div>
          )}

          {/* Login Button */}
          <button
            onClick={handleLogin}
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition duration-300 shadow-lg shadow-blue-500/30"
          >
            Login
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-8">
          New user?
          <Link
            to="/register"
            className="text-blue-400 hover:text-blue-300 ml-2"
          >
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}