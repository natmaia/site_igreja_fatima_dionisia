"use client";

import { useState } from "react";
import Image from "next/image";
import FaixaEmDesenvolvimento from "@/components/FaixaEmDesenvolvimento";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const res = await fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: formData.get("nome"),
        email: formData.get("email"),
        mensagem: formData.get("mensagem"),
      }),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      e.target.reset();
    }
  }

  return (
    <>
      {/* HERO */}
      <section
        id="inicio"
        className="scroll-mt-16 relative flex min-h-screen w-full items-center justify-center pt-16"
      >
        <Image
          src="/nossa_senhora.png"
          alt="Nossa Senhora de Fátima"
          fill
          priority
          className="object-cover object-[center_-20%]"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 px-6 text-center text-white">
          <h1 className="mb-4 text-3xl font-bold md:text-5xl">
            Nossa Senhora de Fátima
          </h1>
          <p className="text-base md:text-lg">
            Igreja Católica Apostólica Romana
          </p>
        </div>
      </section>

      {/* FÁTIMA */}
      <section
        id="fatima"
        className="scroll-mt-16 w-full bg-white px-6 py-20 text-center text-black"
      >
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Nossa Senhora de Fátima
        </h2>

        <div className="mx-auto max-w-3xl space-y-6 text-justify text-gray-700">
          <p>
            Nossa Senhora de Fátima apareceu em 1917, na Cova da Iria, em
            Fátima, Portugal, a três crianças pastoras: Lúcia, Francisco e
            Jacinta.
          </p>

          <p>
            Entre os meses de maio e outubro daquele ano, Maria transmitiu uma
            mensagem de oração, penitência e conversão, pedindo a recitação
            diária do Santo Rosário pela paz no mundo.
          </p>

          <p>
            A última aparição, em 13 de outubro de 1917, ficou marcada pelo
            chamado Milagre do Sol, presenciado por milhares de pessoas,
            fortalecendo a fé do povo e a devoção mariana.
          </p>

          <p>
            A mensagem de Nossa Senhora de Fátima permanece atual, convidando os
            fiéis à conversão do coração e à confiança em Deus.
          </p>
        </div>
      </section>

      <section
        id="sobre"
        className="scroll-mt-16 relative w-full bg-white px-6 py-20 text-center text-black"
      >
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Sobre a Igreja
        </h2>

        <FaixaEmDesenvolvimento />

        <p className="mx-auto max-w-3xl text-gray-700">
          Esta seção está em desenvolvimento.
          <br />
          Em breve, contaremos a história da Igreja Nossa Senhora de Fátima, sua
          caminhada pastoral e sua presença na comunidade.
        </p>
      </section>

      <section
        id="contato"
        className="scroll-mt-16 relative w-full bg-white px-6 py-20 text-center text-black"
      >
        <h2 className="mb-6 text-2xl font-semibold md:text-3xl">
          Entre em Contato
        </h2>

        <FaixaEmDesenvolvimento />

        <form onSubmit={handleSubmit} className="mx-auto max-w-xl space-y-4">
          <input
            name="nome"
            placeholder="Seu nome"
            required
            className="w-full rounded border px-4 py-3"
          />

          <input
            type="email"
            name="email"
            placeholder="Seu email"
            required
            className="w-full rounded border px-4 py-3"
          />

          <textarea
            name="mensagem"
            placeholder="Sua mensagem"
            required
            rows={5}
            className="w-full rounded border px-4 py-3"
          />

          <button
            disabled={loading}
            className="w-full rounded bg-primary px-6 py-3 text-white transition hover:bg-secondary/90 disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>

          {success && (
            <p className="mt-4 text-green-600">Mensagem enviada com sucesso.</p>
          )}
        </form>
      </section>
    </>
  );
}
