import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
import { dosenTI, dosenSI } from "@/data/dosen"

export default function ListDosen() {

    return (
        <main className="flex min-h-screen flex-col gap-14 px-36 py-20">
            <div className="flex flex-col gap-5">
                <div>
                    <h1 className="text-3xl font-bold">List Dosen ILKOM UNNES</h1>
                    <p className=" text-lg text-slate-400">
                        Lengkap dengan kontak dan opini kating
                    </p>
                </div>
            </div>

            <Tabs defaultValue="ti" className="w-full">
                <TabsList>
                    <TabsTrigger value="ti">Teknik Informatika</TabsTrigger>
                    <TabsTrigger value="si">Sistem Informasi</TabsTrigger>
                </TabsList>
                <TabsContent value="ti">
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        {dosenTI.map((dosen) => (
                            <Card className="max-w-lg" key={dosen.email}>
                                <CardHeader>
                                    <div className="flex gap-3 items-center">
                                        <Avatar>
                                            <AvatarImage className="w-10 bg-slate-600 rounded-lg h-10 object-cover" src={dosen.image} alt="avatar" />
                                            <AvatarFallback>
                                                {dosen.name.charAt(0) + dosen.name.charAt(1)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1 className="font-bold text-sm capitalize">{dosen.name}</h1>
                                            <p className="text-sm text-slate-400">{dosen.email}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-2 flex-wrap">
                                        {dosen.badges.map((badge) => (
                                            <Badge variant={'secondary'} key={badge}>{badge}</Badge>
                                        ))}
                                    </div>

                                </CardContent>
                            </Card>))}
                    </div>
                </TabsContent>
                <TabsContent value="si">
                    <div className="grid grid-cols-3 gap-5 mt-10">
                        {dosenSI.map((dosen) => (
                            <Card className="max-w-lg" key={dosen.email}>
                                <CardHeader>
                                    <div className="flex gap-3 items-center">
                                        <Avatar>
                                            <AvatarImage className="w-10 bg-slate-600 rounded-lg h-10 object-cover" src={dosen.image} alt="avatar" />
                                            <AvatarFallback>
                                                {dosen.name.charAt(0) + dosen.name.charAt(1)}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h1 className="font-bold text-sm capitalize">{dosen.name}</h1>
                                            <p className="text-sm text-slate-400">{dosen.email}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex gap-2 flex-wrap">
                                        {dosen.badges.map((badge) => (
                                            <Badge variant={'secondary'} key={badge}>{badge}</Badge>
                                        ))}
                                    </div>

                                </CardContent>
                            </Card>))}
                    </div>
                </TabsContent>
            </Tabs>


        </main>
    )
}