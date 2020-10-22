# Symposium App
#### O projeto consiste em um template de aplicação para suporte da organização de simpósios acadêmicos. Fornece uma infraestrutura mínima para divulgação do evento e gerenciamento das inscrições. A aplicação foi pensada para se adequar aos padrões de uma *Single Page Application* (SPA) com interface ituitiva para os possíveis participantes do evento.

#### Como display *default* tem-se o "I Simpósio Brasileiro Mulheres em STEM", ocorrido no ITA no início de 2020.

## Como utilizar o projeto:
### 1. Para o front-end

##### Acesse o diretório *./frontend*
```shell
npm i
npm run build
npm start
```
###### *Frontend* deverá ser executado em *http://localhost:3006/#home*

### 2. Para o back-end

##### Acesse o diretório *./backend*
```shell
node index.js
```
###### *Backend* deverá ser executado *http://localhost:4000/*

## Organização do Projeto:

#### *./frontend*
##### Contém os arquivos relacionados ao *frontend* da aplicação.
* package.json: são os *requirements* da seção
* /src/Components: contém as definições dos *React class components* utilizados
* /src/Services: arquivos de autenticação para usuários
* /src/App.js: arquivo principal de montagem da página

#### *./backend*
##### Contém os arquivos relacionados ao *backend* da aplicação.
* package.json: são os *requirements* da seção
* databse.sql: script base para as tabelas do banco de dados
* db.js: conexão com o banco de dados
* index.js: funcionalidades principais do *back*
