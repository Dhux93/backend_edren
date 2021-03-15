import { Router } from 'express';
import auth from './auth.routes';
import user from './user.routes';
import autores from './autores.routes'
import images from './images.routes'
import Pdf from './Pdf.routes';
import archiveros from './archiveros.routes';
import view from './view.routes';
const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/autores',autores);
routes.use('/images',images);
routes.use('/pdf',Pdf);
routes.use('/viewAll',view);
routes.use('/archiveros',archiveros);

export default routes;
