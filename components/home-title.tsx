"use client"

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import UpdatedDate from "@/components/updated-date";
import { SiGithub } from "@icons-pack/react-simple-icons"
import Image from "next/image"

export default function HomeTitle() {
    return (
        <>
            <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className="w-full flex flex-col items-start gap-2 lg:gap-5 justify-between">
                <div className="w-full">
                    <h1 className="text-xl lg:text-3xl font-bold">Panduan Skripsian ILKOM UNNES</h1>
                    <p className="text-sm lg:text-lg text-slate-400">
                        Dibuat berdasarkan pengalaman para sepuh yang lulus 14 smester
                    </p>
                </div>
                <div className="flex w-full flex-col items-center justify-between gap-2 mt-2 sm:mt-0 sm:flex-row sm:w-auto">
                    <Link href="/update-form" className={cn(buttonVariants(), 'text-xs lg:text-base w-full lg:w-fit')}>
                        Request Update
                    </Link>
                    <Link href="https://github.com/ab-azmi/capek-kuliah" target="_blank" className={cn(buttonVariants({ variant: 'outline' }), 'flex items-center justify-center gap-2 text-xs lg:text-base w-full lg:w-fit')}>
                        <SiGithub />
                        Star and Contribute!
                    </Link>
                </div>
                <UpdatedDate />
            </motion.div>

            <motion.div 
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                    x: {
                        type: "spring",
                        damping: 5,
                        stiffness: 100,
                        restDelta: 0.001
                    }
                }}
                className="hidden w-full lg:flex flex-row-reverse md:flex-col justify-between lg:gap-10 items-end">
                <Image src="/capek_kuliah_hero.png" alt="Capek Kuliah Logo" className="h-56 w-56 inline-block mr-2" width={512} height={512} />
            </motion.div>
        </>
    )
}