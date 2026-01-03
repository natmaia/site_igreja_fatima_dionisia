import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";

export const metadata = {
  title: {
    default: "Igreja N. Sra. de Fátima | Dionísia",
    template: "%s | Igreja N. Sra. de Fátima Dionísia",
  },
  description:
    "Igreja Católica Fátima Dionísia em São Paulo. Missas aos domingos às 7h, 10h30 e 18h. Rua Gomes Leal, 350 – Vila Dionísia.",
  keywords: [
    "igreja católica",
    "igreja em são paulo",
    "igreja vila dionísia",
    "igreja nossa senhora de fátima",
    "missas domingo são paulo",
    "igreja zona norte sp",
    "igreja fátima dionísia",
  ],
  authors: [{ name: "Igreja Fátima Dionísia" }],
  creator: "Igreja Católica Fátima Dionísia",
  publisher: "Igreja Católica Fátima Dionísia",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  alternates: {
    canonical: "https://www.fatimadionisia.org",
  },

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.fatimadionisia.org",
    title: "Fátima Dionísia | Igreja Católica ",
    description:
      "Igreja Católica Fátima Dionísia em São Paulo. Missas aos domingos às 7h, 10h30 e 18h.",
    siteName: "Igreja Fátima Dionísia",
  },

  metadataBase: new URL("https://www.fatimadionisia.org"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-black antialiased pt-6 pb-6">
        <Navbar />

        <main>{children}</main>

        <Footer />
        <SubFooter />
      </body>
    </html>
  );
}
