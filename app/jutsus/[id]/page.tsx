import { Header } from "@/app/components/ui/header"
import { Stripe } from "@/app/components/ui/stripe"
import { Footer } from "@/app/components/ui/Footer"

export default async function JutsuPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params

  return (
    <>
      <Header />
      <main className="flex-1">
        <Stripe />
        <div className="mx-auto max-w-7xl px-4 pt-7 pb-20">
          <p className="font-mono text-[11px] tracking-[0.18em] text-primary mb-6">
            術 · ID: {id}
          </p>
          {/* Renderize o detalhe do jutsu aqui com seus dados */}
        </div>
      </main>
      <Footer />
    </>
  )
}
