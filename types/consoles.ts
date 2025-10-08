
import { z } from 'zod';
import { ManufacturerSchema} from './manufacturer';

export const ConsoleSchema = z.object({
	id: z.number(),
	name: z.string(),
	description: z.string(),
	releaseDate: z.string(),
	stock: z.number(),
	price: z.number(),
	imageUrl1: z.string().nullable(),
	imageUrl2: z.string().nullable(),
	imageUrl3: z.string().nullable(),
	createdAt: z.string(),
	updatedAt: z.string(),
	manufacturer: ManufacturerSchema,
});

export const ConsolesArraySchema = z.array(ConsoleSchema);

export const ConsolesPaginatedResponseSchema = z.object({
	consoles: ConsolesArraySchema,
	total: z.number(),
	totalPages: z.number(),
	page: z.number(),
});

export type Console = z.infer<typeof ConsoleSchema>;
export type ConsolesPaginatedResponse = z.infer<typeof ConsolesPaginatedResponseSchema>;
