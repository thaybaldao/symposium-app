# Symposium App
#### O projeto consiste em um template de aplicação para suporte da organização de simpósios acadêmicos. Fornece uma infraestrutura mínima para divulgação do evento e gerenciamento das inscrições. A aplicação foi pensada para se adequar aos padrões de uma *Single Page Application* (SPA) com interface ituitiva para os possíveis participantes do evento.

#### Como display *default* tem-se o "I Simpósio Brasileiro Mulheres em STEM", ocorrido no ITA no início de 2020.

## Como utilizar o projeto:
### Versão Web
#### 1. Para o front-end

###### Acesse o diretório *./frontend*
```shell
npm i
npm run build
npm start
```
###### *Frontend* deverá ser executado em *http://localhost:3006/#home*

#### 2. Para o back-end

###### Acesse o diretório *./backend*
```shell
npm i
node index.js
```
###### *Backend* deverá ser executado *http://localhost:4000/*

### Versão Mobile
###### Acesse o diretório *./mobile-app*
```shell
npm i
expo start
```
###### *Utilizando o aplicativo Expo Client, acessar o QRCode gerado*

## Organização do Projeto:

#### *./frontend*
##### Contém os arquivos relacionados ao *frontend* da aplicação.
* package.json: são os *requirements* da seção
* /src/Components: contém as definições dos *React class components* utilizados
* /src/Services: contém os serviços de autenticação com usuários
* /src/App.js: arquivo principal de montagem da página

#### *./backend*
##### Contém os arquivos relacionados ao *backend* da aplicação.
* package.json: são os *requirements* da seção
* databse.sql: script base para as tabelas do banco de dados PostgreSQL
* db.js: conexão com o banco de dados PostgreSQL
* index.js: contém as rotas do *back*

#### *./mobile-app*
##### Contém os arquivos relacionados à versão mobile da aplicação.
* package.json: são os *requirements* da seção


## Estrutura Principal do Projeto:
    ├── backend                         # diretório do servidor do backend da aplicacao web
      ├── auth.js                       # estrategia de autenticacao local para login
      ├── database.sql                  # inicializacao do banco de dados
      ├── db.js                         # conexao com o banco de dados
      ├── index.js                      # configuracao do servidor do backend e definicao das rotas
      ├── utils.js                      # funções auxiliares
    ├── frontend                        # diretorio do frontend da aplicacao web 
      ├── public                        # conteudo estático básico de estilo
        ├── css                         # estilos externos do template
        ├── images                      # imagens da página
      ├── src                           # codigos fonte
        ├── Components                  # componentes react para as sessoes do SPA
          ├── About.js                  
          ├── Contact.js                
          ├── Countdown.js              
          ├── Faq.js                    
          ├── Footer.js                 
          ├── Header.js                 
          ├── Login.js                  
          ├── Map.js                    
          ├── Register.js              
          ├── RegisterModal.js          
          ├── Schedule.js               
          ├── Speaker.js                
          ├── SubscribeListener.js     
          ├── SubscribePresenter.js     
          ├── Subscription.js           
        ├── Images                      # imagens da pagina (conteudo mutavel)
        ├── Services                    # servicos auxiliares
          ├── AuthService.js            # servico de autenticacao do login
        ├── App.js                      # definicao do single page app
        ├── index.js                    # entry point do front end
    ├── mobile-app                      # diretorio da versao mobile
    
    
## Segurança da Aplicação

## Validações na Aplicação
