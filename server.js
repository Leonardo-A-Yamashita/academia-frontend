const express = require('express');
const path = require('path');

const app = express();

// Servir os arquivos estáticos da pasta `dist`
app.use(express.static(path.join(__dirname, 'dist/<nome-do-projeto>')));

// Redirecionar todas as rotas para o `index.html`
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/<nome-do-projeto>/index.html'));
});

// Porta do servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
