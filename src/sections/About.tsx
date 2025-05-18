import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function About() {
    const containerRef = useRef(null);

    const experiences = [
        {
            title: "Développeur Stagiaire .NET ASP Core Chez Descartes System Group",
            period: "Mai 2025 - Présent",
            description: "Participation au développement de solutions logicielles robustes en .NET ASP Core, collaboration avec des équipes multidisciplinaires et contribution à l'amélioration continue des processus de développement."
        },
        {
            title: "Créateur de Jolt",
            period: "Février 2025 - Présent",
            description: "Développement du framework pour concevoir, implémenter et tester des applications Web (Rest, GraphQL, API, etc.)",
        },
        {
            title: "Étudiant - Cégep",
            period: "Août 2022 - Présent",
            description: "Études en informatique au Cégep de Sorel-Tracy, spécialisation en développement web et technologies modernes."
        }
    ];

    const technologies = [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "TypeScript", icon: "devicon-typescript-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "C#", icon: "devicon-csharp-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "Swift", icon: "devicon-swift-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "Spring", icon: "devicon-spring-plain colored" },
        { name: "React", icon: "devicon-react-original colored" },
        { name: ".NET", icon: "devicon-dotnetcore-plain colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Arduino", icon: "devicon-arduino-plain colored" },
        { name: "VS Code", icon: "devicon-vscode-plain colored" },
        { name: "Linux", icon: "devicon-linux-plain colored" }
    ];

    // Refs pour les sections à animer au scroll
    const introSectionRef = useRef(null);
    const isIntroInView = useInView(introSectionRef, { once: true, amount: 0.2 });

    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { once: true, amount: 0.5 });

    const techStackRef = useRef(null);
    const isTechStackInView = useInView(techStackRef, { once: true, amount: 0.1 });

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

    const techItemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
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
                                Développeur passionné spécialisé dans la création d'applications web modernes et d'expériences numériques interactives. Mon objectif est de combiner des interfaces élégantes avec des performances optimales.
                            </motion.p>

                            <motion.p
                                variants={fadeInUpVariants}
                                className="text-base sm:text-lg text-gray-300 leading-relaxed"
                            >
                                Actuellement étudiant au Cégep de Sorel-Tracy, je me concentre sur l'approfondissement de mes compétences techniques tout en travaillant sur des projets personnels comme Jolt, un framework minimaliste en Java.
                            </motion.p>
                        </motion.div>

                        <div ref={techStackRef} className="mt-8">
                            <motion.div
                                variants={staggerContainerVariants}
                                initial="hidden"
                                animate={isTechStackInView ? "visible" : "hidden"}
                            >
                                <motion.h3
                                    variants={fadeInUpVariants}
                                    className="text-lg sm:text-xl font-semibold mb-4 text-gray-200"
                                >
                                    Tech Stack
                                </motion.h3>

                                <motion.div
                                    className="flex flex-wrap gap-3 sm:gap-5 mb-8"
                                    variants={staggerContainerVariants}
                                >
                                    {technologies.map((tech, index) => (
                                        <motion.div
                                            key={index}
                                            className="flex flex-col items-center"
                                            variants={techItemVariants}
                                            whileHover={{ y: -5, scale: 1.1 }}
                                            transition={{ type: "spring", stiffness: 400 }}
                                        >
                                            <i className={`${tech.icon} text-2xl sm:text-3xl mb-2`}></i>
                                            <span className="text-xs text-gray-400">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        </div>
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