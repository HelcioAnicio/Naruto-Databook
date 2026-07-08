export interface CharacterStats {
  nin: number;
  tai: number;
  gen: number;
  int: number;
  for: number;
  vel: number;
  selo: number;
}

export interface CharacterHistory {
  arco: string;
  titulo: string;
  texto: string;
}

export interface Character {
  debut: string[];
  family: string[];
  id: string;
  images: string[];
  jutsu: string[];
  name: string;
  natureTypes: string[];
  personal: string[];
  rank: string[];
  tools: string[];
  uniqueTraits?: string[];
  voiceActors: string[];
  stats: CharacterStats;
  historia: CharacterHistory[];
}
