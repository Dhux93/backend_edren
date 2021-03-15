import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable  } from 'typeorm';
import {  IsNotEmpty,IsEmail } from 'class-validator';
import { Autores } from './Autores';



@Entity()
@Unique(['Titulo'])
export class Archiveros{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @IsNotEmpty()
    Titulo: string;
  
    @ManyToMany(type => Autores, autores => autores.archiveros) 
    @JoinTable()
    Autores: Autores[];
  
    @Column()
    @IsNotEmpty()
    Genero: string;
  
    @Column("double",{nullable :true})
    Precio: number;

   @Column()
   Modulos: string;

   @Column()
   Roles:string;

   
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}