import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";

const routes = express.Router();

/*

//Importando as classes que nós criamos separadamente
import WorkspaceController from './controllers/WorkspaceController/WorkspaceController';
import CategoriasController from './controllers/CategoriasController';

//Instanciando as classes 
const routes = express.Router();

const WorkspaceController = new WorkspaceController();
const CategoriasController = new CategoriasController();

routes.get('/home', WorkspaceController.index);

//Método dentro da classe que realiza a criação do ponto

/*
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show)
*/

/*Por que a gente escreveu index e não list?
Porque é meio que um padrão da comunidade  quando a gente cria um  controller a gente ter os métodos nesses formatos aqui index, show, create/store, update, delete/destroy

*/

routes.get('/', (req: Request, res: Response) => {
    return res.json({ Hello: 'Wold'});
});

export default routes;

