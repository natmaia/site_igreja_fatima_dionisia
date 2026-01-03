import { MapPin, Phone, Mail, Globe, Church } from "lucide-react";

export default function Footer() {
  return (
    <footer id="site-footer" className="bg-primary text-white pt-6 pb-4">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-3">

        <div>
          <h3 className="text-lg font-semibold mb-4">Localização</h3>

          <div className="overflow-hidden rounded-lg border border-white/10">
            <iframe
              title="Mapa Igreja Fátima Dionísia"
              src="https://www.google.com/maps?q=Rua+Gomes+Leal,+350,+Vila+Dionísia,+São+Paulo+SP&output=embed"
              className="h-64 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Igreja</h3>

          <p className="text-sm text-gray-300 leading-relaxed">
            Igreja Católica – Fátima Dionísia<br />
            Um lugar de fé, comunhão e esperança.
          </p>

          <div className="mt-4 flex items-start gap-2 text-sm text-gray-300">
            <Church size={16} className="mt-0.5" />
            <span>
              <strong>Missas:</strong><br />
              Domingo – 7h, 10h30 e 18h
            </span>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contato</h3>

          <div className="flex items-start gap-2 text-sm text-gray-300 group">
            <MapPin
              size={16}
              className="mt-0.5 transition-colors group-hover:text-secondary"
            />
            <a
              href="https://www.google.com/maps?q=Rua+Gomes+Leal,+350,+Vila+Dionísia,+São+Paulo+SP"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors group-hover:text-secondary underline"
            >
              Rua Gomes Leal, 350<br />
              Vila Dionísia – São Paulo/SP<br />
              CEP 02671-090
            </a>
          </div>

          <div className="mt-3 flex items-center gap-2 text-sm text-gray-300 group">
            <Phone
              size={16}
              className="transition-colors group-hover:text-secondary"
            />
            <a
              href="tel:+551138510492"
              className="transition-colors group-hover:text-secondary underline"
            >
              (11) 3851-0492
            </a>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-300 group">
            <Mail
              size={16}
              className="transition-colors group-hover:text-secondary"
            />
            <a
              href="mailto:fatimadionisia@gmail.com"
              className="transition-colors group-hover:text-secondary underline"
            >
              fatimadionisia@gmail.com
            </a>
          </div>

          <div className="mt-2 flex items-center gap-2 text-sm text-gray-300 group">
            <Globe
              size={16}
              className="transition-colors group-hover:text-secondary"
            />
            <a
              href="https://www.fatimadionisia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors group-hover:text-secondary underline"
            >
              www.fatimadionisia.org
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
