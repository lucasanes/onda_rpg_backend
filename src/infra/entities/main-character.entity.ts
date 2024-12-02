import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';
import { Character } from './character.entity';

@Entity('main_characters')
export class MainCharacter {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column('varchar')
  name: string;

  @Column('int', { default: 0 })
  xp: number;

  @Column('int')
  age: number;

  @Column('varchar')
  class: string;

  @Column('varchar')
  race: string;

  @Column('varchar')
  divinity: string;

  @Column('varchar')
  origin: string;

  @Column('int', { default: 0 })
  ts: number;

  @Column('int', { default: 0 })
  tp: number;

  @Column('int', { default: 0 })
  to: number;

  @Column({ name: 'character_id', type: 'int' })
  @Index()
  characterId: number;

  @OneToOne(() => Character, (character) => character.mainCharacter)
  @JoinColumn({ name: 'character_id' })
  character: Relation<Character>;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
    onUpdate: 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;
}
