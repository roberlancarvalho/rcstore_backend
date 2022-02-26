<p align="center">
  <a href="https://github.com/roberlancarvalho/rcstore_backend" rel="noopener">
 <img width=150px height=150px src="https://www.flaticon.com/free-icons/code" alt="Backend para a aplicação RC Store"></a>
</p>

<h3 align="center">Backend para aplicação RC Store (CRUD de produtos)</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/roberlancarvalho/rcstore_backend">
  
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/roberlancarvalho/rcstore_backend">
  
  <img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/roberlancarvalho/rcstore_backend">
  
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/roberlancarvalho/rcstore_backend">

</div>

---

<p align="center"> Projeto contruído com conhecimentos em Node.js e Typescript. 
   <br>
</p>

## 📝 Tabela de conteúdos

- [Sobre](#about)
- [Iniciando](#getting_started)
- [Deploy](#deploy)
- [Testes](#tests)
- [Uso](#usage)
- [Construído utilizando](#built_using)
- [Authors](#authors)

## 🧐 Sobre <a name = "about"></a>

API e banco de dados para a aplicação RC Store (CRUD de produtos). A aplicação é um modelos de CRUD de produtos para loja virtual (E-Commerce).

Aplicação voltada à criação de produtos, listagem, edição e remoção. Simbolozando um uso comum em gerenciamento de lojas virtuais em produtos e estoque.
A aplicação conta com principais recursos e bibliotecas em seu desenvolvimento. 

A API está documentada, [nesse link](https://app.swaggerhub.com/apis/roberlancarvalho).

Criado com requisitos baseados no teste da [JET E-commerce](https://www.jetecommerce.com.br/).

## 🏁 Iniciando <a name = "getting_started"></a>

### Rotas da Aplicação

- **`POST /tools`**: Rota para cadastrar um novo produto. O corpo da requisição deve conter as informações da do produto a ser cadastrado, sem o ID (gerado automaticamente pelo servidor).

- **`GET /tools`**: Rota para listar todos os produtos.

- **`GET /tools?id={id}`**: Rota para listar produtos utilizando uma busca por ID, ou seja, filtrando as ferramentas de acordo com a tag recebida.

- **`DELETE /tools/{id}`**: Rota para deletar um produto específico.

- **`PUT /tools/{id}`**: Rota para deletar um produto específico.

## 🚀 Deploy<a name = "deploy"></a>

Você pode utilizar a API, está aqui: `http://api-app-rc-store.herokuapp.com`

## Como contribuir?

Você pode utilizar esse projeto, para fornecer dados e cadastrar para uma aplicação Front-End desenvolvida em qualquer plataforma, como Angular, ReactJS, VueJS, etc.

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências `yarn install` ou `npm install`

Para executar a API localmente, deve ter um container com Postgress com o nome correto para que o typeorm possa se conectar ao seu banco de dados.

## 🎈 Uso <a name="usage"></a>

```sh
yarn dev
```

## 🔧 Executando os testes <a name = "tests"></a>

```sh
yarn test
```

### Sobre os testes

Para essa aplicação, implementei os seguintes testes:

- **`should be able to create a new tool`**: Para que esse teste passe, a aplicação deve permitir que uma ferramenta seja criada, e retorne um json com a ferramenta criada.

- **`should be able to list the tools`**: Para que esse teste passe, a aplicação deve permitir que seja retornado um array contendo todas as ferramentas.

- **`should be able to list tools with tag filter`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as ferramentas que contém a tag passada na rota.

- **`should be able to delete a tool`**: Para que esse teste passe, a aplicação deve permitir deletar uma ferramenta.

- **`should not be able to delete a nonexistent tool`**: Para que esse teste passe, a aplicação não deve permitir deletar uma ferramenta que não exista.

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [Postgress](https://www.postgresql.org/)
- [Swagger](https://swagger.io/)

### Bibliotecas/Frameworks

- [Express](https://expressjs.com/)
- [uuidv4](https://www.npmjs.com/package/uuidv4)

## ✍️ Author <a name = "author"></a>

👤 **Roberlan Carvalho**

- Github: [@roberlancarvalho](https://github.com/roberlancarvalho)
- LinkedIn: [@roberlancarvalho](https://linkedin.com/in/roberlancarvalho)
- Instagram: [@roberlancarvalho](https://instagram.com/roberlancarvalho)
- Twitter: [@roberlancarvalh](https://twitter.com/roberlancarvalh)
