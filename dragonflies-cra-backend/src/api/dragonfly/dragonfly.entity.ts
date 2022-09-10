import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Dragonflies extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ type: 'text' })
  public nazwaLAT: string;

  @Column({ type: 'text', default: false })
  public nazwaPL: string;

  @Column({ type: 'text', default: false })
  public rodzajLAT: string;

  @Column({ type: 'text', default: false })
  public rodzajPL: string;

  @Column({ type: 'text', default: false })
  public rodzinaLAT: string;

  @Column({ type: 'text', default: false })
  public rodzinaPL: string;

  @Column({ type: 'text', default: false })
  public podrzadPL: string;

  @Column({ type: 'text', default: false })
  public podrzadLAT: string;

  @Column({ type: 'text', default: false })
  public rzadLAT: string;

  @Column({ type: 'text', default: false })
  public rzadPL: string;

  @Column({ type: 'text', default: false })
  public ochrona: string;

  @Column({ type: 'text', default: false })
  public czerwonaKsiega: string;

  @Column({ type: 'text', default: false })
  public czerwonaLista: string;

  @Column({ type: 'text', default: false })
  public czasWystepowania: string;

  @Column({ type: 'text', default: false })
  public obszarWystepowania: string;

  @Column({ type: 'text', default: false })
  public rozmiary: string;

  @Column({ type: 'text', default: false })
  public rozpietoscSkrzydel: string;

  /*
   * Create and Update Date Columns
   */

  @CreateDateColumn({ type: 'timestamp' })
  public createdAt!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  public updatedAt!: Date;
}
