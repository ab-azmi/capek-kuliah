import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PreProposal from "./pre-proposal";
import PreSidang from "./pre-sidang";
import PreWisuda from "./pre-wisuda";

export default function TabContent() {
    return (
        <div>
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-2xl font-bold">Tahap Pembuatan Skripsi</h1>
                    <p className=" text-lg text-slate-400">
                        Baca dari atas-kiri ke bawah-kanan. Langkah utama, di sebelah kiri
                    </p>
                </div>
                <Tabs defaultValue="pre-proposal" className="w-full">
                    <TabsList>
                        <TabsTrigger value="pre-proposal">Pre-Proposal</TabsTrigger>
                        <TabsTrigger value="pre-sidang">Pre-Sidang</TabsTrigger>
                        <TabsTrigger value="pre-wisuda">Pre-Wisuda</TabsTrigger>
                    </TabsList>
                    <TabsContent value="pre-proposal">
                        <PreProposal />
                    </TabsContent>
                    <TabsContent value="pre-sidang">
                        <PreSidang />
                    </TabsContent>
                    <TabsContent value="pre-wisuda">
                        <PreWisuda />
                    </TabsContent>
                </Tabs>
            </div>


        </div>
    )
}