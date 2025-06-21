import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
    const containerRef = useRef(null);

    const experiences = [
        {
            title: "Conception de l'application Gitnar",
            period: "Juin 2025 - Présent",
            description: "Création d'une application d'exportation des issues Sonar vers Github, permettant une meilleure gestion des tâches et des bugs dans les projets de développement.",
        },
        {
            title: "Développeur .NET Core Chez Descartes System Group",
            period: "Mai 2025 - Présent",
            description: "Participation au développement de solutions logicielles robustes en .NET Core, collaboration avec des équipes multidisciplinaires et contribution à l'amélioration continue des processus de développement."
        },
        {
            title: "Création de Jolt",
            period: "Janvier 2025 - Présent",
            description: "Développement d'un framework pour concevoir, implémenter et tester des applications Web (Rest, GraphQL, API, etc.)",
        },
        {
            title: "Étudiant - Cégep",
            period: "Août 2022 - Présent",
            description: "Études en informatique au Cégep de Sorel-Tracy, spécialisation en développement web et technologies modernes."
        }
    ];

    // Refs pour les sections à animer au scroll
    const introSectionRef = useRef(null);
    const isIntroInView = useInView(introSectionRef, { once: true, amount: 0.2 });

    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });

    const experienceSectionRef = useRef(null);
    const isExperienceInView = useInView(experienceSectionRef, { once: true, amount: 0.2 });

    const fadeInUpVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const staggerContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div
            ref={containerRef}
            className="min-h-screen bg-gray-900 text-white py-8 px-4 sm:px-6 md:px-8 lg:px-16 relative overflow-hidden"
        >
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-500 opacity-10 blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 20,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-purple-600 opacity-10 blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 mb-12 sm:mb-16">
                    <div className="w-full md:w-2/5" ref={imageRef}>
                        <motion.div
                            className="relative overflow-hidden rounded-xl shadow-2xl"
                            variants={fadeInUpVariants}
                            initial="hidden"
                            animate={isImageInView ? "visible" : "hidden"}
                        >
                            <img
                                src="/portfolio/images/William_black.jpg"
                                alt="William Beaudin"
                                className="w-full h-auto rounded-xl shadow-lg"
                            />
                        </motion.div>
                    </div>

                    <div className="w-full md:w-3/5" ref={introSectionRef}>
                        <motion.div
                            variants={staggerContainerVariants}
                            initial="hidden"
                            animate={isIntroInView ? "visible" : "hidden"}
                            className="space-y-6"
                        >
                            <motion.h2
                                variants={fadeInUpVariants}
                                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                            >
                                À propos de moi
                            </motion.h2>

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                            >
                                Bonjour ! Je suis un développeur passionné de <span className="text-blue-400 font-semibold">20 ans</span> du Canada, actuellement étudiant en <span className="text-purple-400 font-semibold">Développement Web et Mobile</span> au Cégep de Sorel-Tracy. Pour moi, le code n'est pas seulement un travail - c'est un art et ma véritable passion.
                            </motion.p>

                            <motion.div
                                variants={fadeInUpVariants}
                                className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 p-6 rounded-xl border border-gray-600/30"
                            >
                                <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                                    <span className="mr-2">🎯</span> Philosophie de développement
                                </h3>
                                <p className="text-gray-300 leading-relaxed">
                                    Je privilégie les technologies éprouvées et <span className="text-yellow-400 font-medium">battle-tested</span> plutôt que de suivre aveuglément les dernières tendances. Mon approche se concentre sur la stabilité, la performance et l'élégance du code. J'ai une affection particulière pour les bonnes vieilles technologies qui ont fait leurs preuves.
                                </p>
                            </motion.div>

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                            >
                                Actuellement, je travaille en tant que stagiaire chez <span className="text-blue-400 font-semibold">Descartes</span>, où je développe des solutions web en <span className="text-yellow-400 font-medium">backend</span> avec <span className="text-purple-400 font-semibold">ASP.NET</span>.

                                Cette expérience me permet de perfectionner mes compétences et de progresser vers mon objectif : devenir un ingénieur <span className="text-pink-400 font-medium">full-stack</span> accompli.

                                Je cherche à allier des interfaces élégantes à des performances optimales et une architecture solide, tout en explorant les meilleures pratiques du développement web.
                            </motion.p>

                            <motion.div
                                variants={fadeInUpVariants}
                                className="text-center pt-4"
                            >
                                <p className="text-gray-400 italic">
                                    "Toujours avide d'apprendre et de collaborer sur des projets passionnants !"
                                </p>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                <div ref={experienceSectionRef}>
                    <motion.div
                        variants={fadeInUpVariants}
                        initial="hidden"
                        animate={isExperienceInView ? "visible" : "hidden"}
                        className="bg-gray-800/40 rounded-xl backdrop-blur-sm p-6 sm:p-8 mb-8 border border-gray-700/50 shadow-xl"
                    >
                        <motion.h3
                            className="text-xl sm:text-2xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
                        >
                            Mon Parcours
                        </motion.h3>

                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    className="relative pl-10 border-l-2 border-blue-500"
                                    variants={{
                                        hidden: { opacity: 0, x: -20 },
                                        visible: i => ({
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                delay: i * 0.2,
                                                duration: 0.5
                                            }
                                        })
                                    }}
                                    custom={index}
                                    initial="hidden"
                                    animate={isExperienceInView ? "visible" : "hidden"}
                                >
                                    <motion.div
                                        className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
                                        variants={{
                                            hidden: { scale: 0 },
                                            visible: i => ({
                                                scale: 1,
                                                transition: {
                                                    delay: i * 0.2 + 0.2,
                                                    type: "spring",
                                                    stiffness: 200
                                                }
                                            })
                                        }}
                                        custom={index}
                                    >
                                        <div className="w-2 h-2 bg-white rounded-full"></div>
                                    </motion.div>

                                    <div className="bg-gray-800/50 p-4 sm:p-6 rounded-lg border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
                                        <h4 className="text-lg sm:text-xl font-bold text-white mb-1">{exp.title}</h4>
                                        <p className="text-blue-400 mb-3 text-xs sm:text-sm font-medium">{exp.period}</p>
                                        <p className="text-gray-300 text-sm sm:text-base">{exp.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;