import { Header } from "@/app/components/ui/header"
import { Stripe } from "@/app/components/ui/stripe"
import { Footer } from "@/app/components/ui/Footer"

export default function PersonagensPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Stripe />
        <div className="mx-auto max-w-7xl px-4 pt-9 pb-20">
          <div className="mb-6">
            <p className="font-mono text-[11px] tracking-[0.18em] text-primary mb-1.5">
              人物 · ARQUIVO 01
            </p>
            <h2 className="text-foreground font-black text-4xl font-barlow">Personagens</h2>
          </div>
          {/* Renderize FilterChips e CharacterCard aqui com seus dados */}
        </div>
      </main>
      <Footer />
    </>
  )
}
