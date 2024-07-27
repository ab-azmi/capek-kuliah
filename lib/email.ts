import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendRequestEmail = async (message: string, sender: string, name: string) => {

  const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: 'azmi.kiva@gmail.com',
      subject: `Capek Kuliah - Masukan & Saran - ${name}-${sender}` ,
      text: message,
    });
    
    if (error) {
      return {error: error};
    }
  
    return {success: data};
}