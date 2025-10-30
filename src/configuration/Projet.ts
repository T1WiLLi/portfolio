// src/config/Projects.ts

export type Project = {
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

export const projects: Project[] = [
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
    },
    {
        id: 5,
        title: "X-Change",
        subtitle: "Exchange de crypto-monnaies basé sur les testnets Bitcoin & Ethereum.",
        description: "Plateforme d'exchange permettant de gérer des portefeuilles BTC Testnet et ETH Sepolia, effectuer des transactions, consulter ses balances et historique, avec une interface moderne et sécurisée.",
        extendedDescription: "X-Change est une plateforme complète d'exchange crypto basée exclusivement sur des réseaux testnet. Elle permet la génération de portefeuilles Bitcoin et Ethereum (mnemonic, clés et adresses HD), l'envoi et la réception de transactions, le suivi du solde en USD en temps réel, l'affichage de l'historique des opérations, ainsi que la gestion des comptes avec authentification sécurisée. L'application intègre un backend Node.js / TypeScript, Redis pour le caching, JWT, ainsi qu'un frontend Vue 3 + Tailwind. Elle vise à simuler une expérience d'exchange professionnelle tout en restant 100% sandbox.",
        image: "/portfolio/images/xchange.png",
        techStack: [
            "Node.js",
            "Vue 3",
            "TypeScript",
            "TailwindCSS",
            "OAuth2",
            "Crypto"
        ],
        githubLink: "https://github.com/T1WiLLi/a2025-tp1-exchange-T1WiLLi",
        color: "from-cyan-900 to-cyan-600",
        screenshots: [
            "/portfolio/images/xchange_1.png",
            "/portfolio/images/xchange_2.png",
            "/portfolio/images/xchange_3.png",
            "/portfolio/images/xchange_4.png"
        ],
        features: [
            "Génération et gestion de portefeuilles HD BTC & ETH",
            "Transactions crypto sur Bitcoin Testnet & Ethereum Sepolia",
            "Suivi des soldes + conversion USD en temps réel",
            "Historique des opérations",
            "Authentification JWT + refresh tokens",
            "UI moderne Vue 3 + Tailwind",
            "Caching intelligent via Redis",
            "Architecture sécurisée prête pour la production"
        ]
    }
];
