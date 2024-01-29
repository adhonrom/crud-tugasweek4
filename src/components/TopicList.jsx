import React from 'react';
import  RemoveBtn from './RemoveBtn';
import Link from 'next/link';
import { HiPencilAlt } from "react-icons/hi";
import { EditTopic } from './EditTopicForm';




export default function TopicList({data}) {
   
    return (
        <div>

        {data.map((item) => {
        
        return <EditTopic key={item._id} item={item}/>

            // <div key={item._id} className="p-4 border rounded-lg my-3 flex justify-between gap-5 items-start">
            
            // <div className="font-bold gap tex-xl" >
            //     {item.title}
            //     <h5 className="font-thin" >{item.content}</h5>                                 

            // </div>
            
            // <div className="flex gap-4">
            //     <Link href={'editTopic/123'}>
            //         <HiPencilAlt size={24} />
            //     </Link>
            
            // <RemoveBtn />
            // </div>
               

            // </div>
})}

        </div>
    )

//   return ( 
    
    

//     <div className="p-4 border rounded-lg my-3 flex justify-between gap-5 items-start">
//         <div>
//             {data.map((item) => {
//                 return (

                        // INI KENAPA RETURN DALAM FUNCTION JUGA BISA JALAAAN WOOYY!!!!

//                     <div className="font-bold gap text-2xl"> 
//                         <div key={item._id}>
//                             {item.title}
//                         </div>
                        
//                         <h4 className="font-light" >{item.content}</h4>
//                     </div>
                    
//                 )
//             } )}
//         </div>
//         <div className="flex gap-4">
//             <Link href={'editTopic/123'}>
//                 <HiPencilAlt size={24} />
//             </Link>
//             <RemoveBtn />
//         </div>
        
//     </div>
    
//   )
}
