"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import DynamicItemCard from '../components/dynamic/DynamicItemCard';
import DynamicButton from '../components/dynamic/DynamicButton';
import DynamicSelect from '../components/dynamic/DynamicSelect';
import DynamicPagination from '../components/dynamic/DynamicPagination';
import { getAllConsoles } from '@/api/consolesApi';
import { Console, ConsolesPaginatedResponse } from '@/types/consoles';

export default function ConsolesPage() {
  const router = useRouter();
  const [consoles, setConsoles] = useState<Console[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchAllConsoles = async () => {
      const response = await getAllConsoles(page);
      setConsoles(response.consoles);
      setTotalPages(response.totalPages);
    };
    fetchAllConsoles();
  }, [page]);

  return (
    <main>
      <section className="my-20 flex flex-col gap-8 items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Catálogo de consolas</h2>
        <h3 className="text-gray-400 text-xl">Explora nuestra amplia selección de consolas retro</h3>
        <div className='flex gap-4'>
          {/**<DynamicSelect resource='' defaultOption="Marca" onChange={(value) => console.log(value)} name="consoleBrand" />
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Tipo" onChange={(value) => console.log(value)} name="consoleType" />
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Año" onChange={(value) => console.log(value)} name="consoleYear" />*/}
        </div>
        <div className="flex gap-8 w-full justify-center">
          {consoles.map((console) => (
            <DynamicItemCard
              key={console.id}
              imageUrl="/retro-gaming-setup-stockcake.jpg"
              title={console.name}
              subtitle2={console.description}
              button={<DynamicButton text="Ver más" type="button" onClick={() => router.push(`/consoles/${console.id}`)} className="px-8" />}
            />
          ))}
        </div>
      </section>
      <section className='my-20 flex items-center justify-center w-full'>
        <DynamicPagination page={page} pagesTotal={totalPages} onChangePage={setPage} />
      </section>
    </main>
  );
}
