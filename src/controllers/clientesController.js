let clientes = [
  {
    id: 1,
    nome: 'Ana Souza',
    idade: 28,
    cidade: 'Sorocaba',
    pedidos: [
      { codigo: 101, produto: 'Notebook', quantidade: 1 },
      { codigo: 102, produto: 'Mouse', quantidade: 2 }
    ]
  },
  {
    id: 2,
    nome: 'Bruno Lima',
    idade: 35,
    cidade: 'Campinas',
    pedidos: [{ codigo: 103, produto: 'Teclado', quantidade: 1 }]
  },
  {
    id: 3,
    nome: 'Carla Mendes',
    idade: 22,
    cidade: 'Sorocaba',
    pedidos: []
  }
];

function listarClientes(req, res) {
  res.json(clientes);
}

function buscarPorId(req, res) {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }
  res.json(cliente);
}

function listarPedidos(req, res) {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }
  res.json(cliente.pedidos);
}

function atualizarCliente(req, res) {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { nome, idade, cidade } = req.body;
  if (nome) cliente.nome = nome;
  if (idade) cliente.idade = idade;
  if (cidade) cliente.cidade = cidade;

  res.json(cliente);
}

function adicionarPedido(req, res) {
  const id = parseInt(req.params.id);
  const cliente = clientes.find(c => c.id === id);

  if (!cliente) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  const { codigo, produto, quantidade } = req.body;
  const novoPedido = { codigo, produto, quantidade };
  cliente.pedidos.push(novoPedido);

  res.status(201).json(cliente);
}

function listarPorCidade(req, res) {
  const cidade = req.params.cidade.toLowerCase();
  const resultado = clientes.filter(c => c.cidade.toLowerCase() === cidade);
  res.json(resultado);
}

function removerCliente(req, res) {
  const id = parseInt(req.params.id);
  const index = clientes.findIndex(c => c.id === id);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Id não existente' });
  }

  clientes.splice(index, 1);
  res.json({ mensagem: 'Cliente removido com sucesso' });
}

module.exports = {
  listarClientes,
  buscarPorId,
  listarPedidos,
  atualizarCliente,
  adicionarPedido,
  listarPorCidade,
  removerCliente
};
