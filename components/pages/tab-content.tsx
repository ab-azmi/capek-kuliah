"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PreProposal from "./pre-proposal";
import PreSidang from "./pre-sidang";
import PreWisuda from "./pre-wisuda";

export default function TabContent() {
    return (
        <div>
            <div className="flex flex-col gap-y-5">
                <div>
                    <h1 className="text-xl lg:text-2xl font-bold">Tahap Pembuatan Skripsi</h1>
                    <p className="text-sm lg:text-lg text-slate-400">
                        Baca dari atas-kiri ke bawah-kanan. Langkah utama, di sebelah kiri
                    </p>
                </div>
                <Tabs defaultValue="pre-proposal" className="w-full">
                    <TabsList>
                        <TabsTrigger value="pre-proposal" className="text-xs md:text-base">Pre-Proposal</TabsTrigger>
                        <TabsTrigger value="pre-sidang" className="text-xs md:text-base">Pre-Sidang</TabsTrigger>
                        <TabsTrigger value="pre-wisuda" className="text-xs md:text-base">Pre-Wisuda</TabsTrigger>
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