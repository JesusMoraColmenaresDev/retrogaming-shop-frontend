import api from '../app/lib/api';
import { GamesArraySchema, Game, GamesPaginatedResponseSchema, GamesPaginatedResponse, GameSchema } from '../types/games';

export async function getAllGames(page: number): Promise<GamesPaginatedResponse> {
	const response = await api.get(`/games/?page=${page}`);
	// Validar y parsear la respuesta con Zod
	return GamesPaginatedResponseSchema.parse(response.data);;
}

export async function getGameById(id: number): Promise<Game> {
	const response = await api.get(`/games/${id}`);
	// Validar y parsear la respuesta con Zod
	return GameSchema.parse(response.data);
}
