import { useEffect, useState, useContext } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function ArticleFeed() {
  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const { user, setUser } =
    useContext(AuthContext);

  const navigate = useNavigate();

  // 📥 FETCH ARTICLES
  const fetchArticles = async () => {
    try {
      const res = await api.get("/user-api/articles");

      setArticles(res.data.payload);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // 🚪 LOGOUT
  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);

    navigate("/login");
  };

  // 📂 UNIQUE CATEGORIES
  const categories = [
    "All",
    ...new Set(
      articles.map((a) => a.category)
    ),
  ];

  // 🔍 FILTERED ARTICLES
  const filteredArticles = articles.filter((a) => {
    const matchesSearch =
      a.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      a.content
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      a.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">

        <div className="text-center">

          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-5 text-gray-400 text-lg">
            Loading articles...
          </p>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 border-b border-white/10 backdrop-blur-xl bg-white/5">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* LEFT */}
          <div>
            <h1 className="text-5xl font-black">
              📰 Explore Articles
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Discover stories, insights, and ideas from creators around the world.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4 flex-wrap">

            {user ? (
              <>
                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10">

                  👋 {user.firstName}

                </div>

                <button
                  onClick={logout}
                  className="px-5 py-3 rounded-2xl bg-red-500 hover:bg-red-600 transition font-semibold shadow-lg shadow-red-500/30"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 transition border border-white/10"
                >
                  Login
                </Link>

                <Link
                  to="/register"
                  className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-500/30"
                >
                  Get Started
                </Link>
              </>
            )}

          </div>
        </div>
      </div>

      {/* SEARCH + FILTER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 mt-10">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl">

          <div className="flex flex-col lg:flex-row gap-5">

            {/* SEARCH */}
            <input
              type="text"
              placeholder="Search articles..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
            />

            {/* CATEGORY FILTER */}
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value
                )
              }
              className="px-5 py-4 rounded-2xl bg-[#1e293b] border border-white/10 text-white outline-none focus:border-blue-500"
            >
              {categories.map((cat, i) => (
                <option key={i} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">

        {filteredArticles.length === 0 ? (
          <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-14 text-center">

            <h2 className="text-3xl font-bold">
              No Articles Found 😢
            </h2>

            <p className="text-gray-400 mt-4">
              Try searching with different keywords.
            </p>

          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {filteredArticles.map((a) => (
              <div
                key={a._id}
                className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-6 shadow-2xl hover:scale-[1.02] hover:border-blue-500/30 transition duration-300 flex flex-col"
              >

                {/* CATEGORY */}
                <div className="flex items-center justify-between mb-5">

                  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-xs border border-blue-500/20">
                    #{a.category}
                  </span>

                  <span className="text-xs text-gray-400">
                    {new Date(
                      a.createdAt
                    ).toLocaleDateString()}
                  </span>
                </div>

                {/* TITLE */}
                <h2 className="text-2xl font-bold leading-snug group-hover:text-blue-400 transition">

                  {a.title}

                </h2>

                {/* AUTHOR */}
                <div className="flex items-center gap-3 mt-5">

                  <div className="w-11 h-11 rounded-full bg-purple-600 flex items-center justify-center font-bold">

                    {a.author?.firstName
                      ?.charAt(0) || "A"}

                  </div>

                  <div>
                    <p className="font-semibold">
                      {a.author?.firstName ||
                        "Unknown Author"}
                    </p>

                    <p className="text-xs text-gray-400">
                      Content Creator
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <p className="text-gray-300 mt-5 leading-7 line-clamp-4 flex-1">

                  {a.content}

                </p>

                {/* FOOTER */}
                <div className="mt-8 flex items-center justify-between">

                  <Link
                    to={`/article/${a._id}`}
                    className="px-5 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-500/20"
                  >
                    Read Article →
                  </Link>

                  <div className="flex items-center gap-2 text-sm text-gray-400">

                    💬 {a.comments?.length || 0}

                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}