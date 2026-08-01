import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealVariant = "up" | "left" | "right";

type RevealTag = "div" | "section" | "article";

type RevealProps = {
    as?: RevealTag,
    children: ReactNode,
    className?: string,
    variant: RevealVariant,
    delay?: number,
}

const variantsSet = {
    up: {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 }
    },
    left: {
        initial: { opacity: 0, x: -24 },
        whileInView: { opacity: 1, x: 0 }
    },
    right: {
        initial: { opacity: 0, x: 24 },
        whileInView: { opacity: 1, x: 0 }
    },
}

const motionTags = {
    div: motion.div,
    section: motion.section,
    article: motion.article,
};

export function Reveal({
as = "div",
children,
className,
variant = "up",
delay = 0
}: RevealProps) {
    const MotionTag = motionTags[as];
    const animation = variantsSet[variant];

    return (
        <MotionTag
            className={className}
            initial={animation.initial}
            whileInView={animation.whileInView}
            viewport= {{ once:true, amount: 0.2 }}
            transition= {{ duration: 0.6, ease: "easeOut", delay }}
        >
        {children}
        </MotionTag>
    )
}
