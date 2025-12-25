import React from "react";
import { motion } from "framer-motion";
import { Database, BarChart, ShoppingBag, Code, FileSpreadsheet, TrendingUp } from "lucide-react";

const skills = [
    { name: "SQL", icon: Database, color: "text-blue-400" },
    { name: "Python", icon: Code, color: "text-yellow-400" },
    { name: "Power BI", icon: BarChart, color: "text-yellow-500" },
    { name: "Excel", icon: FileSpreadsheet, color: "text-green-500" },
    { name: "eCommerce", icon: ShoppingBag, color: "text-purple-400" },
    { name: "Data Viz", icon: TrendingUp, color: "text-red-400" },
];

export const Skills = () => {
    return (
        <section id="skills" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet-neon"
                >
                    Skills
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                            whileTap={{ scale: 0.95 }}
                            className="glass p-6 rounded-xl flex flex-col items-center justify-center gap-4 cursor-pointer transition-colors"
                        >
                            <skill.icon size={40} className={skill.color} />
                            <p className="font-medium text-gray-200">{skill.name}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
