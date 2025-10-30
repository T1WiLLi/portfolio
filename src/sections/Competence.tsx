import { motion } from "framer-motion";

const skills = [
    { name: "C# / .NET", icon: "devicon-csharp-plain colored" },
    { name: "ASP.NET", icon: "devicon-dotnetcore-plain" },
    { name: "Java", icon: "devicon-java-plain colored" },
    { name: "PHP", icon: "devicon-php-plain colored" },
    { name: "C", icon: "devicon-c-plain colored" },
    { name: "SQL", icon: "devicon-mysql-plain colored" },
    { name: "MSSQL", icon: "devicon-microsoftsqlserver-plain colored" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },

    { name: "HTML", icon: "devicon-html5-plain colored" },
    { name: "CSS", icon: "devicon-css3-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "TypeScript", icon: "devicon-typescript-plain colored" },
    { name: "Vue 3", icon: "devicon-vuejs-plain colored" },
    { name: "TailwindCSS", icon: "devicon-tailwindcss-original colored" },

    { name: "Azure DevOps", icon: "devicon-azure-plain colored" },
    { name: "Docker", icon: "devicon-docker-plain colored" },
    { name: "Linux", icon: "devicon-linux-plain colored" },

    { name: "GitHub", icon: "devicon-github-original" },
    { name: "Git", icon: "devicon-git-plain colored" },
    { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
    { name: "VS Code", icon: "devicon-vscode-plain colored" },
];

export default function Competence() {
    return (
        <div className="bg-gray-900 min-h-screen text-white py-8 sm:py-12 px-4 sm:px-6 md:px-8">
            <motion.h1
                className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Compétences
            </motion.h1>

            <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {skills.map((skill, idx) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.03 }}
                        className="flex items-center gap-4 bg-gray-900/60 border border-gray-800 hover:border-purple-500 rounded-xl p-4 shadow-lg hover:shadow-purple-600/20 backdrop-blur-sm transition-all hover:-translate-y-1 cursor-default"
                    >
                        <i className={`${skill.icon} text-3xl`}></i>
                        <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
