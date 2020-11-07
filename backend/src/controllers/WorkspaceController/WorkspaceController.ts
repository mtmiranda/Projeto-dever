import { Request, Response, NextFunction} from 'express';
import knex from '../../database/connection';



class WorkspaceController {

    /*
    async create(req: Request, res: Response, next: NextFunction) {
        try{
        const {
            titulo,
            FkIdUsuarios
        } = req.body;
    
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
    
        return res.json({ 
            id: workspace_id,
            ...workspace,
        });
    } catch (error) {
        next(error)
    }

    } // fim create
*/

    //update 

    async update(request: Request, response: Response, next: NextFunction) {
        try {
            const { titulo } = request.body
            const { id } = request.params
            
            
            await knex('workspace')
            .update({ titulo })
            .where({ id })

            return response.send()

        } catch (error) {
            next(error)
        }
    }


    //delete
    async delete(request: Request, response: Response, next: NextFunction) {
        try {
        const { id } = request.params;
    
        const workspace = await knex('points').where('id', id).delete();
        
        return response.json({ msg: 'successfully deleted' });

        } catch (error) {
            return response.status(400).json({ message: 'Point not found.' });
            //next(error)
        }
    
        
      }

    

}



export default  WorkspaceController;