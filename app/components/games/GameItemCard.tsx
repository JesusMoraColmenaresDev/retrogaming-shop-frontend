import Image from 'next/image'
import React from 'react'

export default function GameItemCard() {
    return (
        <div className='w-[400px] h-[400px] bg-[#1A1A1A] rounded-2xl flex flex-col gap-4 '>
            <div className=' relative w-full h-[200px]'>
                <Image src="/retro-gaming-setup-stockcake.jpg" fill alt="Game Title" className="object-cover rounded-t-2xl" sizes="400px" />
            </div>

            <div className='px-4 flex flex-col gap-2'>
                <p className='text-white text-xl font-semibold'>Game Title</p>
                <p className='text-gray-400 text-lg'>Game Description</p>
            </div>

        </div>

    )
}
