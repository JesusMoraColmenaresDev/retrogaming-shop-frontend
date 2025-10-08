
import { useEffect, useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import api from '@/app/lib/api';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

interface Option {
    id: string | number;
    name: string;
}

interface DynamicSelectProps {
    endpoint?: string;  // Ej: "genres", "platforms", "manufacturers" 
    onChange: (value: string) => void;
    name: string;
    className?: string;
    defaultOption?: string;
}

export default function DynamicSelect({
    endpoint,
    onChange,
    name,
    className,
    defaultOption
}: DynamicSelectProps) {

    // El valor inicial es string vacío para mostrar el placeholder
    const [value, setValue] = useState("");
    const [dynamicOptions, setDynamicOptions] = useState<Option[]>([]);
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        if (endpoint) {
            const fetchOptions = async () => {
                const res = await api.get(`/${endpoint}`);
                setDynamicOptions(res.data);
            };
            fetchOptions();
        }
    }, [endpoint]);

    const handleChange = (event: SelectChangeEvent) => {
        const newValue = event.target.value;
        setValue(newValue);
        onChange(newValue);

        // Actualiza los query params en la URL
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, newValue);
        router.push(`?${params.toString()}`);
    };

    return (
        <Select
            name={name}
            value={value}
            onChange={handleChange}
            className={className}
            fullWidth
            displayEmpty
            variant="outlined"
            MenuProps={{
                PaperProps: {
                    sx: {
                        //haz que el menu desplegable tenga el mismo estilo que el select
                        bgcolor: "#191022",
                        color: '#d1d5db',
                        borderRadius: 2,
                        mt: 1,
                        border: '1px solid #4b5563',
                        '& .MuiMenuItem-root:hover': {
                            backgroundColor: '#7F13EC',
                            color: 'white',
                        },
                    },
                },
            }}
            sx={{
                width: 'fit-content',
                color: '#d1d5db', // gray-300 en Tailwind
                borderRadius: 2,
                bgcolor: "transparent",
                // Color del borde del select en estado normal (gray-600)
                '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#4b5563', // gray-600 en Tailwind
                },
                // Color del icono de la flecha en estado normal (gray-600)
                '& .MuiSelect-icon': {
                    color: '#4b5563',
                },
                // Color del icono de la flecha al pasar el mouse (hover) (#7F13EC)
                '&:hover .MuiSelect-icon': {
                    color: "#7F13EC",
                },
                // Color del borde al pasar el mouse (hover) (#7F13EC)
                '&:hover .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F13EC',
                },
                // Color del borde cuando el select está enfocado (#7F13EC)
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                    borderColor: '#7F13EC',
                },
                // Color del icono de la flecha cuando el select está enfocado (#7F13EC)
                '&.Mui-focused .MuiSelect-icon': {
                    color: '#7F13EC',
                },
            }}
        >
            {/* Placeholder como texto por defecto, no seleccionable */}
            <MenuItem value="" disabled hidden>
                {defaultOption || "Selecciona una opción"}
            </MenuItem>
            {dynamicOptions.map((option, idx) => (
                <MenuItem key={idx} value={option.id}>
                    {option.name}
                </MenuItem>
            ))}
        </Select>
    );
}