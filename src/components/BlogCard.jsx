export default function BlogCard({ post }) {
  return (
    <div className="bg-white shadow p-4 rounded-xl">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">
        {post.title}
      </h2>

      <p className="text-gray-600 text-sm mt-2 line-clamp-3">
        {post.summary || post.content.replace(/<[^>]+>/g, "").slice(0, 120) + "..."}
      </p>

      <a
        href={post.link}
        target="_blank"
        className="inline-block mt-4 text-blue-600 font-medium"
      >
        Read More →
      </a>
    </div>
  );
}
