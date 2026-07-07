"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar() {
  const animate = useRef(false);
  const navItems = [
    { name: "Projects", href: "#projects" },
    { name: "Journey", href: "#journey" },
    { name: "About", href: "#about" },
  ];

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const scrollTo = document.querySelector(href ?? '');
    if (scrollTo) {
      scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
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
          <ul className="flex space-x-5 gap-5">
            {navItems.map(({name, href}) => (
              <li className={styles.listItem} key={name}>
                <Link href={href} onClick={handleScroll}>{name}</Link>
              </li>
            ))}
          </ul>
          <Link href="/" className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold" >
            Daddy&apos;s Home
          </Link>
          <Link href="#contact" className={styles.listItem} onClick={handleScroll}>
            Contact Me
          </Link>
        </nav>
      </header>
    </>
  )
}
