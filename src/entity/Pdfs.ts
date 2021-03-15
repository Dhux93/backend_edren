import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn  } from 'typeorm';
import {  IsNotEmpty,IsEmail } from 'class-validator';
import { Archiveros } from './Archiveros';



@Entity()
@Unique(['Archivo'])
export class Pdfs{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @IsNotEmpty()
    Archivo: string;

    @Column()
    @IsNotEmpty()
    Encabezado:string;

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