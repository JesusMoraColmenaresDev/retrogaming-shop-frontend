"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import DynamicItemCard from '../components/dynamic/DynamicItemCard';
import DynamicButton from '../components/dynamic/DynamicButton';
import DynamicSelect from '../components/dynamic/DynamicSelect';
import DynamicPagination from '../components/dynamic/DynamicPagination';
import { getAllConsoles } from '@/api/consolesApi';
import { Console, ConsolesPaginatedResponse } from '@/types/consoles';

export default function ConsolesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [consoles, setConsoles] = useState<Console[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // Convierte los query params en un arreglo de objetos { filter, value }
  const filters = Array.from(searchParams.entries()).map(([filter, value]) => ({ filter, value }));

  useEffect(() => {
    const fetchAllConsoles = async () => {
      const response = await getAllConsoles(page, filters);
      setConsoles(response.consoles);
      setTotalPages(response.totalPages);
    };
    fetchAllConsoles();
  }, [page, searchParams.toString()]); // Se actualiza cuando cambian los filtros o la página

  if (consoles.length === 0) {
    return <p className="text-white text-center mt-20">No hay consolas por mostrar</p>;
  }

  return (
    <main>
      <section className="my-20 flex flex-col gap-8 items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Catálogo de consolas</h2>
        <h3 className="text-gray-400 text-xl">Explora nuestra amplia selección de consolas retro</h3>
        <div className='flex gap-4'>
          <DynamicSelect endpoint='manufacturers' defaultOption="Fabricante" onChange={(value) => console.log(value)} name="manufacturer" />
        </div>
        <div className="flex gap-8 w-full justify-center">
          {
          consoles.length === 0 ? (
            <p className="text-white text-center mt-20">No hay consolas por mostrar</p>
          ) : (
            consoles.map((console) => (
              <DynamicItemCard
                key={console.id}
                imageUrl="/retro-gaming-setup-stockcake.jpg"
              title={console.name}
              subtitle2={console.description}
              button={<DynamicButton text="Ver más" type="button" onClick={() => router.push(`/consoles/${console.id}`)} className="px-8" />}
            />
          )))}
        </div>
      </section>
      <section className='my-20 flex items-center justify-center w-full'>
        {consoles.length > 0 && <DynamicPagination page={page} pagesTotal={totalPages} onChangePage={setPage} />}
      </section>
    </main>
  );
}
