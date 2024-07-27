"use client"

import { Link2, MessageCircle, SendHorizonal } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { Avatar, AvatarFallback } from "../ui/avatar"
import Image from "next/image"
import { berkasWajib } from "@/data/berkas-wajib"
import { useState } from "react"

export default function DashboardBoxes() {
    const [selectedQna, setSelectedQna] = useState(berkasWajib[0]);

    return (
        <div className="flex gap-5">
            <div className="w-1/3 flex flex-col gap-5">
                {/* Berkas Wajib */}
                <div className="border-2 rounded-lg p-5">
                    <h1 className="font-bold text-2xl">Berkas Wajib</h1>
                    <p className=" text-slate-400">
                        Siapkan dari awal karena sulit mendapatkannya
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                        {berkasWajib.map((berkas) => (
                            <div key={berkas.id} className="flex justify-between items-center">
                                {berkas.name}
                                <Button
                                    onClick={() => setSelectedQna(berkas)}
                                    size={'sm'}
                                    className={selectedQna.id != berkas.id ? 'bg-secondary text-primary' : 'bg-primary text-secondary'}>
                                    <MessageCircle size={16} />
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Joki */}
                <div className="border-2 rounded-lg p-5">
                    <h1 className="font-bold text-2xl">Jasa Joki</h1>
                    <p className=" text-slate-400">
                        Kalau mau instan, bisa cek di bawah ini
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            Joki Penulisan
                            <Button size={'sm'}>
                                <Link href={'https://www.youtube.com/watch?v=hZORcRzy-lY'} target="_blank">
                                    <Link2 size={16} />
                                </Link>
                            </Button>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki Web & UI/UX
                            <Button size={'sm'}>
                                <Link2 size={16} />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki ML & AI
                            <Button size={'sm'}>
                                <Link2 size={16} />
                            </Button>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki Full Set
                            <Button size={'sm'}>
                                <Link2 size={16} />
                            </Button>
                        </div>
                    </div>
                    <p className="text-slate-400 mt-2 text-sm italic">
                        *beda tipe beda harga ya
                    </p>
                </div>
            </div>
            <div className="w-1/3 flex flex-col gap-5">
                {/* QnA */}
                <div className="border-2 rounded-lg p-5">
                    <div className="flex gap-3 items-center">
                        <Avatar>
                            <AvatarFallback>
                                KT
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-bold text-sm">Informan</h1>
                            <p className=" text-slate-400 text-sm">
                                informanqna@mail.unnes.ac.id
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-5 h-[18rem] overflow-y-scroll">
                        {selectedQna.qna.map((qna) => (
                            <>
                                {qna.type === 'question' && (

                                    <div className="bg-secondary rounded-r-lg rounded-tl-lg p-3 w-fit text-sm max-w-[80%]">
                                        {qna.message}
                                    </div>
                                )}
                                {qna.type === 'answer' && (
                                    <div className="bg-secondary-foreground rounded-l-lg rounded-tr-lg text-slate-300 ml-auto p-3 w-fit text-sm max-w-[80%]">
                                        {qna.message}
                                    </div>
                                )}
                            </>
                        ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                        <div className="w-full border-2 rounded-lg h-10"></div>
                        <Button disabled>
                            <SendHorizonal size={18} />
                        </Button>
                    </div>
                </div>
                {/* Referensi Jurnal */}
                <div className="border-2 rounded-lg p-5">
                    <h1 className="font-bold text-2xl">Referensi Jurnal</h1>
                    <p className=" text-slate-400">
                        Beberapa referensi untuk mencari artikel
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                        <Link href="/jurnal" className="hover:underline">
                            IEEE
                        </Link>
                        <Link href="/jurnal" className="hover:underline">
                            Science Direct
                        </Link>
                        <Link href="/jurnal" className="hover:underline">
                            PapersWithCode
                        </Link>
                        <Link href="/jurnal" className="hover:underline">
                            Arxiv
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-1/3 flex flex-col gap-5">
                {/* Dev Team */}
                <div className="border-2 rounded-lg p-5">
                    <h1 className="font-bold text-2xl">Dev Team</h1>
                    <p className=" text-slate-400">
                        Selaku dev team sangat berterimakasih & senang bisa bantu kalian. Kalau ada yg keliru, hubungi saja ya
                    </p>
                    <div className="mt-5 flex flex-col gap-5">
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarFallback>
                                    KT
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-sm">Kating</h1>
                                <p className=" text-slate-400 text-sm">
                                    kating@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarFallback>
                                    KT
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-sm">Kating</h1>
                                <p className=" text-slate-400 text-sm">
                                    kating@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarFallback>
                                    KT
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-sm">Kating</h1>
                                <p className=" text-slate-400 text-sm">
                                    kating@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* TOol Helper */}
                <div className="border-2 rounded-lg p-5 h-full">
                    <h1 className="font-bold text-2xl">Tools Helper Skripsian</h1>
                    <p className=" text-slate-400">
                        Beberapa Tool yang bisa bantu kamu skripsian
                    </p>
                    <div className="flex gap-4 flex-wrap mt-5">
                        <Link href={'https://openai.com/chatgpt/'} target="_blank" className="border-2 rounded-lg p-3 hover:border-slate-600 transition-colors">
                            <Image src={'/images/cgpt.png'} alt="Chatgpt" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.kaggle.com'} target="_blank" className="border-2 rounded-lg p-3 hover:border-slate-600 transition-colors">
                            <Image src={'/images/kaggle.webp'} alt="Chatgpt" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.mendeley.com'} target="_blank" className="border-2 rounded-lg p-3 hover:border-slate-600 transition-colors">
                            <Image src={'/images/mendeley.png'} alt="Chatgpt" width={45} height={45} />
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    )
}