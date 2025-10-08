"use client";
import React, { useEffect, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation';
import DynamicItemCard from '../components/dynamic/DynamicItemCard';
import DynamicButton from '../components/dynamic/DynamicButton';
import DynamicSelect from '../components/dynamic/DynamicSelect';
import DynamicPagination from '../components/dynamic/DynamicPagination';
import { getAllGames } from '@/api/gamesApi';
import { Game, GamesPaginatedResponse } from '@/types/games';

export default function GamesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Convierte los query params en un arreglo de objetos { filter, value }
  const filters = Array.from(searchParams.entries()).map(([filter, value]) => ({ filter, value }));

  useEffect(() => {
    const fetchAllGames = async () => {
      const response = await getAllGames(page, filters);
      setGames(response.games);
      setTotalPages(response.totalPages);
    };

    fetchAllGames();
  }, [page, searchParams.toString()]); // Se actualiza cuando cambian los filtros o la página



  return (
    <main>
      <section className="my-20 flex flex-col gap-8 items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Catalogo de juegos</h2>
        <h3 className="text-gray-400 text-xl">Explora nuestra amplia selección de juegos retro</h3>
        <div className='flex gap-4'>
          <DynamicSelect endpoint='platforms' defaultOption="Plataforma" onChange={(value) => console.log(value)} name="platform" />
          <DynamicSelect endpoint='genres' defaultOption="Genero" onChange={(value) => console.log(value)} name="genre" />
        </div>
        <div className="flex gap-8 w-full justify-center">
          {games.length === 0 ? (
            <p className="text-white text-center mt-20">No hay juegos por mostrar</p>
          ) : (
            games.map((game) => (
              <DynamicItemCard
                key={game.id}
                imageUrl="/retro-gaming-setup-stockcake.jpg"
              title={game.name}
              subtitle2={game.description}
              button={<DynamicButton text="Ver más" type="button" onClick={() => router.push(`/games/${game.id}`)} className="px-8" />}
            />
          )))}
        </div>
      </section>

      <section className='my-20 flex items-center justify-center w-full'>
        {games.length > 0 && <DynamicPagination page={page} pagesTotal={totalPages} onChangePage={setPage} />}
      </section>


    </main>
  )
}
