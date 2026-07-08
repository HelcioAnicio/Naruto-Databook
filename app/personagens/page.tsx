"use client";
import { Header } from "@/app/components/ui/header";
import { Stripe } from "@/app/components/ui/stripe";
import { Footer } from "@/app/components/ui/Footer";
import { useEffect, useState } from "react";
import { Character } from "../types/character";
import Image from "next/image";

export default function PersonagensPage() {
  const [characters, setCharacters] = useState<Character[] | null>(null);
  console.log("characters: ", characters);

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    async function searchData() {
      try {
        const response = await fetch(
          "https://dattebayo-api.onrender.com/characters",
        );
        const data = await response.json();
        setCharacters(data.characters);
      } catch (erro) {
        console.log("erro: ", erro);
      }
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
          <ul className="flex flex-wrap gap-5">
            {characters !== null &&
              characters.map((character, index) => {
                return (
                  <li
                    className="max-w-50 min-w-24 flex-1 lg:max-w-72"
                    key={index}
                  >
                    <figure>
                      <Image
                        src={character.images[0]}
                        width={120}
                        height={150}
                        alt={character.name}
                      />
                    </figure>
                    {character.name}

                    <div className="mt-2"></div>
                  </li>
                );
              })}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
