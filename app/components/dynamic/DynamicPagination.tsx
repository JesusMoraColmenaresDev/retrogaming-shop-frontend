import { Pagination } from "@mui/material";
import { ChangeEvent } from "react";

interface DynamicPaginationProps {
    page: number;
    pagesTotal: number;
    onChangePage: (page: number) => void;
}

export default function DynamicPagination({ page, pagesTotal, onChangePage }: DynamicPaginationProps) {
    const handleChange = (event: ChangeEvent<unknown>, value: number) => {
        onChangePage(value);
    };
    return (
        <Pagination
            count={pagesTotal}
            page={page}
            onChange={handleChange}
            sx={{
                '& .MuiPaginationItem-root': {
                    color: '#7F13EC',
                    fontWeight: 'bold',
                    fontSize: '16px',
                },
                '.MuiPaginationItem-root:hover': {
                    backgroundColor: '#7F13EC',
                    color: '#fff',
                },
                '& .Mui-selected': {
                    backgroundColor: '#7F13EC',
                    color: '#fff',
                },
                '& .MuiPaginationItem-icon': {
                    color: '#7F13EC',
                },
            }}
        />
    );
}
