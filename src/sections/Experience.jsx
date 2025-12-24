import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const jobs = [
        {
            title: 'Team Lead - eCommerce',
            company: 'Reliance Jiomart Pvt Ltd',
            range: 'July 2023 - Present',
            description: [
                'Leading the eCommerce team to drive operational excellence and customer satisfaction.',
                'Managing daily operations, team performance, and workflow optimization.',
                'Analyzing data to improve processes and achieve business targets.'
            ]
        },
        {
            title: 'Operations Staff',
            company: 'Inox Leisure Pvt Ltd',
            range: 'Mar 2019 - July 2023',
            description: [
                'Ensured smooth daily operations and high-quality customer service standards.',
                'Collaborated with the team to handle logistics and operational challenges effectively.',
                'Maintained operational records and supported management in daily reporting.'
            ]
        }
    ];

    return (
        <section id="experience" className="section container" ref={ref}>
            <motion.h2
                style={{ fontSize: '2rem', marginBottom: '3rem', display: 'flex', alignItems: 'center' }}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5 }}
            >
                <span style={{ color: 'var(--primary)', marginRight: '1rem' }}>02.</span>
                Where I've Worked
                <span style={{ height: '1px', background: 'var(--glass-border)', flex: '1', marginLeft: '1rem', maxWidth: '300px' }}></span>
            </motion.h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {jobs.map((job, index) => (
                    <motion.div
                        key={index}
                        className="glass-card"
                        style={{ padding: '2rem' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    >
                        <h3 style={{ marginBottom: '0.5rem', fontSize: '1.4rem' }}>
                            {job.title} <span style={{ color: 'var(--primary)' }}>@ {job.company}</span>
                        </h3>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem', fontFamily: 'monospace' }}>
                            {job.range}
                        </p>
                        <ul style={{ listStyle: 'none' }}>
                            {job.description.map((desc, i) => (
                                <li key={i} style={{
                                    color: 'var(--text-muted)',
                                    marginBottom: '10px',
                                    display: 'flex',
                                    alignItems: 'baseline'
                                }}>
                                    <span style={{ color: 'var(--secondary)', marginRight: '15px', fontSize: '12px' }}>▹</span>
                                    {desc}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
