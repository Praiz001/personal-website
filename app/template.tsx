'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation';


const Template = ({ children }: { children: React.ReactNode }) => {
    const pathname = usePathname();

    return (
        <motion.div
            key={pathname}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 20 }}
            // exit={{ y: 20, opacity: 0 }}
            transition={{ ease: 'easeInOut', duration: 0.5 }}
        >
            {children}
        </motion.div>

    )
}

export default Template;












// alternative transition
// const pageVariants = {
//     initial: {
//         opacity: 0,
//         x: '100%',
//     },
//     animate: {
//         opacity: 1,
//         x: 0,
//         transition: {
//             duration: 0.5,
//             ease: 'easeInOut',
//         },
//     },
//     exit: {
//         opacity: 0,
//         x: '-100%',
//         transition: {
//             duration: 0.5,
//             ease: 'easeInOut',
//         },
//     },
// };
//<AnimatePresence mode="wait" >
// <motion.div
//         key={pathname}
//         initial="initial"
//         animate="animate"
//         exit="exit"
//         variants={pageVariants}
//     >
//     {children}
// </motion.div>
//</AnimatePresence>