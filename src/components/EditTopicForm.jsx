
"use client"

import { HiPencilAlt } from "react-icons/hi";
import { HiOutlineTrash } from 'react-icons/hi'
import Link from 'next/link';
import  RemoveBtn from './RemoveBtn';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import React from 'react'

export const EditTopic = ({item}) => {
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
    <div>
      <div  className="p-4 border rounded-lg my-3 flex justify-between gap-5 items-start">
            
            <div className="font-bold gap tex-xl" >
                {item.title}
                <h5 className="font-thin" >{item.content}</h5>                                 

            </div>
            
            <div className="flex gap-4">
                <Link href={'editTopic/123'}>
                    <HiPencilAlt size={24} />
                </Link>
            
                <button onClick={handleDelete} className="text-red-600">
               <HiOutlineTrash size={24} />
               </button>

            {/* <RemoveBtn /> */}
            </div>
               

            </div>
    </div>
  )
}


// export const EditTopicForm = () => {
//   return (
//     <div>EditTopicForm</div>
//   )
// }


// import React from 'react'

// export default function EditTopicForm() {
//   //   const [title, setTitle] = useState("");
//   //   const [content, setContent] = useState("");

//   //  async function handleCreateTodo(){
    
//   //      const res = await fetch("https://v1.appbackend.io/v1/rows/Bu2ayk8udtHu", {
//   //       method: "POST",
//   //       headers: {
//   //         'Content-Type': 'application/json'
//   //       },
//   //       body: JSON.stringify([{title, content}])
//   //      });
//   //      const data = await res.json()
//   //      console.log(data);
//   //   }


//   // return (
//   //   <div className="flex flex-col rounded-lg gap-4">
//   //   <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Title' 
//   //     onChange={(e) => setTitle(e.target.value)}
//   //   />
//   //   <input className="border-slate-500 px-8 py-2" type="text" placeholder='Topic Description'
//   //     onChange={(e) => setContent(e.target.value)}
//   //   />
//   //   <button className=" bg-green-400 rounded-md text-white py-3 font-thin px-6 w-fit"
//   //     onClick={handleCreateTodo}
//   //   >
//   //    Update Topic
//   //   </button>
//   //  </div>
//   // )
// }
