"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export default function AddTopic() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);

  // jika salah satu input masih kosong, tidak dapat menekan tombol submit
  useEffect(() => {
    if (title && content) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  }, [title, content]);

  async function handleCreateTopic() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([{ title, content }]),
    });
    const data = await res.json();
    //  supaya otomatis ng-refresh tampilan dan update data ke browser
    router.refresh();
    toast.success("Topik berhasil ditambahkan.");
  }

  return (
    <div className="flex flex-col rounded-lg gap-4">
      <input
        className="border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        className="bg-green-400 rounded-md text-white py-3 px-6 w-fit hover:bg-green-700 hover:disabled:cursor-not-allowed hover:disabled:bg-opacity-60"
        onClick={handleCreateTopic}
        disabled={!canSubmit}
      >
        ✅ Submit
      </button>
    </div>
  );
}
