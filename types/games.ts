
import { z } from 'zod';
import { PlatformSchema } from './platform';
import { GenreSchema } from './genre';

export const GameSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	releaseDate: z.string(),
	stock: z.number(),
	price: z.number(),
	imageUrl1: z.string().nullable(),
	imageUrl2: z.string().nullable(),
	imageUrl3: z.string().nullable(),
	platform: PlatformSchema,
	genre: GenreSchema,
});

export const GamesArraySchema = z.array(GameSchema);

export const GamesPaginatedResponseSchema = z.object({
	games: GamesArraySchema,
	total: z.number(),
	totalPages: z.number(),
	page: z.number(),
});

export type Game = z.infer<typeof GameSchema>;
export type GamesPaginatedResponse = z.infer<typeof GamesPaginatedResponseSchema>;
