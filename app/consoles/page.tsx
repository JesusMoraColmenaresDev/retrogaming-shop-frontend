"use client";
import { useRouter } from 'next/navigation';
import DynamicItemCard from '../components/dynamic/DynamicItemCard';
import DynamicButton from '../components/dynamic/DynamicButton';
import DynamicSelect from '../components/dynamic/DynamicSelect';
import DynamicPagination from '../components/dynamic/DynamicPagination';

export default function ConsolesPage() {
  const router = useRouter();
  return (
    <main>
      <section className="my-20 flex flex-col gap-8 items-center justify-center">
        <h2 className="text-white text-3xl font-bold">Catálogo de consolas</h2>
        <h3 className="text-gray-400 text-xl">Explora nuestra amplia selección de consolas retro</h3>
        <div className='flex gap-4'>
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Fabricante" onChange={(value) => console.log(value)} name="consoleBrand" />
          <DynamicSelect options={['Opción 1', 'Opción 2']} defaultOption="Año" onChange={(value) => console.log(value)} name="consoleYear" />
        </div>
        <div className="flex gap-8 w-full justify-center">
          <DynamicItemCard
            imageUrl="/retro-gaming-setup-stockcake.jpg"
            title="Console Name"
            subtitle="Console Description"
            button={<DynamicButton text="Ver más" type="button" onClick={() => router.push('/consoles')} className="px-8" />}
          />
          <DynamicItemCard
            imageUrl="/retro-gaming-setup-stockcake.jpg"
            title="Console Name"
            subtitle="Console Description"
            button={<DynamicButton text="Ver más" type="button" onClick={() => router.push('/consoles')} className="px-8" />}
          />
          <DynamicItemCard
            imageUrl="/retro-gaming-setup-stockcake.jpg"
            title="Console Name"
            subtitle="Console Description"
            button={<DynamicButton text="Ver más" type="button" onClick={() => router.push('/consoles')} className="px-8" />}
          />
          <DynamicItemCard
            imageUrl="/retro-gaming-setup-stockcake.jpg"
            title="Console Name"
            subtitle="Console Description"
            button={<DynamicButton text="Ver mas" type="button" onClick={() => router.push('/consoles')} className="px-8" />}
          />
        </div>
      </section>

      <section className='my-20 flex items-center justify-center w-full'>
        <DynamicPagination pagesTotal={10} />
      </section>
    </main>
  );
}
