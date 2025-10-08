import { Filter } from '@/types';
import api from '../app/lib/api';
import { GamesArraySchema, Game, GamesPaginatedResponseSchema, GamesPaginatedResponse, GameSchema } from '../types/games';



export async function getAllGames(page: number, filters: Filter[] = []): Promise<GamesPaginatedResponse> {
  const params = new URLSearchParams();
  params.set('page', String(page));
  filters.forEach(({ filter, value }) => {
    params.set(filter, value);
  });

  const response = await api.get(`/games/?${params.toString()}`);
  console.log(params.toString());
  return GamesPaginatedResponseSchema.parse(response.data);
}

export async function getGameById(id: number): Promise<Game> {
	const response = await api.get(`/games/${id}`);
	// Validar y parsear la respuesta con Zod
	return GameSchema.parse(response.data);
}
