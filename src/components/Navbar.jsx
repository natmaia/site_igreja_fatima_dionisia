"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#fatima", label: "N. Sra. de Fátima" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" }, // ✅ corrigido
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-primary">
      <nav className="mx-auto flex h-16 items-center justify-between px-10">
        
        <Link href="#inicio" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Igreja Nossa Senhora de Fátima – Vila Dionísia"
            width={56}
            height={40}
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex text-sm font-medium text-white">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-secondary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <div className="space-y-1">
            <span className="block h-0.5 w-6 bg-secondary" />
            <span className="block h-0.5 w-6 bg-secondary" />
            <span className="block h-0.5 w-6 bg-secondary" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-primary">
          <ul className="flex flex-col items-center gap-6 py-8 text-secondary">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
