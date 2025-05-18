import { useState, useEffect } from 'react';

const technologies = [
    {
        name: 'Java',
        icon: 'devicon-java-plain colored',
        level: 'Avancé',
        percentage: 90,
        category: 'Langages',
        description: 'Développement backend et applications d\'entreprise'
    },
    {
        name: 'C#',
        icon: 'devicon-csharp-plain colored',
        level: 'Intermédiaire',
        percentage: 70,
        category: 'Langages',
        description: 'Applications desktop et services Microsoft'
    },
    {
        name: 'TypeScript',
        icon: 'devicon-typescript-plain colored',
        level: 'Intermédiaire',
        percentage: 75,
        category: 'Langages',
        description: 'Développement web moderne et typé'
    },
    {
        name: 'JavaScript',
        icon: 'devicon-javascript-plain colored',
        level: 'Intermédiaire',
        percentage: 70,
        category: 'Langages',
        description: 'Frontend interactif et dynamique'
    },
    {
        name: 'PHP',
        icon: 'devicon-php-plain colored',
        level: 'Intermédiaire',
        percentage: 74,
        category: 'Langages',
        description: 'Applications web et CMS'
    },
    {
        name: 'C',
        icon: 'devicon-c-plain colored',
        level: 'Débutant',
        percentage: 50,
        category: 'Langages',
        description: 'Programmation bas niveau et systèmes embarqués'
    },
    {
        name: 'Swift',
        icon: 'devicon-swift-plain colored',
        level: 'Intermédiaire',
        percentage: 60,
        category: 'Langages',
        description: 'Développement iOS et applications Apple'
    },
    {
        name: 'HTML5',
        icon: 'devicon-html5-plain colored',
        level: 'Avancé',
        percentage: 90,
        category: 'Frontend',
        description: 'Structure et sémantique des pages web'
    },
    {
        name: 'CSS3',
        icon: 'devicon-css3-plain colored',
        level: 'Avancé',
        percentage: 90,
        category: 'Frontend',
        description: 'Styles et mise en page responsive'
    },
    {
        name: 'Bootstrap',
        icon: 'devicon-bootstrap-plain colored',
        level: 'Intermédiaire',
        percentage: 72,
        category: 'Frontend',
        description: 'Framework CSS pour interfaces rapides'
    },
    {
        name: 'Spring',
        icon: 'devicon-spring-plain colored',
        level: 'Intermédiaire',
        percentage: 70,
        category: 'Frameworks',
        description: 'Applications Java robustes et scalables'
    },
    {
        name: 'React',
        icon: 'devicon-react-original colored',
        level: 'Intermédiaire',
        percentage: 65,
        category: 'Frameworks',
        description: 'UI dynamiques et components réutilisables'
    },
    {
        name: '.NET',
        icon: 'devicon-dotnetcore-plain colored',
        level: 'Intermédiaire',
        percentage: 60,
        category: 'Frameworks',
        description: 'Écosystème Microsoft pour le développement'
    },
    {
        name: 'Node.js',
        icon: 'devicon-nodejs-plain colored',
        level: 'Débutant',
        percentage: 15,
        category: 'Frameworks',
        description: 'Backend JavaScript et services API'
    },
    {
        name: 'PostgreSQL',
        icon: 'devicon-postgresql-plain colored',
        level: 'Intermédiaire',
        percentage: 68,
        category: 'Bases de données',
        description: 'BD relationnelle robuste et performante'
    },
    {
        name: 'VS Code',
        icon: 'devicon-vscode-plain colored',
        level: 'Avancé',
        percentage: 90,
        category: 'Outils',
        description: 'Mon éditeur de prédilection'
    },
    {
        name: 'Git',
        icon: 'devicon-git-plain colored',
        level: 'Avancé',
        percentage: 80,
        category: 'Outils',
        description: 'Versioning et collaboration'
    },
    {
        name: 'Arduino',
        icon: 'devicon-arduino-plain colored',
        level: 'Débutant',
        percentage: 40,
        category: 'Outils',
        description: 'Projets électroniques et IoT'
    },
    {
        name: 'Linux',
        icon: 'devicon-linux-plain colored',
        level: 'Intermédiaire',
        percentage: 71,
        category: 'Déploiement',
        description: 'Hébergement & sécurisation de serveurs'
    },
    {
        name: 'Docker',
        icon: 'devicon-docker-plain colored',
        level: 'Intermédiaire',
        percentage: 75,
        category: 'Déploiement',
        description: 'Conteneurisation et déploiement simplifié'
    },
];

// Groupes par catégorie pour l'affichage
const categories = [
    "Langages",
    "Frontend",
    "Frameworks",
    "Bases de données",
    "Outils",
    "Déploiement"
];

type Tech = {
    name: string;
    icon: string;
    level: string;
    percentage: number;
    category: string;
    description: string;
};

interface TechCardProps {
    tech: Tech;
    delay: number;
}

const TechCard: React.FC<TechCardProps> = ({ tech, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    const getLevelColor = (level: string) => {
        if (level === 'Expert') return 'bg-purple-600';
        if (level === 'Avancé') return 'bg-green-500';
        if (level === 'Intermédiaire') return 'bg-blue-500';
        return 'bg-yellow-500';
    };

    return (
        <div
            className={`transform transition-all duration-500 rounded-lg bg-gray-800 p-4 flex flex-col items-center justify-center shadow-lg hover:shadow-2xl hover:scale-102 cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            onClick={() => setIsFlipped(!isFlipped)}
        >
            <div className={`w-full h-full transition-all duration-500 ${isFlipped ? 'hidden' : 'block'}`}>
                <div className="p-3 rounded-full bg-gray-700 mb-3 mx-auto w-16 h-16 flex items-center justify-center">
                    <i className={`${tech.icon} text-4xl`} />
                </div>
                <h3 className="font-bold text-white text-lg text-center">{tech.name}</h3>

                <div className="mt-3 w-full bg-gray-700 rounded-full h-3">
                    <div
                        className={`h-3 rounded-full ${getLevelColor(tech.level)}`}
                        style={{ width: `${tech.percentage}%` }}
                    />
                </div>

                <div className="flex justify-between text-xs text-gray-400 mt-1">
                    <span>0%</span>
                    <span>{tech.percentage}%</span>
                </div>

                <div className={`mt-2 px-3 py-1 text-xs rounded-full ${getLevelColor(tech.level)} text-white text-center`}>
                    {tech.level}
                </div>
            </div>

            <div className={`w-full h-full flex flex-col justify-center ${isFlipped ? 'block' : 'hidden'}`}>
                <p className="text-gray-300 text-sm text-center">{tech.description}</p>
                <div className="mt-3 text-center text-xs text-purple-400">
                    (Cliquez pour retourner)
                </div>
            </div>
        </div>
    );
};

const Stack = () => {
    const [filter, setFilter] = useState('Tout');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredTechs = technologies.filter(tech => {
        if (filter !== 'Tout' && tech.category !== filter) return false;

        if (searchQuery && !tech.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;

        return true;
    });

    return (
        <section id="tech-stack" className="py-20 bg-gradient-to-b from-gray-900 to-black">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-4xl font-bold text-white mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 inline-block">
                        Mon Arsenal Technique
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Voici les technologies que j'utilise pour transformer des idées en solutions numériques performantes.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex flex-wrap gap-2 justify-center">
                        <button
                            onClick={() => setFilter('Tout')}
                            className={`px-4 py-2 rounded-full text-sm transition-all cursor-pointer ${filter === 'Tout'
                                ? 'bg-purple-600 text-white'
                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                }`}
                        >
                            Tout
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-full text-sm transition-all cursor-pointer ${filter === category
                                    ? 'bg-purple-600 text-white'
                                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="relative w-full md:w-64">
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            className="w-full bg-gray-800 text-white rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <div className="absolute left-3 top-2.5 text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {filteredTechs.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {filteredTechs.map((tech, index) => (
                            <TechCard key={tech.name} tech={tech} delay={100 * index} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-12 text-gray-400">
                        Aucune technologie ne correspond à votre recherche.
                    </div>
                )}

                <div className="mt-16 text-center">
                    <p className="text-gray-400 text-sm">
                        Toujours en apprentissage et à l'affût des nouvelles technologies 🚀
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Stack;