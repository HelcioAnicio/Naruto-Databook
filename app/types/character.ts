export interface CharacterStats {
  nin: number
  tai: number
  gen: number
  int: number
  for: number
  vel: number
  selo: number
}

export interface CharacterHistory {
  arco: string
  titulo: string
  texto: string
}

export interface Character {
  id: string
  name: string
  jp: string
  jp1: string
  vila: string
  cla: string
  rank: string
  reg: string
  classe: string
  natureza: string
  kekkei: string
  status: string
  afiliacao: string
  bio: string
  stats: CharacterStats
  jutsus: string[]
  historia: CharacterHistory[]
}
