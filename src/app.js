const express = require('express');
const clientesRoutes = require('./routes/clientesRoutes');

const app = express();
app.use(express.json());

app.use('/clientes', clientesRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando em http://localhost:3000');
});
