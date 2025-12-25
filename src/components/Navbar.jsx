import React, { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 glass px-6 py-4">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-violet-light font-sans tracking-tighter">
                    R<span className="text-violet-neon">.</span>K
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center">
                    {["About", "Experience", "Skills", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-300 hover:text-violet-neon transition-colors duration-300 text-sm font-medium"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 rounded-full bg-violet-neon/20 hover:bg-violet-neon/40 text-violet-light border border-violet-neon/50 transition-all">
                        Hire Me
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full glass-strong py-4 px-6 flex flex-col space-y-4">
                    {["About", "Experience", "Skills", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-gray-200 text-lg hover:text-violet-neon transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}
        </nav>
    );
};
