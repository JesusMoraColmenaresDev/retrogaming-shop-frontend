import api from '../app/lib/api';
import { GamesArraySchema, Game, GamesPaginatedResponseSchema, GamesPaginatedResponse } from '../types/games';

export async function getAllGames(page: number): Promise<GamesPaginatedResponse> {
	const response = await api.get(`/games/?page=${page}`);
	// Validar y parsear la respuesta con Zod
	const games = GamesPaginatedResponseSchema.parse(response.data);
	return games;
}
