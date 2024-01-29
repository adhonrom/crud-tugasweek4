import Link from 'next/link'
import React from 'react'

export default function Navbar () {
  return (
    
    <div >
        <div className="flex justify-between items-center rounded-lg bg-black px-8 py-3">
        <img src="/icon.png" height={"30"} width={"30"} alt="logodev " href={"/"}/>
        <Link className="text-white px-2 font-thin" href={"/"}>DevScale Learning Journey.</Link>

        <Link className="bg-white p-2 justify-end font-thin rounded-md" href={"/addTopic"}>Add Topic</Link>
        </div >
        
    </div>
  )
}
