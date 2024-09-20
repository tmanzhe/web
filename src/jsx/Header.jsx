import React, { useEffect, useState } from 'react';
import '../css/header.css';

function Header() {
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        if (typeof window !== 'undefined') {
            const currentScrollY = window.scrollY;
            setVisible(currentScrollY < lastScrollY || currentScrollY === 0);
            setLastScrollY(currentScrollY);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={visible ? 'visible' : 'hidden'}>
            <a href="#">home</a>
            <a href="#about-me">about me</a>
            <a href="#">my work</a>
            <a href="#">resume</a>
            <a href="#my-life">my life</a>
        </header>
    );
}

export default Header;
