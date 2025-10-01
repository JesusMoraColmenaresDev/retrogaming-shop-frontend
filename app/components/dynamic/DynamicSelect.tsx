import { useState } from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

interface DynamicSelectProps {
    options: string[];
    onChange: (value: string) => void;
    name: string;
    className?: string;
    defaultOption?: string;
}

export default function DynamicSelect({
    options,
    onChange,
    name,
    className,
    defaultOption
}: DynamicSelectProps) {

    // El valor inicial es string vacío para mostrar el placeholder
    const [value, setValue] = useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setValue(event.target.value);
        onChange(event.target.value);
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
            {options.map((option, idx) => (
                <MenuItem key={idx} value={option}>
                    {option}
                </MenuItem>
            ))}
        </Select>
    );
}