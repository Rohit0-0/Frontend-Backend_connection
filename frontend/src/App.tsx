import React, { useEffect, useState } from "react";
import { getPosts, createPost, updatePost, deletePost } from "./services/api";

type Post = {
  id: number;
  title: string;
  content: string;
};

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);

  // Fetch all posts
  const fetchPosts = async () => {
    const res = await getPosts();
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // Add or update post
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      await updatePost(editingId, { title, content });
      setEditingId(null);
    } else {
      await createPost({ title, content });
    }
    setTitle("");
    setContent("");
    fetchPosts();
  };

  // Edit post
  const handleEdit = (post: Post) => {
    setTitle(post.title);
    setContent(post.content);
    setEditingId(post.id);
  };

  // Delete post
  const handleDelete = async (id: number) => {
    await deletePost(id);
    fetchPosts();
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h1>CRUD Posts</h1>

      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ width: "100%", padding: "0.5rem", marginBottom: "0.5rem" }}
        />
        <button type="submit">{editingId ? "Update" : "Add"} Post</button>
      </form>

      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: "1rem" }}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button
              onClick={() => handleEdit(post)}
              style={{ marginRight: "0.5rem" }}
            >
              Edit
            </button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
