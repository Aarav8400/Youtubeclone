import React from 'react'
import {
   
    MdSlowMotionVideo,
    MdSubscriptions,
    MdOutlineVideoLibrary,
    MdOutlineWatchLater,
    
} from 'react-icons/md'
import {
    BiHistory,
    BiLike
}
from 'react-icons/bi'

import { AiOutlineHome} from 'react-icons/ai'

export default function Sidebar() {
    const mainLinks=[
        {
            icon:<AiOutlineHome className='text-xl'/>,
            name:'Home'
        },
        {
            icon:<MdSlowMotionVideo className='text-xl'/>,
            name:'Shorts'
        },
        {
            icon:<MdSubscriptions className='text-xl'/>,
            name:'Subscriptions'
        }
        
    ]

    const otherLinks=[
        {
            icon:<MdOutlineVideoLibrary className='text-xl'/>,
            name:'Library'
        },
        {
            icon:<BiHistory className='text-xl'/>,
            name:'History'
        },
        {
            icon:<MdOutlineWatchLater className='text-xl'/>,
            name:'Watch Later'
        },
        {
            icon:<BiLike/>,
            name:'Liked Video'
        }
    ]
  return (
    <div className='w-2/12 bg-[#212121] pr-5 p-2 overflow-auto pb-8 h-screen'>
        <ul className='flex flex-col border-b-2 border-gray-700'>
            {mainLinks.map(({icon,name})=>{
                return (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name==='Home'?'bg-zinc-700':" "} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        
                        </a>
                        
                    </li>
                )
            })}
        </ul>

        <ul className='flex flex-col border-b-1'>
            {otherLinks.map(({icon,name})=>{
                return (
                    <li key={name} className={`pl-6 py-3 hover:bg-zinc-600 ${name==='Home'?'bg-zinc-700':" "} rounded-xl`}>
                        <a href='#' className='flex items-center gap-5'>
                            {icon}
                            <span className='text-sm tracking-wider'>{name}</span>
                        
                        </a>
                        
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
