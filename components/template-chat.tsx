import { useForm } from "@/components/form-context";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Copy, User } from "lucide-react";

export default function TemplateChat({ title, text }: { title: string; text: string }) {
    const { toast } = useToast()
    const { replaceTemplate } = useForm()

    const processedText = replaceTemplate(text)

    const copyChat = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                toast({
                    title: "Template berhasil disalin",
                    description: "Template sudah siap untuk dikirim",
                })
            })
            .catch((err) => {
                console.error("Failed to copy text: ", err)
            })
    }

    return (
        <div className="mt-3 border rounded-lg p-4 bg-muted/30">
            <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium text-sm">{title}</h4>
                <Button size="sm" variant="outline" onClick={() => copyChat(processedText)} className="h-8 px-2">
                    <Copy className="h-3 w-3 mr-1" />
                    Copy
                </Button>
            </div>
            <div className="text-sm text-muted-foreground bg-background rounded p-3 border">
                <pre className="whitespace-pre-wrap font-sans">{processedText}</pre>
            </div>
            {processedText.includes("{") && (
                <p className="text-xs text-amber-600 mt-2 flex items-center gap-1">
                    <User className="h-3 w-3" />
                    {'Masih ada data yang perlu diisi di form "Informasi Pribadi"'}
                </p>
            )}
        </div>
    )
}