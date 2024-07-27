"use server"
import { formSchema } from '@/types/update-form-schema';
import { createSafeActionClient } from 'next-safe-action';
import { sendRequestEmail } from "@/lib/email"

const action = createSafeActionClient();

const sendEmailAction = action.schema(formSchema).action(async ({parsedInput: {name, email, message}}) => {
    const res =  await sendRequestEmail(message, email, name);

    if (res.error) {
        return {error: res.error};
    }

    return {success: res.success};
});

export default sendEmailAction;