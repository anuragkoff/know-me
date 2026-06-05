import Link from "next/link";
import styles from './navbar.module.css';

export default function Navbar() {
  const navItems = [
    { name: "Projects", href: "/projects" },
    { name: "Journey", href: "/journey" },
    { name: "About", href: "#about" },
  ];
  return (
    <>
      <header className="fixed inset-x-0 top-3 z-50 mr-5 ml-5">
        <nav className={`${styles.navbar} flex items-center justify-between p-4 pr-10 pl-10 ml-10 mr-10 bg-grey-100`}>
          <ul className="flex space-x-5 gap-5">
            {navItems.map(({name, href}) => (
              <li className={styles.listItem} key={name}>
                <Link href={href}>{name}</Link>
              </li>
            ))}
          </ul>
          <Link href="#hero" className="absolute left-1/2 transform -translate-x-1/2 text-lg font-bold">Daddy&apos;s Home</Link>
          <Link href="#contact" className={styles.listItem}>Contact Me</Link>
        </nav>
      </header>
    </>
  )
}
