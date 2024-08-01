import {delay, motion, useAnimation, useInView} from 'framer-motion';
import { useEffect, useRef } from 'react';

export function RevealRightCard({children}: {children: React.ReactNode}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { x: 100, opacity: 0 },
        show: {
            x: 0, opacity: 1, transition: { delay: 0.3 }
        }
    }

    return (
        <motion.div 
            className="border-2 rounded-lg p-5"
            ref={ref} 
            variants={variants} 
            initial="hidden"
            animate={isInView ? 'show': 'hidden'}>
            {children}
        </motion.div>
    )

}

export function RevealLeftCard({children}: {children: React.ReactNode}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const variants = {
        hidden: { scale: 0, rotate: 60},
        show: {
            scale: 1, rotate: 0, transition: { delay: 0.3 }
        }
    }

    return (
        <motion.div 
            className="bg-primary rounded-lg p-5 h-fit"
            ref={ref} 
            variants={variants} 
            initial="hidden"
            style={{ transformOrigin: 'top left' }}
            animate={isInView ? 'show': 'hidden'}>
            {children}
        </motion.div>
    )

}