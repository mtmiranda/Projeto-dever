import { Request, Response, NextFunction} from 'express';
import Knex from 'knex';
//import knex from '../database/connection';

/*

class WorkspaceController {

    
    async create(request: Request, response: Response, next: NextFunction) {
        try{
        const {
            titulo,
            usuario
        } = request.body;
    
        const trx = await knex.transaction();
        
        //Colocamos tudo dentro de uma váriavel isso também nos ajudará a fazer a verificação
    
        const workspaces = {
            titulo
        }
    
        const insertedIds = await trx('workspace').insert(workspaces);
    
        //referenciando
    
        const workspace_id = insertedIds[0];
    
        //precisaremos criar uma nova variável 
        const worspaceUsuario = usuarios.map((usuarios_id: number) =>{
    
            return {
                usuarios_id,
                worspace_id,
            };
    
        });
    
        await trx('usuarios').insert(worspaceUsuario);
    
        //Isso aqui realmente vai fazer os inserts na base de dados 
        await trx.commit();
        //Os três pontos significa spred operator, que significa pegar todas as informações  que nós temos no objeto e retornar dentro de outro
    
        return response.json({ 
            id: workspace_id,
            ...workspace,
        });
    } catch (error) {
        next(error)
    }

    } // fim create

    //delete

    async delete(request: Request, response: Response, next: NextFunction) { 
        try {
            const  { id } = req.params;
            await knex('workspace')
            .where({ id })
            .del();

            return response.status(201).send()

        } catch (error) {
            next(error)
        }
    }
    

}
*/


export default  WorkspaceController;