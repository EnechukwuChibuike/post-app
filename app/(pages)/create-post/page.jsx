"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleCreatePost = async (e) => {
    if (!title || !body) alert("Please fill in the form");
    e.preventDefault();

    const response = await fetch("/api/create-post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body }),
    });

    if (response.ok) {
      alert("successful");
    } else {
      alert("unsuccessful");
    }
  };

  return (
    <main className="flex justify-center items-center w-screen h-screen">
      <form
        className="w-[50vw] h-[70vh] border-[0.5px] border-black/40"
        onSubmit={handleCreatePost}
      >
        <input
          className="placeholder:text-4xl text-4xl px-2 w-full h-[20%] outline-none border-b-[1px] border-black/40"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        <textarea
          className="w-full outline-none h-[80%] px-2 overflow-y-auto"
          placeholder="write post"
          onChange={(e) => setBody(e.target.value)}
          value={body}
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </main>
  );
}

export default CreatePost;
