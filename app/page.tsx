import { Header } from "./components/ui/header";
import { Stripe } from "./components/ui/stripe";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Stripe />

        <div className="mx-auto mt-10 w-xs border"></div>
      </main>
    </>
  );
}
