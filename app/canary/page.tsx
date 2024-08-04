"use client"
import { useMotionValue, useSpring, useTransform, motion, useAnimation } from "framer-motion"

const Canary = () => {
    return (
        <div className="grid h-screen w-full place-content-center  px-4 py-12 text-slate-900">
            <TiltCard/>
        </div>
    )
}

const TiltCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-.5, .5], ["17deg", "-17deg"]);
    const rotateY = useTransform(mouseXSpring, [-.5, .5], ["-17deg", "17deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = (e.target as HTMLDivElement)?.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    }

    const onMouseLeave = () => {
        x.set(0);
        y.set(0);
    }

 

    return (
        <motion.div 
            onMouseMove={(e) => handleMouseMove(e)}
            onMouseLeave={() => onMouseLeave()}
            style={{ 
                rotateX: rotateX,
                rotateY: rotateY,
                transformStyle: 'preserve-3d',
             }}
            className="relative h-96 w-72 rounded-xl bg-secondary shadow-lg">
                <div
                    style={{ 
                        transform: 'translateZ(75px)',
                        transformStyle: 'preserve-3d'
                     }} 
                    className="absolute inset-4  rounded-xl bg-white shadow-lg p-3">
                        <div
                            style={{ 
                                transform: 'translateZ(100px)',
                             }}
                             className="mx-auto text-4xl bg-red-400 w-full h-[30%] rounded-lg">
                        </div>
                        <p style={{ 
                            transform: 'translateZ(50px)'
                         }}
                         className="text-center text-2xl font-bold">
                            Hover
                        </p>
                </div>
        </motion.div>
    )
}

export default Canary