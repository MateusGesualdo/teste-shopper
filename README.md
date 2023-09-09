# Teste Shopper

## Executando o projeto localmente

1. Caso não tenha o NodeJS instalado, clique [aqui](https://nodejs.org/en/download) e faça a instalação seguindo as instruções do site

1. Caso não tenha o MySql Server instalado, clique [aqui](https://dev.mysql.com/downloads/mysql/) e faça a instalação seguindo as instruções do site

1. Caso não tenha o Yarn instalado, faça a instalação executando o seguinte comando no seu terminal:
``` bash
npm install --location=global yarn
``` 

1. Clone o repositório executando o seguinte comando no seu terminal:
``` bash
git clone https://github.com/MateusGesualdo/teste-shopper.git
``` 

1. Ainda no terminal, navegue até a raiz do projeto e instale as dependências executando o seguinte comando:
``` bash
  yarn
``` 

1. Na pasta `./packages/back`, adicione um arquivo `.env`, contendo as seguintes variáveis de ambiente:
``` 
DB_HOST = 127.0.0.1
DB_USER = seu_nome_de_usuario 
DB_PASSWORD = sua_senha
``` 

1. Inicie o servidor local MySql

1. Crie as tabelas de produtos executando o seguinte comando no seu terminal:
``` 
yarn workspace back create-schema 
``` 

## Requisitos 

### Funcionais

  - [x] Receber um arquivo .csv contendo código do produto e novo preço
  - [x] Impedir que o preço de venda seja menor que o de custo
  - [x] Reajuste máximo de 10% do preço original
  - [x] Preço de venda dos pacotes deve ser sempre igual à soma dos preços individuais dos produtos que o compõem
  - [x] Os preço de custo dos produtos que não são pacotes não deve ser atualizado

### Técnicos

  - [x] Backend em Node
  - [x] Frontend em React
  - [x] Código em Javascript ou Typescript
  - [x] Banco de dados Mysql
  - [x] Botão "Validar" que verifica:
    - [x] Existência dos campos necessários
    - [x] Existência dos produtos informados
    - [x] Validade dos valores informados como preço
    - [x] Cumprimento dos requisitos funcionais
  - Após validação, exibir:
    - [x] Código
    - [x] Nome
    - [x] Preço atual
    - [x] Novo preço
    - [x] Mensagem de status da atualização
  - Botão "Atualizar" 
    - [x] Só é habilitado se houver sucesso nas validações
    - [x] Após clicado, deve atualizar o banco e preparar a tela para receber um novo arquivo
    - [x] O preço de custo dos pacotes deve ser a soma dos custos dos seus componentes.
