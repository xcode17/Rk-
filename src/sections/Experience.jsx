import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Briefcase } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "eCommerce Team Lead",
        company: "Company Name",
        period: "2023 - Present",
        description: "Leading a team of eCommerce specialists, optimizing product listings, and driving sales growth through data-driven strategies."
    },
    {
        id: 2,
        role: "Data Analyst",
        company: "Company Name",
        period: "2022 - 2023",
        description: "Analyzed business data to identify trends, created dashboards for stakeholders, and improved data quality processes."
    }
];

const ExperienceCard = ({ exp }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            className="glass rounded-xl overflow-hidden mb-6 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className="p-6 flex justify-between items-start">
                <div className="flex gap-4">
                    <div className="mt-1 p-2 bg-violet-neon/20 rounded-lg text-violet-neon">
                        <Briefcase size={24} />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                        <p className="text-violet-300">{exp.company}</p>
                        <p className="text-sm text-gray-400 mt-1">{exp.period}</p>
                    </div>
                </div>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown className="text-violet-400" />
                </motion.div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-0 border-t border-white/10"
                    >
                        <p className="text-gray-300 mt-4 leading-relaxed">
                            {exp.description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export const Experience = () => {
    return (
        <section id="experience" className="py-20 px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet-neon"
                >
                    Experience
                </motion.h2>

                <div className="relative border-l-2 border-violet-neon/30 ml-4 md:ml-8 pl-8 md:pl-12 py-4">
                    {experiences.map((exp) => (
                        <ExperienceCard key={exp.id} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
};
