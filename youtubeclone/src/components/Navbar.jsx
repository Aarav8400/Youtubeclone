import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SiYoutube } from 'react-icons/si'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillMicFill } from 'react-icons/bs'
import { RiVideoAddLine } from 'react-icons/ri'
import { BsBell } from 'react-icons/bs'
import { HiUserCircle } from 'react-icons/hi'


export default function Navbar() {
    return (
        <div className='flex justify-between px-14 h-14 items-center bg-[#212121] opacity-95 sticky '>

            <div className='flex gap-8 items-center text-2xl  '>
                <div>
                    <GiHamburgerMenu />

                </div>
                <div className='flex gap-2 items-center justify-center'>
                    <SiYoutube className='text-3xl text-red-500' />
                    <span className='text-2xl '>Youtube</span>
                </div>
            </div>
            <div className='flex items-center justify-center gap-5'>
                <form>
                    <div className='flex bg-zinc-900 items-center h-10 px-4 pr-0 rounded-3xl'>
                        <div className='flex gap-5 items-center pr-5'>
                            <input
                                type="text"
                                placeholder='search'
                                className='w-96 bg-zinc-900 focus:outline-none' />
                            <button className='flex items-center justify-center bg-zinc-900 rounded-r-3xl'>
                                <AiOutlineSearch className='text-xl' />
                            </button>

                        </div>
                    </div>
                </form>
                <div className='text-xl p-3 bg-zinc-900 rounded-full'>
                    <BsFillMicFill />
                </div>
            </div>
            <div className='flex gap-5 items-center text-xl'>
                <RiVideoAddLine />
                <div className='relative'>
                    <BsBell />
                    <span className='absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1'>10</span>
                </div>
                <HiUserCircle />


            </div>
        </div>
    )
}
