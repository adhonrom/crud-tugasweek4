"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function AddTopic() {
  // console.log("hi") --> cek apakah udah di client component

  // const [title, setTitle] = useState("")
  // const [description, SetDescription] = useState("")

  // return (
  //   <form className="flex flex-col rounded-lg gap-4">
  //    <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Title' />
  //    <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Description' />
  //    <button className="font-bold bg-green-400 font-thin text-white py-3 px-6 w-fit">
  //     Add Topic
  //    </button>
  //   </form>
  // )

  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

 async function handleCreateTopic(){
  
     const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([{title, content}])
     });
     const data = await res.json()
     console.log(data);
    //  supaya otomatis ng-refresh tampilan dan update data ke browser
     router.refresh();
  }


return (
  <div className="flex flex-col rounded-lg gap-4">
  <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Title' 
    onChange={(e) => setTitle(e.target.value)}
  />
  <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Description'
    onChange={(e) => setContent(e.target.value)}
  />
  <button className=" bg-green-400 rounded-md text-white py-3 font-thin px-6 w-fit"
    onClick={handleCreateTopic}
  >
   Update Topic
  </button>
 </div>
)













}
