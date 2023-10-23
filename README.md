# IP4Y

Este é um projeto React que cria um sistema simples de cadastro e listagem de usuários.

## Funcionalidades

- Cadastro de usuários na rota `/`
- Listagem de usuários cadastrados na rota `/list`

## Tecnologias

- React
- React Router DOM
- CSS

## Estrutura de pastas

- `src/` - contém os arquivos da aplicação
  - `App.js` - componente principal que renderiza as rotas
  - `App.css` - estilos globais 
  - `routes/` - componentes de rota
    - `RegisterRoute.js` - rota de cadastro
    - `ListRoute.js` - rota de listagem
  - `components/` - outros componentes compartilhados
    - `Form.jsx` - componente de formulário de registro de usuário
    - `List.jsx` - componente de listagem de registro de usuários
    - `RecordEdit.jsx` - componente de edição de registro de usuário
    - `RecordList.jsx` - componente de listagem de registro de usuários

## Setup

Para rodar o projeto localmente:

npm install
npm start

Isso iniciará o servidor de desenvolvimento e abrirá a aplicação em `http://localhost:3000`

## Licença

MIT
