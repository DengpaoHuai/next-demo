import { z } from "zod";

const foodSchema = z.object({
  name: z.string().min(3).max(255),
  calories: z.coerce.number().int().positive(),
  description: z.string().min(3).max(255),
});

export default foodSchema;
