"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PreProposal from "./pre-proposal";
import PreSidang from "./pre-sidang";
import PreWisuda from "./pre-wisuda";
import { useState, useEffect } from "react";
import { FormProvider } from "@/components/form-context";
import { FormFields } from "@/components/form-fields";

export default function TabContent() {
    const [tab, setTab] = useState<string>("pre-proposal");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
        const savedTab = localStorage.getItem("skripsi-tab");
        if (savedTab) {
            setTab(savedTab);
        }
    }, []);

    useEffect(() => {
        if (isClient) {
            localStorage.setItem("skripsi-tab", tab);
        }
    }, [tab, isClient]);

    return (
        <div className="flex flex-col gap-y-5">
            <div>
                <h1 className="text-xl font-bold lg:text-2xl">Tahap Pembuatan Skripsi</h1>
                <p className="text-sm lg:text-lg text-slate-400">
                    Baca dari atas-kiri ke bawah-kanan. Langkah utama, di sebelah kiri
                </p>
            </div>

            {isClient ? (
                // Check if client is ready to prevent hydration error
                <FormProvider>
                    <FormFields />

                    <Tabs value={tab} onValueChange={setTab} className="w-full">
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
                </FormProvider>
            ) : (
                <TabContentSkeleton />
            )}
        </div>
    )
}

function TabContentSkeleton() {
    return (
        <div className="w-full space-y-4">
            <div className="w-5/6 h-12 rounded bg-slate-800 animate-pulse sm:w-2/5"></div>
            <div className="flex flex-col w-full gap-4 sm:flex-row">
                <div className="flex-1 p-4 space-y-3 rounded-lg bg-slate-800 animate-pulse">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-slate-700" />
                        <div className="w-full space-y-2">
                            <div className="w-1/2 h-5 rounded bg-slate-700" />
                            <div className="w-3/4 h-4 rounded bg-slate-600" />
                            <div className="w-2/3 h-4 rounded bg-slate-600" />
                        </div>
                    </div>
                </div>

                <div className="flex-[2] bg-slate-800 rounded-lg p-4 space-y-3 animate-pulse">
                    <div className="w-1/3 h-5 rounded bg-slate-700" />
                    <div className="w-2/3 h-4 rounded bg-slate-600" />
                    <div className="w-1/2 h-4 rounded bg-slate-600" />
                    <div className="w-40 h-10 mt-2 rounded bg-slate-700" />
                </div>
            </div>
        </div>
    )
}
