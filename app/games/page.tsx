"use client";
import React, { useEffect, useState } from 'react'

import { useRouter } from 'next/navigation';
import DynamicItemCard from '../components/dynamic/DynamicItemCard';
import DynamicButton from '../components/dynamic/DynamicButton';
import DynamicSelect from '../components/dynamic/DynamicSelect';
import DynamicPagination from '../components/dynamic/DynamicPagination';
import { getAllGames } from '@/api/gamesApi';
import { Game, GamesPaginatedResponse } from '@/types/games';

export default function GamesPage() {
  const router = useRouter();
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAllGames = async () => {
      const response: GamesPaginatedResponse = await getAllGames(page);
      setGames(response.games);
      setTotalPages(response.totalPages);
    };

    fetchAllGames();
  }, [page]);

  return (
    <main>
      <section className="my-20 flex flex-col gap-8 items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Catalogo de juegos</h2>
        <h3 className="text-gray-400 text-xl">Explora nuestra amplia selección de juegos retro</h3>
        <div className='flex gap-4'>
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Plataforma" onChange={(value) => console.log(value)} name="gameSelect" />
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Genero" onChange={(value) => console.log(value)} name="gameSelect" />
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Año" onChange={(value) => console.log(value)} name="gameSelect" />
        </div>
        <div className="flex gap-8 w-full justify-center">
          {games.map((game) => (
            <DynamicItemCard
              key={game.id}
              imageUrl="/retro-gaming-setup-stockcake.jpg"
              title={game.name}
              subtitle2={game.description}
              button={<DynamicButton text="Ver más" type="button" onClick={() => router.push(`/games/${game.id}`)} className="px-8" />}
            />
          ))}
        </div>
      </section>

      <section className='my-20 flex items-center justify-center w-full'>
        <DynamicPagination page={page} pagesTotal={totalPages} onChangePage={setPage} />
      </section>

   
    </main>
  )
}
