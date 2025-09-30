'use client'
import Link from 'next/link'
import React, { use } from 'react'
import DynamicInput from './components/dynamic/DynamicInput'
import { useForm } from 'react-hook-form'
import { Search, User } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DynamicButton from './components/dynamic/DynamicButton';
import DynamicLink from './components/dynamic/DynamicLink'

export default function Navbar() {
    const { register } = useForm();
    const router = useRouter();
    return (
        <nav className='w-full py-4 px-8 flex justify-between items-center border-b-3 border-[#7F13EC80] text-white'>
            <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-14'>
                <p>Retrogaming shop</p>
                <div className='flex gap-16'>
                    <DynamicLink href="/home" text="Inicio" />
                    <DynamicLink href="/games" text="Juegos" />
                    <DynamicLink href="/consoles" text="Consolas" />
                </div>
            </div>

            <div className='flex gap-4 items-center justify-center'>
                <form >
                    <DynamicInput icon={<Search />} name='search' placeholder='Buscar...' register={register} ></DynamicInput>
                </form>
                {localStorage.getItem('token') ? <Link className='hover:text-[#7F13EC]' href={"/profile"}>{<User />}</Link> : <DynamicButton text='Login' onClick={() => router.push('/login')} type='button'></DynamicButton>}
            </div>



        </nav >
    )
}
