import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import workspaceController from "./controllers/WorkspaceController/WorkspaceController";

const routes = express.Router();

/*

//Importando as classes que nós criamos separadamente
import WorkspaceController from './controllers/WorkspaceController/WorkspaceController';
import CategoriasController from './controllers/CategoriasController/';

//Instanciando as classes 
const routes = express.Router();

const WorkspaceController = new WorkspaceController();
const CategoriasController = new CategoriasController();

routes.get('/home', WorkspaceController.index);

//Método dentro da classe que realiza a criação do ponto

/*
routes.post('/points', pointsController.create);
routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);
*/

/*




*/

//Create
routes.post('/', workspaceController.create);
//routes.post('/', categoriasController.create);

//See all Items
routes.get('/', workspaceController.index);
//routes.get('/', categoriasController.index);

//Show only Item
routes.get('/:id', workspaceController.show);
//routes.get('/:id', categoriasController.show);

//Update only item
routes.put('/:id', workspaceController.update);
//routes.put('/:id', categoriasController.update);

//Delete only item
routes.delete('/:id', workspaceController.delete);
//routes.delete('/:id', categoriasController.delete);


export default routes;

