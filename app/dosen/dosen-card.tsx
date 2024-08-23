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
import dosen_ph from '@/public/images/dosen_ph.png'
import { BriefcaseBusiness, Fingerprint, Phone } from "lucide-react";


const ROTATION_RANGE = 32.5;
const HALF_ROTATION_RANGE = 32.5 / 2;

const DosenCard = ({
    alt, name, image, email, prodi, nip, phone, jabatan
}: {
    alt: string,
    name: string,
    image: string,
    email: string,
    prodi: string,
    nip: string,
    phone: string,
    jabatan: string
}) => {
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
                <div className="absolute opacity-30 scale-y-[-1] top-24 -left-20 uppercase text-white rotate-90 text-[5rem] leading-none font-bold">
                    UNNES
                </div>
                <Image
                    src={image === "" ? dosen_ph : image}
                    alt={alt}
                    width={200}
                    height={200}
                    priority
                    loader={myLoader}
                    className="absolute top-0 left-0 w-full h-full object-contain"
                />
                <motion.div
                    style={{
                        transformStyle: "preserve-3d",
                        transform: "translateZ(75px)",
                    }}
                    className="relative flex flex-col gap-3 rounded-xl bg-black/20 backdrop-blur-lg border border-slate-500 shadow-lg p-4"
                >
                    <div
                        style={{
                            transform: "translateZ(85px)",
                            transformStyle: "preserve-3d",
                        }}
                        className="bg-primary w-10 h-10 rounded-lg absolute -top-6 right-4 text-secondary font-bold text-lg grid place-content-center">
                        {prodi}
                    </div>
                    <div className="flex flex-col gap-3 text-slate-200">

                        <div className=" font-bold">
                            {name}
                        </div>
                        <div
                            className="flex gap-2 items-center text-sm">
                            <BriefcaseBusiness className="text-slate-200/40 h-5 w-5" />
                            {jabatan}
                        </div>
                        <div
                            className="flex gap-2 items-center text-sm">
                            <Phone className="text-slate-200/40 h-5 w-5" />
                            <p>{phone}</p>
                        </div>
                        <div
                            className="flex gap-2 items-center text-sm">
                            <Fingerprint className="text-slate-200/40 h-5 w-5" />
                            <p>{nip}</p>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        
    );
};


export default DosenCard;