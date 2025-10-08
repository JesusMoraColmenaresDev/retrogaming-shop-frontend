"use client";
import { getConsoleById } from '@/api/consolesApi';
import DynamicElementDetails from '@/app/components/dynamic/DynamicElementDetails';
import DynamicSpecItem from '@/app/components/dynamic/DynamicSpecItem';
import { formatDate } from '@/app/helpers/dateHelper';
import { Console } from '@/types/consoles';
import { get } from 'http';
import { useParams } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'

export default function ConsoleDetailPage() {

    const [console, setConsole] = useState<Console | null>(null);
    const { id } = useParams();

    useEffect(() => {
        const fetchConsole = async () => {
            const consoleData = await getConsoleById(Number(id));
            setConsole(consoleData);
        };
        fetchConsole();
    }, []);

    return (
        <DynamicElementDetails
            title={console?.name || "Título de la Consola"}
            images={[
                '/retro-gaming-setup-stockcake.jpg',
                '/retro-gaming-setup-stockcake.jpg',
                '/retro-gaming-setup-stockcake.jpg',
            ]}
            description={console?.description || "Esta es una breve descripción de la consola. Sumérgete en la experiencia retro con este clásico. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic eaque harum, qui quam, repellendus magni expedita molestias molestiae dolorem id doloremque aliquid nesciunt ratione reiciendis libero totam quas voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad assumenda impedit delectus consequuntur repellendus, eaque, placeat dolore, obcaecati aperiam quod tempora illo doloremque saepe ipsum! Dignissimos laborum autem perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptate laborum perferendis, quae et aliquid fugiat possimus unde error temporibus debitis sed aspernatur iure natus nihil laboriosam odit dolores animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ea quasi voluptatibus velit est quis iusto exercitationem enim perferendis magni, expedita eos quibusdam dolorum tempora, minus omnis deleniti iure labore!"}
            specs={
                <>
                    <DynamicSpecItem label="Fecha" value={formatDate(console?.releaseDate)} />
                    <DynamicSpecItem label="Fabricante" value={console?.manufacturer.name || "Fabricante desconocido"} />
                    <DynamicSpecItem label="Existencias" value={console?.stock || "Numero de existencias desconocido"} />
                </>
            }
            price={console?.price || 0}
        />
    );
}
