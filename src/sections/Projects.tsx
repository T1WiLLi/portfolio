import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

function Projects() {
    type Project = {
        id: number;
        title: string;
        subtitle: string;
        description: string;
        extendedDescription: string;
        image: string;
        techStack: string[];
        githubLink: string;
        color: string;
        screenshots: string[];
        features: string[];
    };

    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [expandedImage, setExpandedImage] = useState<string | null>(null);

    const [projects] = useState<Project[]>([
        {
            id: 1,
            title: "Jolt",
            subtitle: "Framework de développement web moderne.",
            description: "Jolt est un framework Java léger conçu pour simplifier la création d'API REST, avec injection de dépendances, routage avancé, filtres personnalisables et sécurité intégrée pour bâtir des applications performantes et modulaires.",
            extendedDescription: "Jolt a été conçu comme une alternative légère aux frameworks Spring et Jakarta EE, se concentrant sur la simplicité tout en offrant des fonctionnalités puissantes. Il utilise un système d'annotations pour minimiser la configuration et permet aux développeurs de créer rapidement des API REST avec une syntaxe intuitive. Jolt prend également en charge GraphQL nativement, offrant une flexibilité maximale pour les clients qui consomment l'API.",
            image: "/portfolio/images/jolt.png",
            techStack: ["Java", "Framework", "API REST", "GraphQL"],
            githubLink: "https://github.com/T1WiLLi/Jolt/",
            color: "from-blue-500 to-indigo-600",
            screenshots: [
                "/portfolio/images/jolt_1.png",
                "/portfolio/images/jolt_2.png"
            ],
            features: [
                "Injection de dépendances légère",
                "Routage automatique basé sur les annotations",
                "Support complet pour REST et GraphQL",
                "Sécurité intégrée et personnalisable",
                "Configuration minimale requise"
            ]
        },
        {
            id: 2,
            title: "PPS",
            subtitle: "Jeu multijoueur 2D en Java.",
            description: "PewPewSmash (PPS) est un jeu Java 2D multijoueur en temps réel, combinant génération procédurale de mondes et système de combat varié, basé sur Kryonet pour un réseau fluide et un hébergement de serveur simplifié.",
            extendedDescription: "PewPewSmash est né de ma passion pour le développement de jeux et les expériences multijoueur. Le jeu utilise une architecture client-serveur avec synchronisation d'état optimisée pour minimiser la latence. Les mondes générés procéduralement garantissent que chaque partie est unique, avec différents obstacles, ressources et zones de combat. Le système de combat permet aux joueurs de collecter différentes armes, chacune avec ses propres mécaniques et effets spéciaux.",
            image: "/portfolio/images/pps.png",
            techStack: ["Java", "Multijoueur en ligne", "Game Dev", "Graphiques 2D"],
            githubLink: "https://github.com/T1WiLLi/PPS/",
            color: "from-emerald-500 to-teal-700",
            screenshots: [
                "/portfolio/images/pps_1.png",
                "/portfolio/images/pps_2.png"
            ],
            features: [
                "Multijoueur en temps réel jusqu'à 16 joueurs",
                "Génération procédurale de niveaux",
                "Système de combat dynamique avec différentes armes",
                "Effets visuels et sonores immersifs",
                "Mode spectateur et tableau des scores"
            ]
        },
        {
            id: 3,
            title: "Gestionnaire de mots de passe",
            subtitle: "Application pour la gestion des mots de passe.",
            description: "Gestionnaire de mots de passe axé cybersécurité : chiffrement solide (AES-256), prise en charge de la triade CIA (confidentialité, intégrité, disponibilité) et authentification multifactorielle (TOTP, email, SMS) pour protéger vos données sensibles.",
            extendedDescription: "Ce gestionnaire de mots de passe a été développé avec la sécurité comme priorité absolue. Chaque mot de passe est chiffré individuellement avec AES-256 avant d'être stocké dans la base de données. L'application utilise un système de dérivation de clé basé sur PBKDF2 avec un grand nombre d'itérations pour protéger la clé maître. L'authentification multifactorielle offre une couche de protection supplémentaire, avec support pour TOTP, codes par email et SMS. L'application inclut également un générateur de mots de passe avancé et un système d'audit pour détecter les mots de passe faibles ou réutilisés.",
            image: "/portfolio/images/pm.png",
            techStack: ["PHP", "Zephyrus", "Sécurité", "Chiffrement", "Web"],
            githubLink: "https://github.com/T1WiLLi/Password-Manager/",
            color: "from-purple-500 to-violet-700",
            screenshots: [
                "/portfolio/images/pm_1.png",
                "/portfolio/images/pm_2.png"
            ],
            features: [
                "Chiffrement AES-256 pour tous les mots de passe",
                "Authentification multifactorielle (TOTP, email, SMS)",
                "Générateur de mots de passe sécurisés",
                "Audit automatique des mots de passe faibles",
                "Synchronisation multi-appareils sécurisée"
            ]
        },
        {
            id: 4,
            title: "Gitnar",
            subtitle: "Outil de synchronisation des issues SonarCloud vers GitHub.",
            description: "Gitnar est un outil de synchronisation qui permet de transférer les issues de SonarCloud vers GitHub, en utilisant l'API de GitHub pour créer des issues correspondantes et en synchronisant les états des issues entre les deux plateformes. Et plus encore !",
            extendedDescription: "Gitnar propose des fonctionnalités avancées pour la synchronisation des issues entre SonarCloud et GitHub. Utilisant la connexion OAuth2 pour se connecter à github et un token sécuritaire de SonarCloud, l'outil permet d'exporter les issues de Sonarcloud vers Github. Les issues sont créées avec les mêmes états et les mêmes commentaires, et les changements sont synchronisés en temps réel. L'outil est également capable de gérer les issues déjà existantes sur GitHub, en les mettant à jour en fonction des changements sur SonarCloud. Un système simplifié de Workflows permet de configurer les synchronisations en fonction des besoins spécifiques de votre projet.",
            image: "/portfolio/images/gitnar.png",
            techStack: ["Dart", "Flutter", "GitHub", "SonarCloud", "Desktop", "OAuth2"],
            githubLink: "https://github.com/T1WiLLi/Gitnar/",
            color: "from-blue-500 to-indigo-700",
            screenshots: [
                "/portfolio/images/gitnar_1.png",
                "/portfolio/images/gitnar_2.png"
            ],
            features: [
                "Exportation des issues de SonarCloud vers GitHub",
                "Création automatiques des issues sur GitHub",
                "Centre d'analyse avancé combinant les données de SonarCloud et GitHub",
                "Prise en main simplifiée convenant à une petite équipe ou un projet personnel",
                "Système de Workflows pour configurer les synchronisations sans effort"
            ]
        }
    ]);

    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.2 });

    const projectRefs = projects.map(() => useRef(null));
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

    const detailsVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 25
            }
        },
        exit: {
            opacity: 0,
            scale: 0.95,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
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

                {selectedProject ? (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                        <div className="md:col-span-1 flex flex-col gap-6">
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    ref={projectRefs[index]}
                                    className={`${selectedProject && selectedProject.id !== project.id ? "opacity-50" : "opacity-100"}`}
                                >
                                    <motion.div
                                        className="bg-gray-800 rounded-xl overflow-hidden border border-gray-600 shadow-lg flex flex-col h-full cursor-pointer"
                                        variants={projectCardVariants}
                                        initial="hidden"
                                        animate={projectInView[index] ? "visible" : "hidden"}
                                        onClick={() => setSelectedProject(project)}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div className="w-full h-36 relative">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`}></div>
                                        </div>

                                        <div className="p-4 flex flex-col flex-grow">
                                            <h3 className={`text-lg font-bold mb-1 text-white bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-200 text-sm mb-1">{project.subtitle}</p>
                                            <p className="text-gray-300 text-xs mb-3 line-clamp-2">{project.description}</p>

                                            <div className="flex flex-wrap gap-1 mb-3 mt-auto">
                                                {project.techStack.slice(0, 3).map((tech, techIndex) => (
                                                    <motion.span
                                                        key={`${project.id}-${techIndex}`}
                                                        className={`bg-gradient-to-r ${project.color} bg-opacity-30 px-2 py-1 rounded-full text-xs font-medium text-white`}
                                                        variants={techBadgeVariants}
                                                        custom={techIndex}
                                                        initial="hidden"
                                                        animate={projectInView[index] ? "visible" : "hidden"}
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                                {project.techStack.length > 3 && (
                                                    <span className="text-xs text-gray-400">+{project.techStack.length - 3}</span>
                                                )}
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedProject.id}
                                className="md:col-span-2 bg-gray-800 rounded-xl border border-gray-600 shadow-lg overflow-hidden h-full"
                                variants={detailsVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                            >
                                <div className="relative">
                                    <button
                                        className="absolute top-4 right-4 bg-gray-800/70 hover:bg-gray-700 p-2 rounded-full text-white z-10"
                                        onClick={() => setSelectedProject(null)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>

                                    <div className="h-64 md:h-80 relative">
                                        <img
                                            src={selectedProject.image}
                                            alt={selectedProject.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} opacity-30`}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent"></div>
                                    </div>
                                </div>

                                <div className="p-6 md:p-8">
                                    <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-4 bg-gradient-to-r ${selectedProject.color} text-white`}>
                                        {selectedProject.title}
                                    </div>

                                    <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                                        {selectedProject.subtitle}
                                    </h2>

                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {selectedProject.techStack.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-gray-700 text-gray-200 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-3 text-gray-100">Description</h3>
                                        <p className="text-gray-300 mb-4">{selectedProject.description}</p>
                                        <p className="text-gray-300">{selectedProject.extendedDescription}</p>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4 text-gray-100">Fonctionnalités</h3>
                                        <ul className="space-y-2">
                                            {selectedProject.features.map((feature, index) => (
                                                <li key={index} className="flex items-start gap-2 text-gray-300">
                                                    <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                                                    </svg>
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mb-8">
                                        <h3 className="text-xl font-semibold mb-4 text-gray-100">Captures d'écran</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            {selectedProject.screenshots.map((screenshot, idx) => (
                                                <div
                                                    key={idx}
                                                    className="rounded-lg overflow-hidden border border-gray-600 cursor-pointer transition-all hover:border-blue-400"
                                                    onClick={() => setExpandedImage(screenshot)}
                                                >
                                                    <img
                                                        src={screenshot}
                                                        alt={`${selectedProject.title} screenshot ${idx + 1}`}
                                                        className="w-full h-48 md:h-64 object-cover object-center"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-4">
                                        <a
                                            href={selectedProject.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`px-6 py-3 bg-gradient-to-r ${selectedProject.color} rounded-lg text-white font-medium flex items-center gap-2`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            Voir sur Github
                                        </a>

                                        <button
                                            style={{ cursor: "pointer" }}
                                            onClick={() => setSelectedProject(null)}
                                            className="px-6 py-3 border border-gray-500 hover:border-gray-300 bg-gray-700 hover:bg-gray-600 rounded-lg text-white font-medium flex items-center gap-2"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                            </svg>
                                            Retour aux projets
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                ) : (
                    // Grid layout when no project is selected
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
                        {projects.map((project, index) => (
                            <div
                                key={project.id}
                                ref={projectRefs[index]}
                            >
                                <motion.div
                                    className="bg-gray-800 rounded-xl overflow-hidden border border-gray-600 shadow-lg flex flex-col h-full cursor-pointer"
                                    variants={projectCardVariants}
                                    initial="hidden"
                                    animate={projectInView[index] ? "visible" : "hidden"}
                                    onClick={() => setSelectedProject(project)}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <div className="w-full h-52 relative">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-center"
                                        />
                                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-30`}></div>
                                    </div>

                                    <div className="p-5 sm:p-6 flex flex-col flex-grow">
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

                                        <div className="flex gap-3 mt-auto">
                                            <button
                                                style={{ cursor: "pointer" }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedProject(project);
                                                }}
                                                className={`px-4 py-2 bg-gradient-to-r ${project.color} rounded-lg text-white font-medium text-sm sm:text-base flex items-center gap-2`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                                                </svg>
                                                Voir plus
                                            </button>
                                            <a
                                                href={project.githubLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className={`px-4 py-2 border border-gray-500 hover:border-gray-300 bg-gray-800 hover:bg-gray-700 rounded-lg text-white font-medium text-sm sm:text-base flex items-center gap-2`}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 sm:h-5 w-4 sm:w-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Github
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                )}

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
                <AnimatePresence>
                    {expandedImage && (
                        <motion.div
                            className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setExpandedImage(null)}
                        >
                            <div className="relative bg-transparent" style={{ maxWidth: "80vw", maxHeight: "80vh", width: "100%" }}>
                                <motion.img
                                    src={expandedImage}
                                    alt="Preview"
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                    className="block mx-auto max-w-full max-h-[80vh] rounded-lg shadow-xl"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Projects;