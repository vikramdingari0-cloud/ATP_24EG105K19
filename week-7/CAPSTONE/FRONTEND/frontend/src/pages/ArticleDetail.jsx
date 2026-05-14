import { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";

export default function ArticleDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { user } = useContext(AuthContext);

  const [article, setArticle] = useState(null);

  const [comment, setComment] = useState("");

  const [loading, setLoading] = useState(true);

  // 📥 FETCH ARTICLE
  const fetchArticle = async () => {
    try {
      const res = await api.get("/user-api/articles");

      const found = res.data.payload.find(
        (a) => a._id === id
      );

      setArticle(found);

    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticle();
  }, [id]);

  // 💬 ADD COMMENT
  const addComment = async () => {
    if (!comment.trim()) return;

    try {
      await api.post(`/user-api/articles/${id}/comments`, {
  comment,
});

      setComment("");

      fetchArticle();

    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
        "Failed to add comment"
      );
    }
  };

  // 🚪 GO BACK
  const goBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center text-white">
        <div className="text-center">
          <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>

          <p className="mt-5 text-gray-400 text-lg">
            Loading article...
          </p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center">

        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl p-10 text-center max-w-md">

          <h1 className="text-3xl font-bold text-white mb-4">
            Article Not Found 😢
          </h1>

          <p className="text-gray-400 mb-6">
            The article you are looking for does not exist.
          </p>

          <button
            onClick={goBack}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-2xl text-white font-semibold"
          >
            Go Back
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f172a] text-white relative overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500 opacity-20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-20 blur-[120px] rounded-full"></div>

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-10">

        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-10">

          <button
            onClick={goBack}
            className="px-5 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition backdrop-blur-xl border border-white/10"
          >
            ← Back
          </button>

          <Link
            to="/"
            className="text-gray-400 hover:text-white transition"
          >
            Home
          </Link>
        </div>

        {/* ARTICLE CARD */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 md:p-12 shadow-2xl">

          {/* CATEGORY */}
          <div className="flex items-center gap-3 mb-5">

            <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-300 text-sm border border-blue-500/20">
              #{article.category}
            </span>

            <span
              className={`px-4 py-2 rounded-full text-sm border ${
                article.isArticleActive
                  ? "bg-green-500/20 text-green-300 border-green-500/20"
                  : "bg-red-500/20 text-red-300 border-red-500/20"
              }`}
            >
              {article.isArticleActive
                ? "Published"
                : "Inactive"}
            </span>
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-black leading-tight">
            {article.title}
          </h1>

          {/* META */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-8 text-gray-400 border-b border-white/10 pb-6">

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-lg font-bold">
                {article.author?.firstName?.charAt(0) || "A"}
              </div>

              <div>
                <p className="text-white font-semibold">
                  {article.author?.firstName || "Unknown"}{" "}
                  {article.author?.lastName || ""}
                </p>

                <p className="text-sm text-gray-400">
                  Author
                </p>
              </div>
            </div>

            <div className="text-sm">
              📅{" "}
              {new Date(
                article.createdAt
              ).toLocaleDateString()}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-10">

            <p className="text-gray-200 leading-9 whitespace-pre-line text-[17px]">
              {article.content}
            </p>

          </div>
        </div>

        {/* COMMENTS SECTION */}
        <div className="mt-10 bg-white/10 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 shadow-2xl">

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-3xl font-black">
              💬 Comments
            </h2>

            <span className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300">
              {article.comments?.length || 0} Comments
            </span>
          </div>

          {/* COMMENT INPUT */}
          {user ? (
            <div className="flex flex-col md:flex-row gap-4 mb-10">

              <input
                className="flex-1 px-5 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder-gray-400 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition"
                placeholder="Write your thoughts..."
                value={comment}
                onChange={(e) =>
                  setComment(e.target.value)
                }
              />

              <button
                onClick={addComment}
                className="px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-700 transition font-semibold shadow-lg shadow-blue-500/30"
              >
                Post Comment
              </button>

            </div>
          ) : (
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-5 mb-8 text-yellow-300">

              Please login to add comments.

            </div>
          )}

          {/* COMMENTS LIST */}
          <div className="space-y-5">

            {article.comments?.length === 0 ? (
              <div className="text-center py-10 text-gray-400">
                No comments yet ✨
              </div>
            ) : (
              article.comments?.map((c, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/5 rounded-2xl p-5 hover:bg-white/10 transition"
                >

                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center font-bold">
                      {c.user?.firstName?.charAt(0) || "U"}
                    </div>

                    <div>
                      <p className="font-semibold text-white">
                        {c.user?.firstName || "User"}
                      </p>

                      <p className="text-xs text-gray-400">
                        Reader
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-7">
                    {c.comment}
                  </p>

                </div>
              ))
            )}

          </div>
        </div>
      </div>
    </div>
  );
}