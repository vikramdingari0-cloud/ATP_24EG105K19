import { useEffect, useState } from "react";
import api from "../api/axios";

export default function AuthorDashboard() {
  const [articles, setArticles] = useState([]);

  const [form, setForm] = useState({
    title: "",
    category: "",
    content: "",
  });

  const [editId, setEditId] = useState(null);

  // 📥 FETCH
  const fetchArticles = async () => {
    try {
      const res = await api.get("/author-api/articles");
      setArticles(res.data.payload);
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to fetch articles");
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  // ➕ CREATE
  const createArticle = async () => {
    try {
      await api.post("/author-api/articles", form);

      setForm({
        title: "",
        category: "",
        content: "",
      });

      fetchArticles();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to create article");
    }
  };

  // ✏️ EDIT MODE
  const startEdit = (a) => {
    setEditId(a._id);

    setForm({
      title: a.title,
      category: a.category,
      content: a.content,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // 🔄 UPDATE
  const updateArticle = async () => {
  try {

    await api.put(
      `/author-api/articles/${editId}`,
      form
    );

    setEditId(null);

    setForm({
      title: "",
      category: "",
      content: "",
    });

    fetchArticles();

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Failed to update article"
    );
  }
};

  // 🟢 TOGGLE ACTIVE
  const toggleStatus = async (a) => {
  try {

    await api.patch(
      `/author-api/articles/${a._id}`,
      {
        isArticleActive:
          !a.isArticleActive,
      }
    );

    fetchArticles();

  } catch (err) {

    console.log(err);

    alert(
      err.response?.data?.message ||
      "Failed to update status"
    );
  }
};

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-6 md:p-10 relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 mb-10">
        <h1 className="text-5xl font-black">
          ✍️ Author Dashboard
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Create, manage, and publish your articles professionally.
        </p>
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* FORM SECTION */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl h-fit">

          <h2 className="text-2xl font-bold mb-6">
            {editId ? "Edit Article ✏️" : "Create Article 🚀"}
          </h2>

          <div className="space-y-5">

            {/* TITLE */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Article Title
              </label>

              <input
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                placeholder="Enter article title"
                value={form.title}
                onChange={(e) =>
                  setForm({
                    ...form,
                    title: e.target.value,
                  })
                }
              />
            </div>

            {/* CATEGORY */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Category
              </label>

              <input
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                placeholder="Technology, AI, Travel..."
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category: e.target.value,
                  })
                }
              />
            </div>

            {/* CONTENT */}
            <div>
              <label className="block text-sm text-gray-300 mb-2">
                Content
              </label>

              <textarea
                rows="7"
                className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition resize-none"
                placeholder="Write your article content..."
                value={form.content}
                onChange={(e) =>
                  setForm({
                    ...form,
                    content: e.target.value,
                  })
                }
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={editId ? updateArticle : createArticle}
              className={`w-full py-3 rounded-2xl transition font-semibold text-lg shadow-lg ${
                editId
                  ? "bg-yellow-500 hover:bg-yellow-600 shadow-yellow-500/30"
                  : "bg-blue-600 hover:bg-blue-700 shadow-blue-500/30"
              }`}
            >
              {editId ? "Update Article" : "Publish Article"}
            </button>
          </div>
        </div>

        {/* ARTICLES GRID */}
        <div className="lg:col-span-2 grid gap-6">

          {articles.length === 0 ? (
            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center text-gray-400">
              No articles created yet ✍️
            </div>
          ) : (
            articles.map((a) => (
              <div
                key={a._id}
                className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl hover:scale-[1.01] hover:border-blue-500/30 transition duration-300"
              >

                {/* TOP */}
                <div className="flex items-start justify-between gap-4">

                  <div>
                    <h2 className="text-2xl font-bold">
                      {a.title}
                    </h2>

                    <p className="text-blue-300 mt-1 text-sm">
                      #{a.category}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-xs font-semibold ${
                      a.isArticleActive
                        ? "bg-green-500/20 text-green-300 border border-green-500/20"
                        : "bg-red-500/20 text-red-300 border border-red-500/20"
                    }`}
                  >
                    {a.isArticleActive ? "Active" : "Inactive"}
                  </span>
                </div>

                {/* CONTENT */}
                <p className="mt-5 text-gray-300 leading-relaxed">
                  {a.content.slice(0, 180)}...
                </p>

                {/* ACTIONS */}
                <div className="flex gap-4 mt-8">

                  <button
                    onClick={() => startEdit(a)}
                    className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-sm font-medium"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => toggleStatus(a)}
                    className="px-5 py-2 rounded-xl bg-gray-700 hover:bg-gray-600 transition text-sm font-medium"
                  >
                    Toggle Status
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}