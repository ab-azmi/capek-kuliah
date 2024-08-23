import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { dosenTI, dosenSI } from "@/data/dosen"
import DosenCard from "./dosen-card"
import Head from "next/head"

export default function ListDosen() {

    return (
        <>
            <Head>
                <title>Dosen ILKOM UNNES</title>
                <meta property="og:title" content="Dosen ILKOM UNNES" key="title" />
            </Head>
            <main className="flex min-h-screen flex-col gap-4 lg:gap-14 px-4 md:px-20 lg:px-36 py-5 lg:py-20">
                <div className="flex flex-col gap-5">
                    <div>
                        <h1 className="text-xl lg:text-3xl font-bold">List Dosen ILKOM UNNES</h1>
                        <p className="text-sm lg:text-lg text-slate-400">
                            Lengkap dengan kontak dan info lainnya
                        </p>
                    </div>
                </div>

                <Tabs defaultValue="ti" className="w-full">
                    <TabsList>
                        <TabsTrigger className="text-xs md:text-base" value="ti">Teknik Informatika</TabsTrigger>
                        <TabsTrigger className="text-xs md:text-base" value="si">Sistem Informasi</TabsTrigger>
                    </TabsList>
                    <TabsContent value="ti">
                        <div className="relative grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 lg:mt-10">
                            {dosenTI.map((dosen) => (
                                <DosenCard
                                    key={dosen.email}
                                    jabatan={dosen.jabatan}
                                    prodi={dosen.prodi}
                                    email={dosen.email}
                                    alt={dosen.alt}
                                    name={dosen.name}
                                    image={dosen.image}
                                    phone={dosen.phone}
                                    nip={dosen.nip} />
                            ))}
                        </div>
                    </TabsContent>
                    <TabsContent value="si">
                        <div className="flex flex-col lg:grid lg:grid-cols-3 gap-5 mt-10">
                            {dosenSI.map((dosen) => (
                                <DosenCard
                                    key={dosen.email}
                                    jabatan={dosen.jabatan}
                                    prodi={dosen.prodi}
                                    email={dosen.email}
                                    alt={dosen.alt}
                                    name={dosen.name}
                                    image={dosen.image}
                                    phone={dosen.phone}
                                    nip={dosen.nip} />
                            ))}
                        </div>
                    </TabsContent>
                </Tabs>


            </main>
        </>
    )
}