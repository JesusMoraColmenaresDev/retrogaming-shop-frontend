import { useState } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import DynamicButton from '@/app/components/dynamic/DynamicButton';
import DynamicSpecItem from '@/app/components/dynamic/DynamicSpecItem';


import { ReactNode } from 'react';

interface DynamicElementDetailsProps {
    title: string;
    images: string[]; // 3 urls
    description: string;
    specs: ReactNode; // ahora acepta los componentes directamente
    price: string;
}

export default function DynamicElementDetails({
    title,
    images,
    description,
    specs,
    price,
}: DynamicElementDetailsProps) {
    const [open, setOpen] = useState(false);
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const handleOpen = (img: string) => {
        setSelectedImg(img);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setSelectedImg(null);
    };

    // Preparar datos para ImageList (primera imagen grande, dos pequeñas)
    const itemData = [
        { img: images[0], title: 'Grande', rows: 2, cols: 2 },
        { img: images[1], title: 'Pequeña 1', rows: 1, cols: 1 },
        { img: images[2], title: 'Pequeña 2', rows: 1, cols: 1 },
    ];

    return (
        <div className='w-full flex items-center justify-center'>
            <div className='max-w-[60vw] mt-20'>
                <h2 className="text-4xl text-gray-100 font-bold mb-8">{title}</h2>
                <div className='flex flex-col gap-2'>
                    <div className='flex w-full'>
                        <ImageList
                            sx={{ width: 500, height: 450 }}
                            variant="quilted"
                            cols={2}
                            rowHeight={140}
                        >
                            {itemData.map((item, idx) => (
                                <ImageListItem key={idx} cols={item.cols || 1} rows={item.rows || 1}>
                                    <button
                                        style={{ width: '100%', height: '100%', padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
                                        onClick={() => handleOpen(item.img)}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            loading="lazy"
                                            style={{ objectFit: 'cover', width: '100%', height: '100%', maxHeight: "280px" }}
                                        />
                                    </button>
                                </ImageListItem>
                            ))}
                        </ImageList>

                        <div className='w-full max-h-[450px]'>
                            <div className='h-[280px] overflow-y-auto px-4'>
                                <p className='text-2xl text-gray-100 border-b-1 border-[#7F13EC80] font-bold pb-2 mb-6'>Descripción</p>
                                <p className="text-gray-400">{description}</p>
                            </div>

                            <div className='flex flex-col gap-4 pt-5'>
                                <div className="px-4">
                                    <p className="text-2xl text-gray-100 border-b-1 border-[#7F13EC80] font-bold pb-2 mb-6">Especificaciones</p>
                                    <div className="flex justify-between">
                                        {specs}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center justify-end gap-6 px-4'>
                        <div>
                            <span className='font-bold text-gray-600 text-sm'>Precio</span>
                            <p className='font-bold text-gray-100 text-2xl'>{price}</p>
                        </div>
                        <DynamicButton text='Agregar al carrito' type='button' className='max-w-fit px-4' />
                    </div>
                </div>
            </div>

            <Dialog open={open} onClose={handleClose} maxWidth="xl">
                {selectedImg && (
                    <img src={selectedImg} alt="Vista ampliada" style={{ maxWidth: '90vw', maxHeight: '90vh', objectFit: 'contain' }} />
                )}
            </Dialog>
        </div>
    );
}
