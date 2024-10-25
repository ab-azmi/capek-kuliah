"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import useDownloader from "react-use-downloader";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

// Define the type for the props of CVButton
type DownloadButtonProps = {
    icon: React.ReactNode
    targetText: string
    filePath?: string
    fileName?: string
    link?: string
    isLink?: boolean
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
    icon,
    targetText,
    filePath,
    fileName,
    link,
    isLink,
}) => {
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const [text, setText] = useState(targetText);
    const { download } = useDownloader();

    const scramble = () => {
        let pos = 0;

        intervalRef.current = setInterval(() => {
            const scrambled = targetText.split("")
                .map((char, index) => {
                    if (pos / CYCLES_PER_LETTER > index) {
                        return char;
                    }

                    const randomCharIndex = Math.floor(Math.random() * CHARS.length);
                    const randomChar = CHARS[randomCharIndex];

                    return randomChar;
                })
                .join("");

            setText(scrambled);
            pos++;

            if (pos >= targetText.length * CYCLES_PER_LETTER) {
                stopScramble();
            }
        }, SHUFFLE_TIME);
    };

    const stopScramble = () => {
        clearInterval(intervalRef.current || undefined);
        setText(targetText);
    };

    const downloadCV = () => {
        if (!isLink && filePath && fileName) {
            console.log("downloading");
            download(filePath, fileName);
        }
    }

    const handleClick = () => {
        if (isLink && link) {
            window.open(link, "_blank");
        } else {
            downloadCV();
        }
    }

    return (
        <motion.button
            whileHover={{ scale: 1.025 }}
            whileTap={{ scale: 0.975 }}
            onMouseEnter={scramble}
            onMouseLeave={stopScramble}
            onClick={handleClick}
            className="group relative overflow-hidden rounded-lg border hover:bg-accent hover:text-accent-foreground border-input px-4 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors dark:hover:text-blue-300 w-full"
        >
            <div className="relative z-10 flex items-center justify-center gap-2 text-neutral-950 dark:text-neutral-300">
                {icon}
                <span>{text}</span>
            </div>
            <motion.span
                initial={{ y: "100%" }}
                animate={{ y: "-100%" }}
                transition={{
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 1,
                    ease: "linear",
                }}
                className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-blue-400/0 from-40% dark:via-blue-400/100 to-blue-400/0 to-60% opacity-0 transition-opacity group-hover:opacity-100"
            />
        </motion.button>
    );
};

export default DownloadButton;
