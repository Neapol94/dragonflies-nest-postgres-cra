export interface Dragonfly {
  createdAt: Date;
  czasWystepowania: string;
  czerwonaKsiega: string;
  czerwonaLista: string;
  id: number;
  nazwaLAT: string;
  nazwaPL: string;
  obszarWystepowania: string;
  ochrona: string;
  podrzadLAT: string;
  podrzadPL: string;
  rodzajLAT: string;
  rodzajPL: string;
  rodzinaLAT: string;
  rodzinaPL: string;
  rozmiary: string;
  rozpietoscSkrzydel: string;
  rzadLAT: string;
  rzadPL: string;
  updatedAt: Date;
}

export interface Dragonflies {
  dragonflies: Dragonfly[];
}
