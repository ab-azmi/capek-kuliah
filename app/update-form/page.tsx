"use client"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SendHorizonal, Terminal } from "lucide-react"
import { formSchema } from "@/types/update-form-schema"
import sendEmailAction from "@/actions/send-email"
import { useAction } from "next-safe-action/hooks"
import { useToast } from "@/components/ui/use-toast"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"


export default function UpdateForm() {
    const { toast } = useToast();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const { execute, status } = useAction(sendEmailAction, {
        onSuccess: (res) => {
            if (res?.data?.success) {
                toast({
                    title: "Pesan berhasil di kirim",
                })
                form.reset();
            }
            if (res?.data?.error) {

            }
        }

    });

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        execute(values);
    }

    return (
        <main className="flex min-h-screen flex-col gap-8 lg:gap-14 px-4 md:px-20 lg:px-36 py-5 lg:py-20">
            <div className="flex flex-col gap-2 justify-center items-center">
            
                    <h1 className="text-xl lg:text-3xl font-bold">Terimakasih atas masukan dan sarannya</h1>
                    <p className="text-sm lg:text-lg text-slate-400">
                        Anda telah menolong sesama mahasiswa dalam menggarap skripsi mereka
                    </p>
                
            </div>

            <div className="w-full md:max-w-2xl md:w-[60%] self-center">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Nama sesuai KTP</FormLabel>
                                    <FormControl>
                                        <Input autoComplete="{false}" placeholder="Geprek S.Kom" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input autoComplete="{false}" type="email" placeholder="geprek@seblak.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                    <FormDescription>
                                        *Jika ingin bertanya, sertakan <span className="font-bold">Email asli</span> agar kami bisa menjawab
                                    </FormDescription>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Pesan</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Kasih tau kami apa yang ingin kamu sampaikan"
                                            rows={5}
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button>
                            {status === "executing" ? "Mengirim..." : "Kirim Pesan"}
                            <SendHorizonal className="w-5 h-5 ml-2" />
                        </Button>
                    </form>
                </Form>
            </div>
        </main>
    )
}