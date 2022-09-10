import { IsNotEmpty, IsString } from 'class-validator';

export class CreateDragonflyDto {
  @IsString()
  @IsNotEmpty()
  nazwaLAT: string;
  nazwaPL: string;
  rodzajLAT: string;
  rodzajPL: string;
  rodzinaLAT: string;
  rodzinaPL: string;
  podrzadPL: string;
  podrzadLAT: string;
  rzadLAT: string;
  rzadPL: string;
  ochrona: string;
  czerwonaKsiega: string;
  czerwonaLista: string;
  czasWystepowania: string;
  obszarWystepowania: string;
  rozmiary: string;
  rozpietoscSkrzydel: string;
}
