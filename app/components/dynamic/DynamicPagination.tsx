import { Pagination } from "@mui/material"
import { ChangeEvent, useState } from "react";

export default function DynamicPagination({ pagesTotal }: { pagesTotal: number }) {
    const [page, setPage] = useState<number>(1);

    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }
    return (
        <Pagination
            count={10}
            page={page}
            onChange={handleChange}
            sx={{
                '& .MuiPaginationItem-root': {
                    color: '#7F13EC', // color de los números
                    fontWeight: 'bold',
                    fontSize: '16px',
                },
                '.MuiPaginationItem-root:hover': {
                    backgroundColor: '#7F13EC', // color de fondo al hacer hover
                    color: '#fff', // color de los números al hacer hover
                },
                '& .Mui-selected': {
                    backgroundColor: '#7F13EC', // fondo de la página activa
                    color: '#fff', // color del número activo
                },
                '& .MuiPaginationItem-icon': {
                    color: '#7F13EC', // color de los íconos (flechas)
                },
            }}
        />
    )
}
