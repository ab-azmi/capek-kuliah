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
            <motion.div className="w-full left-0 fixed opacity-70 bg-gradient-to-r from-slate-800 to-cyan-700 h-3 bottom-3" style={{ scaleX }}>
            </motion.div>
        </>
    )
}