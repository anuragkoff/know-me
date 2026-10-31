"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar() {
  const animate = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "About", href: "#about" },
    { name: "Contact Me", href: "#contact"},
  ];

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const scrollTo = document.querySelector(href ?? '');
    if (scrollTo) {
      scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (animate.current || window.location.pathname !== '/') return;
    gsap.from('.navbar', {
      y: -100,
      duration: 1,
      delay: 1.5,
      ease: 'power2.out',
    });
    animate.current = true;
  }, []);

  return (
    <>
      <header className="navbar fixed inset-x-0 top-3 z-50 mr-5 ml-5">
        <nav className={`${styles.navbar} flex items-center justify-between p-4 pr-10 pl-10 ml-10 mr-10 bg-red-950/50 backdrop-blur-md`}>
          <Link href="#hero" className={`${styles.brand} text-lg font-bold`} >
            Anurag
          </Link>
          <ul className={`flex space-x-5 gap-5 ${styles.navLinks} ${isMenuOpen ? styles.menuOpen : ''}`}>
            {navItems.map(({name, href}) => (
              <li className={styles.listItem} key={name}>
                <Link href={href} onClick={handleScroll}>{name}</Link>
              </li>
            ))}
          </ul>
          {/* <Link href="#contact" className={styles.listItem} onClick={handleScroll}>
            Contact Me
          </Link> */}
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </button>
        </nav>
      </header>
    </>
  )
}
