"use client";
import { Header } from "@/app/components/ui/header";
import { Stripe } from "@/app/components/ui/stripe";
import { Footer } from "@/app/components/ui/Footer";
import React, { useEffect, useState } from "react";

export default function PersonagensPage() {
  const [characters, setCharacters] = useState(null);
  console.log("characters before: ", characters);

  useEffect(() => {
    async function searchData() {
      try {
        const response = await fetch("https://api.jikan.moe/v4/anime/");
        const data = await response.json();
        setCharacters(data);
      } catch (erro) {
        console.log("erro: ", erro);
      }
      console.log("characters set: ", characters);
    }
    searchData();
  }, []);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Stripe />
        <div className="mx-auto max-w-7xl px-4 pt-9 pb-20">
          <div className="mb-6">
            <p className="text-primary mb-1.5 font-mono text-[11px] tracking-[0.18em]">
              人物 · ARQUIVO 01
            </p>
            <h2 className="text-foreground font-barlow text-4xl font-black">
              Personagens
            </h2>
          </div>
          {/* Renderize FilterChips e CharacterCard aqui com seus dados */}
        </div>
      </main>
      <Footer />
    </>
  );
}
