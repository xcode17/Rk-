import React from "react";
import { motion } from "framer-motion";

export const About = () => {
    return (
        <section id="about" className="py-20 px-6 relative z-10">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-violet-light to-violet-neon"
                >
                    About Me
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border-l-4 border-violet-neon"
                    >
                        <p className="text-lg text-gray-200 leading-relaxed mb-6">
                            I am a passionate <span className="text-violet-neon font-bold">Data Analyst</span> and <span className="text-violet-neon font-bold">eCommerce Team Lead</span> based in India.
                            My journey involves analyzing complex datasets to drive business growth and leading teams to achieve operational excellence.
                        </p>
                        <p className="text-lg text-gray-200 leading-relaxed">
                            I combine analytical skills with leadership experience to deliver results. I'm constantly learning new technologies to bridge the gap between data and actionable insights.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl flex flex-col justify-center items-center text-center"
                    >
                        <div className="grid grid-cols-2 gap-8 w-full">
                            <div>
                                <h3 className="text-5xl font-bold text-violet-neon mb-2">2+</h3>
                                <p className="text-sm text-gray-300 uppercase tracking-wide">Years Exp.</p>
                            </div>
                            <div>
                                <h3 className="text-5xl font-bold text-violet-neon mb-2">10+</h3>
                                <p className="text-sm text-gray-300 uppercase tracking-wide">Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
