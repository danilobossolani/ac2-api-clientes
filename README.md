# AC2 - API de Clientes e Pedidos

API REST feita com Node.js e Express. Os dados ficam em memória.

## Como rodar

```bash
npm install
npm start
```

Servidor: http://localhost:3000

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| GET | /clientes | Lista todos os clientes |
| GET | /clientes/:id | Busca cliente pelo ID |
| GET | /clientes/:id/pedidos | Lista os pedidos do cliente |
| PUT | /clientes/:id | Atualiza nome, idade ou cidade |
| POST | /clientes/:id/pedidos | Adiciona um pedido ao cliente |
| GET | /clientes/cidade/:cidade | Lista clientes de uma cidade |
| DELETE | /clientes/:id | Remove um cliente |

Exemplo de body para POST /clientes/2/pedidos:

```json
{ "codigo": 104, "produto": "Monitor", "quantidade": 1 }
```

## Testes (prints)

Os prints dos testes no Postman/Thunder Client estão na pasta `prints/`.
