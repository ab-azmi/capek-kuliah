"use client"
import React, { useRef } from "react";
import {
    motion,
    useMotionTemplate,
    useMotionValue,
    useSpring,
} from "framer-motion";
import Image, { ImageLoaderProps } from "next/image";
import unnes from '@/public/images/unnes.png'
import { BriefcaseBusiness, Fingerprint, Phone } from "lucide-react";


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const Canary = () => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const xSpring = useSpring(x);
    const ySpring = useSpring(y);

    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return [0, 0];

        const rect = (ref.current as HTMLElement).getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
        const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

        const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
        const rY = mouseX / width - HALF_ROTATION_RANGE;

        x.set(rX);
        y.set(rY);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
        return `${src}?w=${width}&q=${quality || 150}`
    }

    return (
        <div className="grid w-full place-content-center px-4 py-12 text-slate-900">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transformStyle: "preserve-3d",
                    transform,
                }}
                className="relative h-96 shadow-lg w-72 rounded-xl bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col justify-end p-4"
            >
                <div
                    className="absolute top-4 right-4 grid place-content-center"
                >

                    <Image src={unnes} width={32} height={32} alt="unnes" className="opacity-70" />
                </div>
                <div className="absolute top-40 opacity-30 -left-40 text-white rotate-90 text-[5rem] font-bold">
                    ALAMSYAH
                </div>
                <Image
                    src="https://simpeg2.unnes.ac.id/photo/132320168"
                    alt="Profile"
                    width={200}
                    height={200}
                    priority
                    loader={myLoader}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />
                <motion.div
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(75px)",
                    }}
                    className="relative flex flex-col gap-3 rounded-xl bg-white shadow-lg p-4"
                >
                    <div
                        style={{
                            transform: "translateZ(85px)",
                            transformStyle: "preserve-3d",
                        }}
                        className="bg-primary w-10 h-10 rounded-lg absolute -top-6 right-4 text-secondary font-bold text-lg grid place-content-center">
                        TI
                    </div>
                    <div className="flex flex-col gap-3">

                        <div className=" font-bold">
                            Dr. Alamsyah S.Si., M.Kom.
                        </div>
                        <div
                            className="flex gap-2 items-center text-sm">
                            <BriefcaseBusiness className="text-primary/30 h-5 w-5" />
                            <p>Ketua Jurusan</p>
                        </div>
                        <div
                            className="flex gap-2 items-center text-sm">
                            <Phone className="text-primary/30 h-5 w-5" />
                            <p>+62 815-6513-617</p>
                        </div>
                        <div
                            className="flex gap-2 items-center text-sm">
                            <Fingerprint className="text-primary/30 h-5 w-5" />
                            <p>NIP-197405172006041001</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    );
};


export default Canary;