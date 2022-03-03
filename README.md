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

- **`POST /products`**: Rota para cadastrar um novo produto. O corpo da requisição deve conter as informações da do produto a ser cadastrado, sem o ID (gerado automaticamente pelo servidor).

- **`GET /products`**: Rota para listar todos os produtos.

- **`DELETE /products/{id}`**: Rota para deletar um produto específico.

- **`PUT /products/{id}`**: Rota para editar um produto.


## Como contribuir?

Você pode utilizar esse projeto, para fornecer dados e cadastrar para uma aplicação Front-End desenvolvida em qualquer plataforma, como Angular, ReactJS, VueJS, etc.

### Requisitos

Ter instalado pelo menos um gerenciador de pacotes do Node, [Npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/).

### Installing

Executar na raiz do projeto o seguinte comando para instalar as dependências `yarn install` ou `npm install`

Para executar a API localmente, deve ter um container com Postgress com o nome correto para que o typeorm possa se conectar ao seu banco de dados.

Obs: Usar empplo de arquivo '.env' que está no diretório principal do projeto com o nome ".env.exemple"

## 🎈 Uso <a name="usage"></a>

```sh
yarn dev
```

## ⛏️ Construído utilizando <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Typeorm](https://typeorm.io/#/)
- [Postgress](https://www.postgresql.org/)

### Bibliotecas/Frameworks

- [Express](https://expressjs.com/)
- [uuidv4](https://www.npmjs.com/package/uuidv4)

## ✍️ Author <a name = "author"></a>

👤 **Roberlan Carvalho**

- Github: [@roberlancarvalho](https://github.com/roberlancarvalho)
- LinkedIn: [@roberlancarvalho](https://linkedin.com/in/roberlancarvalho)
- Instagram: [@roberlancarvalho](https://instagram.com/roberlancarvalho)
- Twitter: [@roberlancarvalh](https://twitter.com/roberlancarvalh)
