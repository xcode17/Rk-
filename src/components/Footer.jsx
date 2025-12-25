import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="bg-violet-dark py-8 px-6 border-t border-white/10 relative z-10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-gray-400 text-sm">
                    © {new Date().getFullYear()} Raja Kuberan. All rights reserved.
                </p>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-violet-neon transition-colors">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://github.com/xcode17" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-neon transition-colors">
                        <Github size={20} />
                    </a>
                    <a href="mailto:RajaKuberan.p@gmail.com" className="text-gray-400 hover:text-violet-neon transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
