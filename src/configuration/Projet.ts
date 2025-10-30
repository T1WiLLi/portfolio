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
        description: "Jolt est un framework Java léger conçu pour simplifier la création d'API REST...",
        extendedDescription: "Jolt a été conçu comme une alternative légère...",
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
        description: "PewPewSmash (PPS) est un jeu Java 2D multijoueur...",
        extendedDescription: "PewPewSmash est né de ma passion pour le développement de jeux...",
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
        description: "Gestionnaire de mots de passe axé cybersécurité...",
        extendedDescription: "Ce gestionnaire de mots de passe a été développé...",
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
        description: "Gitnar est un outil de synchronisation...",
        extendedDescription: "Gitnar propose des fonctionnalités avancées...",
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
            "Centre d'analyse avancé combinant les données",
            "Prise en main simplifiée pour petites équipes",
            "Système de Workflows pour les synchronisations"
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
