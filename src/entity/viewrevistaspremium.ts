import { Connection, ViewColumn, ViewEntity } from 'typeorm';
import { Archiveros } from './Archiveros';

import { Autores } from './Autores';
import { Images } from './Images';
import { Pdfs } from './Pdfs';

@ViewEntity({
   name: "viewRevistasPremium",
   database:"edrenpublicacion_db-edren12",
   schema:"edrenpublicacion_db-edren12",
   expression: (connection: Connection) => connection.createQueryBuilder()
      .select("archivero.id", "id")
      .addSelect("archivero.Titulo", "Titulo")
      .addSelect("archivero.Genero", "Genero")
      .addSelect("images.Portada", "Portada")
      .addSelect("pdfs.Archivo", "Archivo")
      .addSelect("archivero.Modulos", "Modulos")
      .addSelect("archivero.Roles", "Roles")
      .addSelect("pdfs.id","pdfId")
      .from(Archiveros, "archivero")
      .innerJoin(Images, "images", "archivero.id = images.archId")
      .innerJoin(Pdfs, "pdfs", "archivero.id = pdfs.archId")
      .where("archivero.Modulos = 'revistas' and (archivero.Roles = 'premium' || archivero.Roles = 'free')")
   })
export class viewrevistaspremium {
   @ViewColumn()
   id: number;

   @ViewColumn()
   pdfId:number;

   @ViewColumn()
   Titulo: string;

   @ViewColumn()
   Genero: string;

   @ViewColumn()
   Portada: string;

   @ViewColumn()
   Archivo: string;

   @ViewColumn()
   Modulos: string;

   @ViewColumn()
   Roles: string;
}