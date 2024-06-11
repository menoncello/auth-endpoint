
# Auth Endpoint

Este projeto implementa um endpoint de autenticação usando Node.js com TypeScript. O endpoint utiliza JWT para autenticação e inclui testes unitários para garantir o bom funcionamento.

## Requisitos

- Node.js
- npm

## Configuração do Projeto

1. Clone o repositório:
    ```sh
    git clone <URL-do-repositorio>
    cd auth-endpoint
    ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Estrutura do Projeto

```
src/
  controllers/
    authController.ts
  middleware/
    authMiddleware.ts
  routes/
    authRoutes.ts
  app.ts
  server.ts
tests/
  auth.test.ts
```

## Executar o Servidor

Para iniciar o servidor em modo de desenvolvimento:
```sh
npm run dev
```

O servidor estará disponível em `http://localhost:3000`.

## Endpoint de Autenticação

### POST /api/auth/login

Este endpoint aceita credenciais de usuário e retorna um token JWT se as credenciais forem válidas.

#### Parâmetros de Requisição

- `username`: O nome de usuário (string).
- `password`: A senha do usuário (string).

#### Exemplo de Requisição

```sh
curl -X POST http://localhost:3000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"username": "admin", "password": "password"}'
```

#### Respostas

- `200 OK`: Retorna um token JWT.
  ```json
  {
    "token": "seu_token_jwt"
  }
  ```

- `400 Bad Request`: Retorna se as credenciais estiverem ausentes.
  ```json
  {
    "message": "Bad Request"
  }
  ```

- `403 Forbidden`: Retorna se as credenciais forem inválidas.
  ```json
  {
    "message": "Forbidden"
  }
  ```

## Executar os Testes

Para executar os testes unitários:
```sh
npm test
```

## Dependências

- express
- jsonwebtoken
- body-parser

## Dependências de Desenvolvimento

- typescript
- @types/node
- @types/express
- @types/jsonwebtoken
- ts-node
- nodemon
- jest
- @types/jest
- ts-jest
- supertest
- @types/supertest

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
