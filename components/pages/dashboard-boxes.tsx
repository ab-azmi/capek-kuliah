"use client"

import { Link2, MessageCircle, SendHorizonal } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar"
import Image from "next/image"
import { berkasWajib } from "@/data/berkas-wajib"
import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function DashboardBoxes() {
    const [selectedQna, setSelectedQna] = useState(berkasWajib[0]);

    return (
        <div className="flex-col lg:flex-row flex gap-5">
            <div className="w-full lg:w-1/3 flex lg:flex-col flex-col-reverse gap-5">
                {/* Berkas Wajib */}
                <motion.div 
                    initial={{y: -60, x: -60, opacity: 0}}
                    animate={{y: 0, x:0, opacity: 1, transition: {duration: 0.3, delay: 0.2}}}
                    className="border-2 rounded-lg p-3 lg:p-5">
                    <h1 className="font-bold text-xl lg:text-2xl">Berkas Wajib</h1>
                    <p className=" text-slate-400 text-sm lg:text-base">
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
                </motion.div>
                {/* Joki */}
                <motion.div 
                    initial={{y: 60, x: -60, opacity: 0}}
                    animate={{y: 0, x:0, opacity: 1, transition: {duration: 0.3, delay: 0.4}}}
                    className="border-2 rounded-lg p-3 lg:p-5 h-full">
                    <h1 className="font-bold text-xl lg:text-2xl">Jasa Joki</h1>
                    <p className=" text-slate-400 lg:text-base text-sm">
                        Kalau mau instan, bisa cek di bawah ini
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                        <div className="flex justify-between items-center">
                            Joki Penulisan
                            <Link className={buttonVariants({size: 'sm'})} href={'https://www.youtube.com/watch?v=hZORcRzy-lY'} target="_blank">
                                <Link2 size={16} />
                            </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki Web & UI/UX
                                <Link className={buttonVariants({size: 'sm'})} href="https://www.youtube.com/watch?v=BJrAbX6ps2s" target="_blank">
                                    <Link2 size={16} />
                                </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki ML & AI
                                <Link className={buttonVariants({size: 'sm'})} href="https://youtu.be/uVYjZKWEWmk?t=368" target="_blank">
                                    <Link2 size={16} />
                                </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki LaTeX/Formatting
                                <Link className={buttonVariants({size: 'sm'})} href="https://youtu.be/ERCx1tIm2wk?si=oHft2qogkhEDFhV2" target="_blank">
                                    <Link2 size={16} />
                                </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki Turnitin/Anti-Plagiasi
                                <Link className={buttonVariants({size: 'sm'})} href="https://youtu.be/qWwb8S02f_c?si=iJKlKRXgfLsxytmB" target="_blank">
                                    <Link2 size={16} />
                                </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki Translate B. Inggris
                                <Link className={buttonVariants({size: 'sm'})} href="https://youtu.be/mtd92pfy0YY?si=riWFX_9BBCjnNGXw&t=54" target="_blank">
                                    <Link2 size={16} />
                                </Link>
                        </div>
                        <div className="flex justify-between items-center">
                            Joki Full Set
                                <Link className={buttonVariants({size: 'sm'})} href="https://cornhub.website" target="_blank">
                                    <Link2 size={16} />
                                </Link>
                        </div>
                    </div>
                    <p className="text-slate-400 mt-2 text-xs lg:text-sm italic">
                        *beda tipe beda harga ya
                    </p>
                </motion.div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-5">
                {/* QnA */}
                <motion.div 
                    initial={{y: -60, opacity: 0}}
                    animate={{y: 0, opacity: 1, transition: {duration: 0.3, delay: 0.5}}}
                    className="border-2 rounded-lg p-3 lg:p-5">
                    <div className="flex gap-3 items-center">
                        <Avatar>
                            <AvatarImage alt="Informan" src="/images/info.png" />
                            <AvatarFallback>
                                IM
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className="font-bold text-sm">Informan</h1>
                            <p className=" text-slate-400 text-xs lg:text-sm">
                                informanqna@mail.unnes.ac.id
                            </p>
                        </div>
                    </div>
                    <div className="mt-5 flex flex-col gap-5 h-[18rem] overflow-y-scroll">
                        {selectedQna.qna.map((qna) => (
                            <div key={qna.id}>
                                {qna.type === 'question' && (

                                    <div className="bg-secondary rounded-r-lg rounded-tl-lg p-3 w-fit text-sm max-w-[90%] lg:max-w-[80%]">
                                        {qna.message}
                                    </div>
                                )}
                                {qna.type === 'answer' && (
                                    <div className="bg-secondary-foreground rounded-l-lg rounded-tr-lg text-secondary ml-auto p-3 w-fit text-sm max-w-[90%] lg:max-w-[80%]">
                                        {qna.message}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="mt-5 flex gap-3">
                        <div className="w-full border-2 rounded-lg h-10"></div>
                        <Button disabled>
                            <SendHorizonal size={18} />
                        </Button>
                    </div>
                </motion.div>
                {/* Referensi Jurnal */}
                <motion.div 
                    initial={{y: 60, opacity: 0}}
                    animate={{y: 0, opacity: 1, transition: {duration: 0.5, delay: 0.3}}}
                    className="border-2 rounded-lg p-3 lg:p-5">
                    <h1 className="font-bold text-xl lg:text-2xl">Referensi Artikel</h1>
                    <p className=" text-slate-400 text-sm lg:text-base">
                        Beberapa referensi untuk mencari artikel
                    </p>
                    <div className="mt-5 flex flex-col gap-3">
                        <Link href="https://ieeexplore.ieee.org/browse/periodicals/title" target="_blank" className="hover:underline">
                            IEEE
                        </Link>
                        <Link href="https://www.sciencedirect.com/browse/journals-and-books" target="_blank" className="hover:underline">
                            Science Direct
                        </Link>
                        <Link href="https://paperswithcode.com" target="_blank" className="hover:underline">
                            PapersWithCode
                        </Link>
                        <Link href="https://arxiv.org/archive/cs" target="_blank" className="hover:underline">
                            Arxiv
                        </Link>
                        <Link href="https://link.springer.com/" target="_blank" className="hover:underline">
                            Springer
                        </Link>
                        <Link href="https://scholar.google.com/" target="_blank" className="hover:underline">
                            Google Scholar
                        </Link>
                        <Link href="https://journals.sagepub.com/" target="_blank" className="hover:underline">
                            Sage Journals
                        </Link>
                        <Link href="https://doaj.org/" target="_blank" className="hover:underline">
                            Director of Open Access Journals
                        </Link>
                    </div>
                </motion.div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-col gap-5">
                {/* Dev Team */}
                <motion.div 
                    initial={{y: -60, x: 60, opacity: 0}}
                    animate={{y: 0, x:0, opacity: 1, transition: {duration: 0.3, delay: 0.4}}}
                    className="border-2 rounded-lg p-3 lg:p-5">
                    <h1 className="font-bold text-xl lg:text-2xl">Dev Team</h1>
                    <p className=" text-slate-400 text-sm lg:text-base">
                        Selaku dev team sangat berterimakasih & senang bisa bantu kalian. Kalau ada yg keliru, hubungi saja ya
                    </p>
                    <div className="mt-5 flex flex-col gap-3 lg:gap-5">
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarImage alt="Auni S.Kom" src="https://github.com/auni-st.png" />
                                <AvatarFallback>
                                    AU
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-sm flex items-center gap-2">
                                    Auni S.Kom
                                    <div className="flex items-center gap-1">
                                        <Link href="https://www.linkedin.com/in/ahmad-ramadhan-auni" target="_blank">
                                            <FaLinkedin size={16}/>
                                        </Link>
                                        <Link href="https://github.com/auni-st" target="_blank">
                                            <FaGithub size={16}/>
                                        </Link>
                                    </div>
                                </h1>
                                <p className=" text-slate-400 text-xs lg:text-sm">
                                aramadhan395@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarImage alt="Azmi" src="https://github.com/ab-azmi.png" />
                                <AvatarFallback>
                                    AZ
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-sm flex items-center gap-2">
                                    Azmi
                                    <div className="flex items-center gap-1">
                                        <Link href="https://www.linkedin.com/in/abdillah-azmi-4a2111232" target="_blank">
                                            <FaLinkedin size={16}/>
                                        </Link>
                                        <Link href="https://github.com/ab-azmi" target="_blank">
                                            <FaGithub size={16}/>
                                        </Link>
                                    </div>
                                </h1>
                                <p className=" text-slate-400 text-xs lg:text-sm">
                                    azmi.kiva@gmail.com
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3 items-center">
                            <Avatar>
                                <AvatarImage alt="Faris Faikar" src="https://github.com/farisfaikar.png" />
                                <AvatarFallback>
                                    FF
                                </AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col">
                                <h1 className="font-bold text-sm flex items-center gap-2">
                                    Faris Faikar
                                    <div className="flex items-center gap-1">
                                        <Link href="https://linkedin.com/in/farisfaikar" target="_blank">
                                            <FaLinkedin size={16}/>
                                        </Link>
                                        <Link href="https://github.com/farisfaikar" target="_blank">
                                            <FaGithub size={16}/>
                                        </Link>
                                    </div>
                                </h1>
                                <p className=" text-slate-400 text-xs lg:text-sm">
                                    farisfaikar.r@gmail.com
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {/* Tool Helper */}
                <motion.div 
                    initial={{y: 60, x: 60, opacity: 0}}
                    animate={{y: 0, x:0, opacity: 1, transition: {duration: 0.3, delay: 0.2}}}
                    className="border-2 rounded-lg p-3 lg:p-5 h-full">
                    <h1 className="font-bold lg:text-2xl text-xl">Tools Helper Skripsian</h1>
                    <p className=" text-slate-400 text-sm lg:text-sm">
                        Beberapa Tool yang bisa bantu kamu skripsian
                    </p>
                    <div className="grid grid-cols-3 gap-4 mt-5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4">
                        <Link href={'https://openai.com/chatgpt/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/chatgpt.png'} alt="ChatGPT" width={45} height={45} />
                        </Link>
                        <Link href={'https://gemini.google.com/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/gemini.png'} alt="Gemini" width={45} height={45} />
                        </Link>
                        <Link href={'https://aistudio.google.com/app/prompts/new_chat'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/ai_studio.png'} alt="AI Studio" width={45} height={45} />
                        </Link>
                        <Link href={'https://claude.ai/new'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/claude.png'} alt="Claude AI" width={45} height={45} />
                        </Link>
                        <Link href={'https://copilot.microsoft.com/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/github_copilot.png'} alt="GitHub Copilot" width={45} height={45} />
                        </Link>
                        <Link href={'https://aws.amazon.com/q/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/amazon_q.png'} alt="Amazon Q" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.kaggle.com'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/kaggle.webp'} alt="Kaggle" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.mendeley.com'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/mendeley.png'} alt="Mendeley" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.zotero.org/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/zotero.png'} alt="Zotero" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.figma.com'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/figma.webp'} alt="Figma" width={30} height={30} />
                        </Link>
                        <Link href={'https://www.eraser.io/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/eraser.png'} alt="Eraser.io" width={45} height={45} />
                        </Link>
                        <Link href={'https://harzing.com/resources/publish-or-perish/windows'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/publish_or_perish.png'} alt="Publish or Perish" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.deepl.com/translator'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/deepl.png'} alt="DeepL" width={25} height={25} />
                        </Link>
                        <Link href={'https://quillbot.com/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/quillbot.png'} alt="Quillbot" width={45} height={45} />
                        </Link>
                        <Link href={'https://colab.research.google.com/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/google_colab.png'} alt="Google Colab" width={45} height={45} />
                        </Link>
                        <Link href={'https://universe.roboflow.com/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/roboflow.png'} alt="Roboflow" width={45} height={45} />
                        </Link>
                        <Link href={'https://typeset.io/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/scispace.png'} alt="Scispace" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.connectedpapers.com/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/connected_papers.png'} alt="Connected Papers" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.researchrabbit.ai/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/research_rabbit.webp'} alt="Research Rabbit" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.semanticscholar.org/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/semantic_scholar.png'} alt="Semantic Scholar" width={45} height={45} />
                        </Link>
                        <Link href={'https://www.sci-hub.se/'} target="_blank" className="flex items-center justify-center border-2 rounded-lg p-3 hover:border-slate-600 transition-colors aspect-square">
                            <Image src={'/images/sci_hub.webp'} alt="Sci-Hub" width={45} height={45} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}