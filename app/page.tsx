import { Header } from "./components/ui/header";
import { Stripe } from "./components/ui/stripe";
import { Footer } from "./components/ui/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Stripe />

        {/* Hero */}
        <section className="relative flex min-h-[calc(100svh-42px)] w-full items-center justify-center">
          <div className="absolute top-1/2 left-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 scale-200 text-9xl opacity-40 sm:text-[160px] lg:text-[250px]">
            忍
          </div>
          <div className="bg-popover/80 absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2" />
          <article className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 text-center">
            <p
              translate="no"
              className="border-primary text-primary rounded-full border px-3 py-1 text-xs font-light tracking-[0.4em] uppercase"
            >
              秘伝 · Compêndio Secreto
            </p>
            <h1 className="max-w-4xl text-5xl font-black sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
              Todo o universo ninja,{" "}
              <span className="text-primary">em um só arquivo.</span>
            </h1>
            <p className="text-foreground/60 max-w-sm leading-relaxed">
              Consulte personagens, jutsus, clãs, sagas e a história completa —
              mangá e anime — em um databook vivo do mundo shinobi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Link
                href="/personagens"
                className="bg-primary text-foreground rounded-xl px-6 py-3.5 text-sm font-semibold tracking-[0.04em] shadow-[0_8px_30px_rgba(192,57,43,0.35)] transition-transform hover:-translate-y-0.5"
              >
                Explorar Personagens →
              </Link>
              <Link
                href="/jutsus"
                className="border-foreground/20 bg-foreground/5 text-foreground hover:border-primary/50 rounded-xl border px-6 py-3.5 text-sm font-semibold tracking-[0.04em] transition-colors"
              >
                Enciclopédia de Jutsus
              </Link>
            </div>
          </article>
        </section>

        {/* Seções do arquivo — renderize SectionsGrid aqui com seus dados */}

        {/* Fichas em destaque — renderize FeaturedCharacters aqui com seus dados */}
      </main>
      <Footer />
    </>
  );
}
