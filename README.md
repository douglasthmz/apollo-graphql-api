# Open Chat API Apollo GraphQL

API do Open Chat, feita com Nodejs + Apollo + GraphQL + MongoDB

## Rodando o projeto

Para rodar o projeto localmente, será necessário instalar as dependências descritas no arquivo `package.json` :

`npm install` ou `yarn`

Para o banco de dados, o MongoDB deve estar executando localmente ou através de um container na porta padrão 27017

Após isso, basta iniciar o servidor:

`npm run dev` ou `yarn dev`

Endereço da aplicação: `http://localhost:4000`

### Escolhas técnicas

Para o server, foi utilizado o ApolloServer, que abstrai algumas configurações relativas ao graphQL, tornando o desenvolvimento mais rápido e simples.

Para manipular o banco de dados, o mongoose foi a escolha.

Para organizar melhor a aplicação, e trazer uma modularidade, a implementação foi dividida em módulos, sendo cada módulo composto por seu próprio schema do Mongo, seu próprio type do graphQL, e seus próprios resolvers implementados.

Para tratar da atualização em tempo real de mensagens enviadas, quanto para a atualização em tempo real de online/offline, foi implementado as subscriptions do próprio graphQL, que em sua implementação utiliza Web Socket na comunicação com o client.
