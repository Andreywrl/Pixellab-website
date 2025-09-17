import { motion } from "framer-motion";

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0.25,
        scale: 0.9
    },
    onscreen: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.8,
        }
    }
};

export const CustomTransition = ({ children }) => {
    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
        >
            {children}
        </motion.div>
    )
}

export const SideTransition = ({ direction, duration, children }) => {

    var axisXInit = '';

    if (direction === 'left') {
        axisXInit = -50;
    } else if (direction === 'right') {
        axisXInit = 50;
    } else {
        axisXInit = null;
    }


    const cardVariantsLeft = {
        offscreen: {
            x: axisXInit,
            opacity: 0,
        },
        onscreen: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                duration: duration || 0.8,
            }
        }
    };

    return (
        <motion.div
            className="card-container"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariantsLeft}
        >
            {children}
        </motion.div>
    )
}
