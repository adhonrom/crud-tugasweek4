"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { HiOutlineTrash } from 'react-icons/hi'


export default function RemoveBtn ({item}) {

  const router = useRouter()

  async function handleDelete(){
    const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([item._id]),
     });
     const data = await res.json()
     console.log(data);
     router.refresh();

    }



    return (
      <button onClick={handleDelete} className="text-red-600">
          <HiOutlineTrash size={24} />
      </button>
    )
  }



