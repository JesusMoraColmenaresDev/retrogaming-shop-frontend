"use client";
import DynamicElementDetails from '@/app/components/dynamic/DynamicElementDetails';
import DynamicSpecItem from '@/app/components/dynamic/DynamicSpecItem';
import React from 'react'

export default function ConsoleDetailPage() {
    return (
        <DynamicElementDetails
            title="Nombre de la consola"
            images={[
                '/retro-gaming-setup-stockcake.jpg',
                '/retro-gaming-setup-stockcake.jpg',
                '/retro-gaming-setup-stockcake.jpg',
            ]}
            description="Esta es una breve descripción de la consola. Sumérgete en la experiencia retro con este clásico. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic eaque harum, qui quam, repellendus magni expedita molestias molestiae dolorem id doloremque aliquid nesciunt ratione reiciendis libero totam quas voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad assumenda impedit delectus consequuntur repellendus, eaque, placeat dolore, obcaecati aperiam quod tempora illo doloremque saepe ipsum! Dignissimos laborum autem perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptate laborum perferendis, quae et aliquid fugiat possimus unde error temporibus debitis sed aspernatur iure natus nihil laboriosam odit dolores animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ea quasi voluptatibus velit est quis iusto exercitationem enim perferendis magni, expedita eos quibusdam dolorum tempora, minus omnis deleniti iure labore!"
            specs={
                <>
                    <DynamicSpecItem label="Fecha" value="1980" />
                    <DynamicSpecItem label="Fabricante" value="Nintendo" />
                    <DynamicSpecItem label="Existencias" value="1" />
                </>}
            price={999}
        />
    );
}
