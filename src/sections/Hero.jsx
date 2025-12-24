import React from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/profile.png';

const Hero = () => {
    return (
        <section id="home" className="section container">
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4rem',
                flexWrap: 'wrap-reverse'
            }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{
                            color: 'var(--primary)',
                            fontSize: '1.2rem',
                            marginBottom: '1rem',
                            fontWeight: '500'
                        }}
                    >
                        Hi, my name is
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            fontSize: 'clamp(3rem, 6vw, 5rem)',
                            lineHeight: '1.1',
                            marginBottom: '1rem'
                        }}
                    >
                        Rajakuberan P.
                    </motion.h1>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                            color: 'var(--text-muted)',
                            marginBottom: '2rem'
                        }}
                    >
                        <span className="gradient-text">Data Analyst & Team Lead</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            color: 'var(--text-muted)',
                            fontSize: '1.1rem',
                            maxWidth: '500px',
                            marginBottom: '3rem'
                        }}
                    >
                        I'm a Team Lead in eCommerce at Reliance Jiomart with a strong background in operations and a passion for data analysis. Currently upskilling as a Data Analyst.
                    </motion.p>

                    <motion.a
                        href="#contact"
                        className="glass"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            padding: '1rem 2rem',
                            color: 'var(--primary)',
                            borderRadius: '4px',
                            border: '1px solid var(--primary)',
                            fontWeight: '600',
                            background: 'rgba(139, 92, 246, 0.1)',
                            display: 'inline-block'
                        }}
                    >
                        Contact Me
                    </motion.a>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ flex: '0 0 300px', display: 'flex', justifyContent: 'center' }}
                >
                    <div className="glass-card" style={{
                        width: '280px',
                        height: '280px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '2px solid var(--primary)',
                        padding: '5px'
                    }}>
                        <img
                            src={profileImg}
                            alt="Rajakuberan P"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                borderRadius: '50%'
                            }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
