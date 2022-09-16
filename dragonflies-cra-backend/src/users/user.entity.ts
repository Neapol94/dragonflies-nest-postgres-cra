import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    length: 32,
  })
  firstName: string;

  @Column({
    length: 32,
  })
  lastName: string;

  @Column({
    length: 32,
  })
  nickname: string;

  @Column({
    length: 40,
  })
  email: string;

  @Column({
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date;

  @Column({ default: true })
  isActive: boolean;
}