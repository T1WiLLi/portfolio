export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-8 border-t-2 border-gray-700">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                    <h3 className="text-white text-xl font-bold mb-2">William Beaudin</h3>
                    <p className="text-sm">
                        Développeur full-stack passionné par le clean code et les architectures modulaires.
                    </p>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-2">Navigation</h4>
                    <ul className="space-y-1">
                        <li><a href="#about" className="hover:text-white cursor-pointer">À propos</a></li>
                        <li><a href="#projects" className="hover:text-white cursor-pointer">Projets</a></li>
                        <li><a href="#tech-details" className="hover:text-white cursor-pointer">Compétences</a></li>
                        <li><a href="#contact" className="hover:text-white cursor-pointer">Contact</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-semibold mb-2">Réseaux</h4>
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/T1WiLLi"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white cursor-pointer"
                        >
                            <i className="devicon-github-plain text-2xl"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/william-beaudin-7a6213252/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white cursor-pointer"
                        >
                            <i className="devicon-linkedin-plain colored text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center text-xs text-gray-600">
                © {new Date().getFullYear()} William Beaudin • Mentions légales • RGPD
            </div>
        </footer>
    );
}
