# Teste Shopper

## Executando localmente

- Caso não tenha o NodeJS instalado, clique [aqui](https://nodejs.org/en/download) e faça a instalação seguindo as instruções do site

- Caso não tenha o Yarn instalado, faça a instalação executando o seguinte comando no seu terminal:
``` bash
npm install --location=global yarn
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
