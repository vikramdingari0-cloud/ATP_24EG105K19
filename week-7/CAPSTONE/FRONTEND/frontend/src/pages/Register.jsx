import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    email: "",
    password: "",
    role: "USER",
  });

  const register = async () => {
    try {
      await api.post("/auth/users", form);
      alert("Registered successfully");
      navigate("/login");
    } catch (err) {
  console.log(err);

  alert(
    err.response?.data?.message ||
    err.response?.data ||
    err.message ||
    "Something went wrong"
  );
}
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-30 blur-[120px] rounded-full"></div>

      {/* Register Card */}
      <div className="relative z-10 w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
        
        {/* Logo / Heading */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-black text-white">
            Create Account ✨
          </h1>

          <p className="text-gray-300 mt-3">
            Join the modern blogging platform
          </p>
        </div>

        {/* Form */}
        <div className="space-y-5">

          {/* First Name */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              First Name
            </label>

            <input
              type="text"
              placeholder="Enter your first name"
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              onChange={(e) =>
                setForm({ ...form, firstName: e.target.value })
              }
            />
          </div>

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
              placeholder="Create password"
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">
              Select Role
            </label>

            <select
              className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
              onChange={(e) =>
                setForm({ ...form, role: e.target.value })
              }
            >
              <option className="text-black" value="USER">
                USER
              </option>

              <option className="text-black" value="AUTHOR">
                AUTHOR
              </option>
            </select>
          </div>

          {/* Register Button */}
          <button
            onClick={register}
            className="w-full py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg transition duration-300 shadow-lg shadow-blue-500/30"
          >
            Create Account
          </button>
        </div>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm mt-8">
          Already have an account?
          <span
            onClick={() => navigate("/login")}
            className="text-blue-400 hover:text-blue-300 cursor-pointer ml-2"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}