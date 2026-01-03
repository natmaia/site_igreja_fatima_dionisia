"use client";

import { useEffect, useState } from "react";
import { Home, Phone, Mail, Church } from "lucide-react";

export default function SubFooter() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => setHide(entry.isIntersecting),
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  if (hide) return null;

  return (
    <div className="fixed bottom-0 left-0 z-40 w-full bg-primary text-white">
      <div className="mx-auto flex  flex-col gap-2 px-10 py-3 text-sm md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <Home size={16} />
          <a
            href="https://www.google.com/maps?q=Rua+Gomes+Leal,+350,+Vila+Dionísia,+São+Paulo+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Rua Gomes Leal, 350 – Vila Dionísia – CEP 02671-090
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Phone size={16} />
          <a href="tel:+551138510492" className="hover:underline">
            (11) 3851-0492
          </a>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} />
          <a href="mailto:fatimadionisia@gmail.com" className="hover:underline">
            fatimadionisia@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-2 font-medium">
          <Church size={16} />
          <span>Missas: Domingo 7h, 10h30 e 18h</span>
        </div>
      </div>
    </div>
  );
}
