const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('Servidor do Sistema de Monitoramento está funcionando! 🚀');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
