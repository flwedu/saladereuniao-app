# Descrição

Essa é uma aplicação web criada utilizando Vue.js e Typescript para consumir uma API Rest [saladereuniao](https://github.com/flwedu/dio-saladereuniao).

Foi desenvolvida com o intuito de consolidar meu aprendizado sobre as tecnologias envolvidas no projeto. Também estou exercitando algumas práticas de desenvolvimento, como TDD.

### Tecnologias utilizadas

- HTML
- Typescript
- Vue.js
- SCSS
- JEST
- Axios

## Preparando o projeto 🪄

Após clonar o projeto, execute:

```bash
npm install
```

As configurações para conexão com a API REST do backend estão em `src/config.js`

## Rodando a aplicação 🚀

A aplicação foi projetada para rodar na versão 17 do Nodejs (v17.3.1).

Esse é o script presente no arquivo `package.json` com parâmetros de compatibilidade para versões superiores à 17:

```text
"scripts": {

    //... outros scripts
    
    "serve": "export NODE_OPTIONS=--openssl-legacy-provider && vue-cli-service serve",
}
```

Caso esteja utilizando uma versão do Nodejs anterior à 17, edite o script de inicialização, presente em `package.json`. Esse é um exemplo de como deve ficar o script para versões anteriores do Nodejs:

```text
"scripts": {

    //... outros scripts
    
    "serve": "vue-cli-service serve",
}
```

Após isso, utilize o comando no terminal para rodar em modo de desenvolvimento:

```bash
npm run serve
```

## Lista de recursos/requisitos

Uma lista com os requisitos funcionais do projeto pode ser encontrada no arquivo [requirements.MD](./requirements.MD).
