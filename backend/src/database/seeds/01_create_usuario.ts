import Knex from 'knex';


export async function seed(knex: Knex) {

    await knex('usuarios').insert([

    { matricula: 'admin', nome: 'admin', senha: 'admin'}, 
    { matricula: '202002220249', nome: 'Matheus Moreira', senha: '654321'}


]);

}
