"use client"
import { useScroll, useSpring, motion } from "framer-motion";

export default function ScrollProgress() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.div className="w-full left-0 fixed bg-primary h-2 bottom-2" style={{ scaleX }}>
            </motion.div>
        </>
    )
}