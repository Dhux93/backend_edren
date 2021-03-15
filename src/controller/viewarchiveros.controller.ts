import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { viewarchiveros } from "../entity/viewarchiveros";
import {getManager} from "typeorm";
import { viewcomicsfree } from "../entity/viewcomicsfree";
import { viewrevistasfree } from "../entity/viewrevistasfree";
import { viewlibrosfree } from "../entity/viewlibrosfree";
import { viewmusicafree } from "../entity/viewmusicafree";
import { viewpeliculasfree } from "../entity/viewpeliculasfree";
import { viewvideosfree } from "../entity/viewvideosfree";
import { viewlibrospremium } from "../entity/viewlibrospremium";
import { viewrevistaspremium } from "../entity/viewrevistaspremium";
import { viewcomicspremium } from "../entity/viewcomicspremium";
import { viewmusicapremium } from "../entity/viewmusicapremium";
import { viewpeliculaspremium } from "../entity/viewpeliculaspremium";
import { viewvideospremium } from "../entity/viewvideospremium";

export class ViewArchiverosController{
    static getAll = async (req: Request, res: Response) => {
       
        const entityManager = getManager();
        const view = await entityManager.find(viewarchiveros);
        res.send(view);
      };
    
    static getLibrosFree = async (req: Request, res: Response) => {
       const entityManager = getManager();
        const view = await entityManager.find(viewlibrosfree);
        res.send(view);
    };
        
          static getRevistasFree = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewrevistasfree);
              res.send(view);
           };
        
           static getComicsFree = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewcomicsfree);
              res.send(view);
           };
        
           static getMusicaFree = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewmusicafree);
              res.send(view);
    };
        
           static getPeliculasFree = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewpeliculasfree);
              res.send(view);
          };
        
           static getVideosFree = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewvideosfree);
              res.send(view);
           };
    
    
    
       static getLibrosPremium = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewlibrospremium);
              res.send(view);
       };
    
       static getRevistasPremium = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewrevistaspremium);
              res.send(view);
       };
    
       static getComicsPremium = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewcomicspremium);
              res.send(view);
    };
    
       static getMusicaPremium = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewmusicapremium);
              res.send(view);
       };
    
       static getPeliculasPremium = async (req: Request, res: Response) => {
              const entityManager = getManager();
              const view = await entityManager.find(viewpeliculaspremium);
              res.send(view);
       };
    
      static getVideosPremium = async (req: Request, res: Response) => {
       const entityManager = getManager();
        const view = await entityManager.find(viewvideospremium);
        res.send(view);
       };
}