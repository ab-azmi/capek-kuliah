"use client"
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/dark-mode-toggle";

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
                <Link href="/update-form" className={cn(buttonVariants(), 'text-xs lg:text-base w-full lg:w-fit')}>Request Update</Link>
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
                className="w-full flex flex-row-reverse md:flex-col justify-between lg:gap-10 items-end">

                <ModeToggle />

                <p className="text-slate-400 italic lg:text-base text-xs">Updated 08 Agustus 2024</p>
            </motion.div>
        </>
    )
}