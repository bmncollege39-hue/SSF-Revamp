import { useEffect, useState } from "react";

export default function BlogFeed() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const BLOG_ID = import.meta.env.VITE_BLOG_ID;
  const API_KEY = import.meta.env.VITE_BLOGGER_API_KEY;

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }

        const data = await response.json();
        setPosts(data.items || []);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <div className="min-h-screen justify-center items-center">
    <p className="text-center py-4 text-2xl pt-40">Loading Blogs...</p>
  </div>;

  return (
      <div className="min-h-screen py-30 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-6 max-w-6xl mx-auto">
      {/* blog card */}
      {posts.map((post) => {
        const image = extractImage(post.content);
        const excerpt = stripHtml(post.content).substring(0, 120);

        return (
          <div
            key={post.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border"
          >
            {/* Image */}
            {image ? (
              <img
                src={image}
                alt={post.title}
                className="h-48 w-full object-cover"
              />
            ) : (
              <div className="h-48 w-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                No Image
              </div>
            )}

            <div className="p-4">
              {/* Date */}
              <p className="text-xs bg-blue-100 text-blue-700 inline-block px-2 py-1 rounded-md mb-2">
                {new Date(post.published).toLocaleDateString()}
              </p>

              {/* Title */}
              <h2 className="text-lg font-semibold line-clamp-2 mb-2">
                {post.title}
              </h2>

              {/* Excerpt */}
              <p className="text-gray-600 text-sm line-clamp-3">{excerpt}...</p>

              {/* Button */}
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm font-medium text-blue-600 hover:text-blue-800"
              >
                Read More →
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
// Extract first image from post HTML
function extractImage(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const img = doc.querySelector("img");
  return img ? img.src : null;
}
// Utility function to strip HTML
function stripHtml(html) {
  const temp = document.createElement("div");
  temp.innerHTML = html;
  return temp.textContent || temp.innerText || "";
}
