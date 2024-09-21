import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
             <Link to="/">home</Link>
            <a href="#about-me">about me</a>
            <Link to="/work">my work</Link>
            <a href="#resume">resume</a>
            <Link to="/life">my life</Link>
        </header>
    );
}

export default Header;
