


"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation';


export default function EditTopic() {
  

  const router = useRouter();
  const [title, setTitle] = useState(title);
  const [content, setContent] = useState(content);

 async function handleUpdate(){
  
     const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({_id: item._id, title, content})
     });
     const data = await res.json()
     console.log(data);
    //  supaya otomatis ng-refresh tampilan dan update data ke browser
     router.refresh();
  }


return (
  <div className="flex flex-col rounded-lg gap-4">
  <input className="border-slate-500 px-8 py-2" type="text" placeholder="Topic Title"  value={title}
    onChange={(e) => setTitle(e.target.value)}
  />
  <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Description' value={content}
    onChange={(e) => setContent(e.target.value)}
  />
  <button className=" bg-green-400 rounded-md text-white py-3 font-thin px-6 w-fit"
    onClick={handleUpdate}
  >
   Edit Topic
  </button>
 </div> 
)













}