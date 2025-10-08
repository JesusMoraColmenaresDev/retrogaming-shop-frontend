import { z } from 'zod';

export const ManufacturerSchema = z.object({
  id: z.number(),
  name: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Manufacturer = z.infer<typeof ManufacturerSchema>;
