import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section id="contact" className="section container" style={{ textAlign: 'center', padding: '10rem 0' }} ref={ref}>
            <motion.p
                style={{ color: 'var(--primary)', marginBottom: '1rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                03. What's Next?
            </motion.p>

            <motion.h2
                style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '2rem' }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                Get In Touch
            </motion.h2>

            <motion.p
                style={{
                    color: 'var(--text-muted)',
                    maxWidth: '600px',
                    margin: '0 auto 3rem auto',
                    fontSize: '1.1rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </motion.p>

            <motion.a
                href="mailto:rajak@example.com"
                className="glass"
                style={{
                    padding: '1.2rem 3rem',
                    color: 'var(--primary)',
                    borderRadius: '4px',
                    border: '1px solid var(--primary)',
                    fontWeight: '600',
                    display: 'inline-block',
                    fontSize: '1.1rem'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(139, 92, 246, 0.2)' }}
                whileTap={{ scale: 0.95 }}
            >
                Say Hello
            </motion.a>

            <footer style={{ marginTop: '5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                <p>Built with React, Vite & Three.js.</p>
            </footer>
        </section>
    );
};

export default Contact;
