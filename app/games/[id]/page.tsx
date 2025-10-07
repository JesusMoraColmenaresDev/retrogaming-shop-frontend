"use client";
import { getGameById } from '@/api/gamesApi';
import DynamicElementDetails from '@/app/components/dynamic/DynamicElementDetails';
import DynamicSpecItem from '@/app/components/dynamic/DynamicSpecItem';
import { formatDate } from '@/app/helpers/dateHelper';
import { Game } from '@/types/games';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function GameDetailPage() {
  const [game, setGame] = useState<Game | null>(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchGame = async () => {
      const gameData = await getGameById(Number(id));
      setGame(gameData);
    };
    fetchGame();
  }, []);
  return (
    <DynamicElementDetails
      title={game?.name || "Título del Juego"}
      images={[
        '/retro-gaming-setup-stockcake.jpg',
        '/retro-gaming-setup-stockcake.jpg',
        '/retro-gaming-setup-stockcake.jpg',
      ]}
      description={game?.description || "Esta es una breve descripción del juego. Sumérgete en la experiencia retro con este clásico. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis hic eaque harum, qui quam, repellendus magni expedita molestias molestiae dolorem id doloremque aliquid nesciunt ratione reiciendis libero totam quas voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio ad assumenda impedit delectus consequuntur repellendus, eaque, placeat dolore, obcaecati aperiam quod tempora illo doloremque saepe ipsum! Dignissimos laborum autem perferendis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, voluptate laborum perferendis, quae et aliquid fugiat possimus unde error temporibus debitis sed aspernatur iure natus nihil laboriosam odit dolores animi. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium ea quasi voluptatibus velit est quis iusto exercitationem enim perferendis magni, expedita eos quibusdam dolorum tempora, minus omnis deleniti iure labore!"}
      specs={
        <>
          <DynamicSpecItem label="Fecha" value={formatDate(game?.releaseDate)} />
          <DynamicSpecItem label="Plataforma" value={game?.platform.name || "Plataforma desconocida"} />
          <DynamicSpecItem label="Género" value={game?.genre.name || "Género desconocido"} />
        </>
      }
      price={game?.price || 0}
    />
  );
}