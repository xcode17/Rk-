import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        'Data Analysis', 'Team Leadership',
        'eCommerce Operations', 'Management',
        'Microsoft Excel', 'SQL'
    ];

    return (
        <section id="about" className="section container" ref={ref}>
            <motion.h2
                style={{ fontSize: '2rem', marginBottom: '2rem', display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--primary)', marginRight: '1rem' }}>01.</span>
                About Me
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: '1', marginLeft: '1rem', maxWidth: '300px' }}></span>
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        Hello! My name is Rajakuberan P. I am an experienced Team Lead with a history of working in the retail and entertainment industries.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                        I have served at **Reliance Jiomart** and **Inox Leisure**, gaining strong skills in operations and leadership. Currently, I am expanding my skillset by studying Data Analysis at **People Click Learning**, with expected completion in Jan 2026.
                    </p>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                        Here are a few skills I've been mastering:
                    </p>

                    <ul style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, minmax(140px, 200px))',
                        gap: '10px 0',
                        listStyle: 'none'
                    }}>
                        {skills.map((skill, index) => (
                            <motion.li
                                key={skill}
                                initial={{ opacity: 0, x: -10 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.3, delay: 0.3 + (index * 0.05) }}
                                style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <span style={{ color: 'var(--primary)', marginRight: '10px' }}>▹</span>
                                {skill}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    style={{ position: 'relative' }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    {/* Education Card */}
                    <motion.div
                        className="glass-card"
                        style={{ padding: '2rem', marginTop: '2rem' }}
                        whileHover={{ y: -5, borderColor: 'var(--primary)' }}
                    >
                        <h3 style={{ color: 'var(--text-main)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Education</h3>
                        <h4 style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Data Analyst</h4>
                        <p style={{ color: 'var(--text-muted)' }}>People Click Learning</p>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>Completing Jan 2026</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
