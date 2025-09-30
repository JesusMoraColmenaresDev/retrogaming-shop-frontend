"use client"
import React from 'react'
import DynamicButton from '../components/dynamic/DynamicButton'
import { useRouter } from 'next/navigation';
import GameItemCard from '../components/games/GameItemCard';
import DynamicItemCard from '../components/dynamic/DynamicItemCard';

export default function page() {
    const router = useRouter();
    return (
        <main>
            <section
                className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
                style={{ backgroundImage: "url('/retro-gaming-setup-stockcake.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70 z-0"></div>
                {/* Contenido */}
                <div className="relative z-10 w-full text-center px-4 flex flex-col gap-6 items-center justify-center">
                    <h1 className="text-white text-7xl font-bold whitespace-nowrap">
                        Bienvenido a <span className="text-[#7F13EC]">Retrogaming</span> shop
                    </h1>
                    <h2 className='text-gray-100 text-2xl'>Tu destino para juegos y consolas retro
                        Revive la diversión de antaño</h2>
                    <DynamicButton text='Explorar Juegos' type='button' onClick={() => router.push('/games')} className='max-w-fit px-16' ></DynamicButton>
                </div>
            </section>

            <section className='my-20 flex flex-col gap-8 items-center justify-center'>
                <h2 className="text-white text-3xl font-bold">Explora nuestra colección de juegos</h2>
                <div className='flex gap-8 w-full justify-center'>
                    <DynamicItemCard
                        imageUrl="/retro-gaming-setup-stockcake.jpg"
                        title="Game Title"
                        subtitle="Game Description"
                        button={<DynamicButton text='Ver juego' type='button' onClick={() => router.push('/consoles')} className='px-8' ></DynamicButton>}
                    />
                    <DynamicItemCard
                        imageUrl="/retro-gaming-setup-stockcake.jpg"
                        title="Game Title"
                        subtitle="Game Description"
                        button={<DynamicButton text='Ver juego' type='button' onClick={() => router.push('/consoles')} className='px-8' ></DynamicButton>}

                    />
                    <DynamicItemCard
                        imageUrl="/retro-gaming-setup-stockcake.jpg"
                        title="Game Title"
                        subtitle="Game Description"
                        button={<DynamicButton text='Ver juego' type='button' onClick={() => router.push('/consoles')} className='px-8' ></DynamicButton>}

                    />
                </div>
            </section>

            <section className='w-full py-20 flex flex-col gap-8 items-center justify-center bg-[#7F13EC10]'>
                <h2 className="text-white text-3xl font-bold">Explora nuestra colección de consolas</h2>
                <div className='flex gap-8 w-full justify-center'>
                    <DynamicItemCard
                        imageUrl="/retro-gaming-setup-stockcake.jpg"
                        title="Console name"
                        subtitle="Console Description"
                        button={<DynamicButton text='Ver Consola' type='button' onClick={() => router.push('/consoles')} className='px-8' ></DynamicButton>}
                    />
                    <DynamicItemCard
                        imageUrl="/retro-gaming-setup-stockcake.jpg"
                        title="Console name"
                        subtitle="Console Description"
                        button={<DynamicButton text='Ver Consola' type='button' onClick={() => router.push('/consoles')} className='px-8' ></DynamicButton>}

                    />
                    <DynamicItemCard
                        imageUrl="/retro-gaming-setup-stockcake.jpg"
                        title="Console name"
                        subtitle="Console Description"
                        button={<DynamicButton text='Ver Consola' type='button' onClick={() => router.push('/consoles')} className='px-8' ></DynamicButton>}

                    />
                </div>

            </section>
        </main>
    )
}
