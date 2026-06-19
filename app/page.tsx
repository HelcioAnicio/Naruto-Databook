import { Header } from "./components/ui/header"
import { Stripe } from "./components/ui/stripe"
import { Footer } from "./components/ui/Footer"

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
            <p className="border-primary text-primary rounded-full border px-3 py-1 text-xs font-light uppercase tracking-[0.4em]">
              秘伝 · Compêndio Secreto
            </p>
            <h1 className="max-w-4xl text-5xl font-black sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
              Todo o universo ninja,{" "}
              <span className="text-primary">em um só arquivo.</span>
            </h1>
            <p className="max-w-sm text-foreground/60 leading-relaxed">
              Consulte personagens, jutsus, clãs, sagas e a história completa —
              mangá e anime — em um databook vivo do mundo shinobi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="/personagens"
                className="bg-primary text-foreground rounded-xl px-6 py-3.5 font-semibold text-sm tracking-[0.04em] shadow-[0_8px_30px_rgba(192,57,43,0.35)] hover:-translate-y-0.5 transition-transform"
              >
                Explorar Personagens →
              </a>
              <a
                href="/jutsus"
                className="border-foreground/20 bg-foreground/5 text-foreground rounded-xl border px-6 py-3.5 font-semibold text-sm tracking-[0.04em] hover:border-primary/50 transition-colors"
              >
                Enciclopédia de Jutsus
              </a>
            </div>
          </article>
        </section>

        {/* Seções do arquivo — renderize SectionsGrid aqui com seus dados */}

        {/* Fichas em destaque — renderize FeaturedCharacters aqui com seus dados */}
      </main>
      <Footer />
    </>
  )
}
