import React, { useState, useEffect } from 'react';
import '../index.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`glass`}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                padding: '1.5rem 2rem',
                transition: 'all 0.3s ease',
                background: isScrolled ? 'rgba(5, 5, 5, 0.8)' : 'transparent',
                borderBottom: isScrolled ? '1px solid var(--glass-border)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-main)' }}>
                    Portfolio<span style={{ color: 'var(--primary)' }}>.</span>
                </a>

                <div style={{ display: 'flex', gap: '2rem' }}>
                    {['Home', 'About', 'Experience', 'Contact'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            style={{
                                color: 'var(--text-muted)',
                                fontWeight: '500',
                                fontSize: '0.9rem',
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
