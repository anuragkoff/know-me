import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Journey", href: "/journey" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 mr-5 ml-5">
        <nav className="flex items-center justify-between p-4 pr-10 pl-10 ml-10 mr-10 bg-grey-100">
          <div className="justify-start text-lg font-bold">
            <Link href="/">WhoIAm</Link>
          </div>

          <ul className="flex space-x-10 gap-10">
            {navItems.map(({name, href}) => (
              <li key={name}>
                <Link href={href} className="text-black hover:text-gray-600">{name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
}
