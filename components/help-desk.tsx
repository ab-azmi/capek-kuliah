'use client'
import { XIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { motion } from 'framer-motion';
import { useState } from "react";
import { Span } from "next/dist/trace";
import Link from "next/link";

export default function HelpDesk() {
    const [open, setOpen] = useState(false);
    const variants = {
        hidden: { scale: 0, rotate: 60 },
        show: {
            scale: 1, rotate: 0
        }
    }

    return (
        <div className="fixed bottom-14 right-14">
            <motion.div
                variants={variants}
                initial="hidden"
                style={{ transformOrigin: 'bottom right' }}
                animate={open ? 'show' : 'hidden'}
                className="shadow-lg">
                <Card className="bg-secondary/10 backdrop-blur-md max-w-md border border-primary/35">
                    <CardHeader>
                        <CardTitle>
                            <span className="font-bold"> Ada pertanyaan</span>
                            <span className="text-[5rem] font-bold absolute -top-6">?</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm">
                        <p>
                            Cek bagian
                            <Link className="hover:underline font-semibold" href="#colyaqu"> Commonly Asked Questions</Link>
                        </p>
                        <p>
                            Atau kirim pertanyaanmu ke
                            <Link className="hover:underline font-semibold" href="/update-form"> Sini</Link>
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
            <Button
                onClick={() => setOpen(!open)}
                className="rounded-full w-10 h-10 absolute -bottom-5 -right-4" size={'icon'}>
                {open ? <XIcon size={24} /> : <span className="text-2xl font-bold">?</span>}

                {!open && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring' }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-1 w-5 h-5 bg-red-500 text-white rounded-full flex justify-center items-center text-xs">
                        1
                    </motion.span>
                )}
            </Button>
        </div>

    )
}