import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Landing() {

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeOut"
            }
        }
    };

    const portfolioVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.5, delay: 0.5 }
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white flex flex-col relative">
            <motion.h1 className="text-2xl font-bold absolute top-6 left-6" variants={portfolioVariants} initial="hidden" animate="visible">
                Portfolio
            </motion.h1>

            <div className="flex-grow flex flex-col items-center justify-center">
                <motion.h2 className="text-6xl md:text-8xl font-extrabold tracking-tight" variants={textVariants} initial="hidden" animate="visible">
                    William Beaudin
                </motion.h2>
                <motion.p className="text-xl md:text-2xl mt-4 text-gray-400" variants={textVariants} initial="hidden" animate="visible" transition={{ delay: 0.2 }}>
                    <TypeAnimation
                        sequence={[
                            "Développeur Backend.",
                            2000,
                            "Étudiant au Cégep de Sorel-Tracy.",
                            2000,
                            "Créateur de Jolt.",
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        deletionSpeed={50}
                        repeat={Infinity}
                        cursor={true}
                    />
                </motion.p>
            </div>
        </div>
    )
}

export default Landing