# Camadas do backend

- Server

  - Responsavel por configurar o server e startar a aplicação

- Router

  - Responsavel por criar as rotas e chamar o controller

- Controllers

  - Responsavel por instanciar o service e passar para ele tudo que for necessário
    para manipular

- Services
  - Responsavel pela lógica e pela regra de negócio da aplicação

# Camadas adicionais do TypeORM

- Migrations

  - A migration funciona como uma documentação do banco de dados, é aonde toda
    alteração será mapeada
  - Na migration definimos o nome e as colunas do banco

- Entities

  - Entidades são Classes detalhando sobre a particula em si do banco

- Repositories
  - Repositorios são Classes que extende outra classe do typeORM responsavel
    por chamar vários métodos.

# Nomenclatura

Controllers: singular, camelCase, maiusculo...  
Services: singular, camelCase, maiusculo...  
Migrations: singular, camelCase, maiusculo...

Entidades: singular, camelCase, maiusculo...  
Repositorios: plural, camelCase, maiusculo...

A tabela do banco deve sempre ser escrita no plural
