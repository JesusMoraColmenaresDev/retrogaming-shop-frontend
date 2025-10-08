import { Filter } from '@/types';
import api from '../app/lib/api';
import { ConsolesPaginatedResponseSchema, ConsolesPaginatedResponse, ConsoleSchema } from '../types/consoles';

export async function getAllConsoles(page: number = 1, filters: Filter[] = []): Promise<ConsolesPaginatedResponse> {
  const params = new URLSearchParams();
  params.set('page', String(page));
  filters.forEach(({ filter, value }) => {
    params.set(filter, value);
  });

  const response = await api.get(`/consoles/?${params.toString()}`);
  console.log(params.toString());
  return ConsolesPaginatedResponseSchema.parse(response.data);
}

export async function getConsoleById(id: number) {
  const response = await api.get(`/consoles/${id}`);
  return ConsoleSchema.parse(response.data);
}
