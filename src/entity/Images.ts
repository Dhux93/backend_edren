import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn  } from 'typeorm';
import {  IsNotEmpty,IsEmail } from 'class-validator';
import { Archiveros } from './Archiveros';




@Entity()
@Unique(['Portada'])
export class Images{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @IsNotEmpty()
    Portada: string;

    @OneToOne(type => Archiveros) 
    @JoinColumn()
    Arch : number;

  
  
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}