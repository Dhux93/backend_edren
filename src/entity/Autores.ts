import { Entity, PrimaryGeneratedColumn, Unique, Column, CreateDateColumn, UpdateDateColumn, ManyToMany } from 'typeorm';
import {  IsNotEmpty,IsEmail,IsEmpty, IsOptional } from 'class-validator';
import { Archiveros } from './Archiveros';




@Entity()
@Unique(['Autor'])
export class Autores{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    @IsNotEmpty()
    Autor: string;

    @Column({nullable: true})
    @IsOptional()
    Face :string;

    
    @Column({nullable: true})
    @IsOptional()
    Whatt:  string;

    @Column({nullable: true})
    @IsOptional()
    Email: string;

    @ManyToMany(type => Archiveros, archiveros => archiveros.Autores)
    archiveros: Archiveros[];
    
    @Column()
    @CreateDateColumn()
    createdAt: Date;
  
    @Column()
    @UpdateDateColumn()
    updateAt: Date;
}