import { z } from "zod";

export const formSchema = z.object({
    name: z.string().max(100).regex(/^[a-zA-Z\s]*$/, {
        message: 'Lawak kali namamu ada angkanya',
    }),
    email: z.string().email({message: 'Emailnya mana?'}).max(100),
    message: z.string().min(2, {
        message: 'Pesannya mana?',
    }).max(1000),
});