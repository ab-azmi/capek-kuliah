import { z } from "zod";

export const formSchema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
})