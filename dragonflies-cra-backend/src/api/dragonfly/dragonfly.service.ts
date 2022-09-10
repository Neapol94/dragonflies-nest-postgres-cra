import { Injectable } from '@nestjs/common';
import { CreateDragonflyDto } from './dragonfly.dto';
import { Dragonflies } from './dragonfly.entity';

@Injectable()
export class DragonflyService {  

  public getAllDragonflies(): Promise<Dragonflies[]> {
    return Dragonflies.find();
  }

  public getDragonfly(id: number): Promise<Dragonflies> {
    return Dragonflies.findOne({ where: { id } });
  }

  public createDragonfly(body: CreateDragonflyDto): Promise<Dragonflies> {
    const dragonfly: Dragonflies = new Dragonflies();

    dragonfly.nazwaLAT = body.nazwaLAT;
    dragonfly.nazwaPL = body.nazwaPL;
    dragonfly.rodzajLAT = body.rodzajLAT;
    dragonfly.rodzajPL = body.rodzajPL;
    dragonfly.rodzinaLAT = body.rodzinaLAT;
    dragonfly.rodzinaPL = body.rodzinaPL;
    dragonfly.podrzadPL = body.podrzadPL;
    dragonfly.podrzadLAT = body.podrzadLAT;
    dragonfly.rzadLAT = body.rzadLAT;
    dragonfly.rzadPL = body.rzadPL;
    dragonfly.ochrona = body.ochrona;
    dragonfly.czerwonaKsiega = body.czerwonaKsiega;
    dragonfly.czerwonaLista = body.czerwonaLista;
    dragonfly.czasWystepowania = body.czasWystepowania;
    dragonfly.obszarWystepowania = body.obszarWystepowania;
    dragonfly.rozmiary = body.rozmiary;
    dragonfly.rozpietoscSkrzydel = body.rozpietoscSkrzydel;

    //dragonfly.email = body.email;

    return dragonfly.save();
  }
}
