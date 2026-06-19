import { Header } from "./components/ui/header";
import { Stripe } from "./components/ui/stripe";

export default function Home() {
  return (
    <>
      <Header />
      <main className="h-full">
        <Stripe />
        <section className="relative flex h-[calc(100%-42px)] w-full items-center justify-center min-[375px]:h-[calc(100%-26px)]">
          <div className="absolute top-1/2 left-1/2 -z-20 -translate-x-1/2 -translate-y-1/2 scale-200 text-9xl opacity-40 sm:text-[160px] lg:text-[250px]">
            忍
          </div>
          <div className="bg-popover/80 absolute top-1/2 left-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 object-cover"></div>
          <article className="mx-auto flex w-full max-w-7xl flex-col items-center gap-5 px-4 text-center">
            <p className="border-primary text-primary rounded-full border px-3 py-1 text-xs font-extralight uppercase">
              {" "}
              秘伝 · Compêndio Secreto
            </p>
            <p className="max-w-4xl text-5xl font-black sm:text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl">
              Todo o universo ninja,{" "}
              <span className="text-primary">em um só arquivo.</span>
            </p>
            <p className="sm max-w-72 max-w-sm leading-5">
              Consulte personagens, jutsus, clãs, sagas e a história completa —
              mangá e anime — em um databook vivo do mundo shinobi.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-5">
              <button className="bg-primary text-foreground rounded-lg px-5 py-3">
                Explorar personagens
              </button>
              <button className="border-foreground/20 bg-foreground/5 text-foreground rounded-lg border px-5 py-3">
                Enciclopéida de jutsus
              </button>
            </div>
          </article>
        </section>

        {/* <div className="mx-auto mt-10 w-xs border"></div> */}
      </main>
    </>
  );
}
