import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useState } from "react";

function Projects() {
    const [projects] = useState([
        {
            id: 1,
            title: "Jolt",
            subtitle: "Framework de développement web moderne.",
            description: "Jolt est un framework Java léger conçu pour simplifier la création d'API REST, avec injection de dépendances, routage avancé, filtres personnalisables et sécurité intégrée pour bâtir des applications performantes et modulaires.",
            image: "/images/jolt.png",
            techStack: ["Java", "Framework", "API REST", "GraphQL"],
            link: "https://github.com/T1WiLLi/Jolt/",
            color: "from-blue-500 to-indigo-600"
        },
        {
            id: 2,
            title: "PPS",
            subtitle: "Jeu multijoueur 2D en Java.",
            description: "PewPewSmash (PPS) est un jeu Java 2D multijoueur en temps réel, combinant génération procédurale de mondes et système de combat varié, basé sur Kryonet pour un réseau fluide et un hébergement de serveur simplifié.",
            image: "/images/pps.png",
            techStack: ["Java", "Multijoueur en ligne", "Game Dev", "Graphiques 2D"],
            link: "https://github.com/T1WiLLi/PPS/",
            color: "from-emerald-500 to-teal-700"
        },
        {
            id: 3,
            title: "Gestionnaire de mots de passe",
            subtitle: "Application pour la gestion des mots de passe.",
            description: "Gestionnaire de mots de passe axé cybersécurité : chiffrement solide (AES-256), prise en charge de la triade CIA (confidentialité, intégrité, disponibilité) et authentification multifactorielle (TOTP, email, SMS) pour protéger vos données sensibles.",
            image: "/images/pm.png",
            techStack: ["PHP", "Zephyrus", "Sécurité", "Chiffrement", "Web"],
            link: "https://github.com/T1WiLLi/Password-Manager/",
            color: "from-purple-500 to-violet-700"
        }
    ]);

    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

    const projectRefs = projects.map(() => useRef<HTMLDivElement | null>(null));
    const projectInView = projectRefs.map(ref => useInView(ref, { once: true, amount: 0.2 }));

    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const projectCardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.2, 0.65, 0.3, 0.9]
            }
        }
    };

    const techBadgeVariants = {
        hidden: { opacity: 0 },
        visible: (index: number) => ({
            opacity: 1,
            transition: {
                delay: 0.1 * index,
                duration: 0.4
            }
        })
    };

    return (
        <div className="bg-gray-900 min-h-screen text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-1/3 left-1/5 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-blue-500 opacity-5 blur-3xl"
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 25,
                        ease: "easeInOut"
                    }}
                />
                <motion.div
                    className="absolute bottom-1/4 right-1/5 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-purple-600 opacity-5 blur-3xl"
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 20, 0]
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 30,
                        ease: "easeInOut"
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div ref={headerRef} className="text-center mb-12 sm:mb-16">
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                        variants={headerVariants}
                        initial="hidden"
                        animate={isHeaderInView ? "visible" : "hidden"}
                    >
                        Mes Projets
                    </motion.h1>
                    <motion.p
                        className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto"
                        variants={headerVariants}
                        initial="hidden"
                        animate={isHeaderInView ? "visible" : "hidden"}
                        transition={{ delay: 0.2 }}
                    >
                        Une sélection de mes réalisations personnelles et professionnelles,
                        démontrant ma passion pour le développement et l'innovation.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 sm:gap-8 mb-16 sm:mb-20">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={projectRefs[index]}
                            className="w-full h-full"
                        >
                            <motion.div
                                className="bg-gray-800 rounded-xl overflow-hidden border border-gray-600 shadow-lg flex flex-col h-full"
                                variants={projectCardVariants}
                                initial="hidden"
                                animate={projectInView[index] ? "visible" : "hidden"}
                            >
                                <div className="w-full h-52 sm:h-56 relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`}></div>
                                </div>

                                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                                    <h3 className={`text-xl sm:text-2xl font-bold mb-2 text-white bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-200 text-sm sm:text-base mb-2">{project.subtitle}</p>
                                    <p className="text-gray-300 text-sm sm:text-base mb-4 line-clamp-3">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.techStack.map((tech, techIndex) => (
                                            <motion.span
                                                key={`${project.id}-${techIndex}`}
                                                className={`bg-gradient-to-r ${project.color} bg-opacity-30 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-white`}
                                                variants={techBadgeVariants}
                                                custom={techIndex}
                                                initial="hidden"
                                                animate={projectInView[index] ? "visible" : "hidden"}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>

                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`self-start px-4 sm:px-6 py-2 bg-gradient-to-r ${project.color} rounded-lg text-white font-medium text-sm sm:text-base flex items-center gap-2 mt-auto`}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                        Voir le projet
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <motion.div
                    className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-blue-700/30 text-center relative overflow-hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1, transition: { duration: 0.7 } }}
                    viewport={{ once: true, amount: 0.5 }}
                >
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>

                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 relative z-10 text-white">Vous avez un projet en tête ?</h3>
                    <p className="text-gray-200 text-sm sm:text-base max-w-2xl mx-auto mb-6 relative z-10">
                        Je suis toujours à la recherche de nouveaux défis et opportunités de collaboration.
                        N'hésitez pas à me contacter pour discuter de vos idées.
                    </p>
                    <button
                        className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-base sm:text-lg flex items-center gap-2 mx-auto text-white"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                        Me Contacter
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default Projects;