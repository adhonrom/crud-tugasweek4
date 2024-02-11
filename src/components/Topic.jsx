"use client";

import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import toast from "react-hot-toast";

export const Topic = ({ item }) => {
  const router = useRouter();

  const [title, setTitle] = useState(item.title);
  const [content, setContent] = useState(item.content);
  const [editMode, setEditMode] = useState(false);

  async function handleUpdateTopic() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ _id: item._id, title, content }),
    });
    const data = await res.json();
    // supaya otomatis nge-refresh tampilan dan update data ke browser
    router.refresh();
    setEditMode(false);
    toast.success("Topik berhasil diupdate.");
  }

  async function handleDeleteTopic() {
    const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([item._id]),
    });
    const data = await res.json();
    // supaya otomatis nge-refresh tampilan dan update data ke browser
    router.refresh();
    toast.success("Topik berhasil dihapus.");
  }

  return (
    <>
      {editMode ? (
        <>
          <div className="flex flex-col rounded-lg gap-4">
            <input
              className="border-slate-500 px-8 py-2"
              type="text"
              placeholder="Topic Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              className="border-slate-500 px-8 py-2"
              type="text"
              placeholder="Topic Description"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-4">
              <button
                className="bg-green-400 rounded-md text-white py-3 px-6 w-fit hover:bg-green-700"
                onClick={handleUpdateTopic}
              >
                ✅ Update Topic
              </button>
              <button
                className="bg-stone-400 rounded-md text-white py-3 px-6 w-fit hover:bg-stone-700"
                onClick={() => setEditMode(false)}
              >
                ❎ Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="p-4 border rounded-lg my-3 flex justify-between gap-5 items-start">
            <div className="font-bold gap-2 text-xl">
              {item.title}
              <h5 className="font-medium text-[16px]">{item.content}</h5>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setEditMode(true)}
                className="hover:bg-black hover:text-white"
              >
                <HiPencilAlt size={24} />
              </button>

              <button
                onClick={handleDeleteTopic}
                className="text-red-600 hover:bg-red-600 hover:text-white"
              >
                <HiOutlineTrash size={24} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
