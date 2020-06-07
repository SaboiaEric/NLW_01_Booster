import Knex from "knex";

//Fazer operação (criar a tabela)
export async function up(knex: Knex){
    return knex.schema.createTable('items', table => {
        table.increments('id').primary();
        table.string('image').notNullable();
        table.string('title').notNullable();
    });
}

//Oposto do método up  (deletar a tabela)
export async function down(knex: Knex){
    return knex.schema.dropTable('items');
}