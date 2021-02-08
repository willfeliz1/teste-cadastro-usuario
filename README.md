<h1 align="center">
  teste-cadastro-usuario
</h1>

## 📕 Sobre
Teste para vaga de Dev em que deverá ser feito back-end e front-end do aplicativo com intuito de listar usuarios podendo edita-los e visualiza-los, como também ter a opção cadastrar usuarios novos. 

<img src="https://media.giphy.com/media/14RKHyZ5WBnbNjJHdQ/giphy.gif">

## ⚡ Tecnologias

### Back-End

- *NodeJS*
- *Express*
- *Class-transformer*
- *Multer*
- *Typeorm*
- *uuidv4*

### Front-End

- *React*
- *React-icons*
- *React-Router-DOM*
- *Axios*
- *Styled-components*
- *Formik*
- *Yup*
- *React-input-mask*

## 💻 Rodando o app

**Requirements**

- NodeJS
- Yarn/NPM
- Uma instância de Postgres (Docker)

**Clone o repositório**
```sh
git clone https://github.com/willfeliz1/teste-cadastro-usuario.git
```

**Configure as variáveis de ambiente**
- Duplique o arquivo .env.example, removendo a parte .example do nome (ficando apenas .env). Após isso, altere os valores conforme necessário.

**Dependencias e execução do BACK-END** </br>
*Certifique-se de que o container do Postgres esteja rodando*

```sh
docker run --name teste-postgres -e POSTGRES_USER=postgres -e POSTGRES_PASSWORD=docker -e POSTGRES_DB=teste-cadastro-usuario -p 5432:5432 -d postgres
```
```sh
cd backend 
yarn ou npm install
yarn typeorm migration:run
yarn dev
```

**Dependencias e execução do FRONT-END**
```sh
cd frontend
yarn ou npm install
yarn start
```


