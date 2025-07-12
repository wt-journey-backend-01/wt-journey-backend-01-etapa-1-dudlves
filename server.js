const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/sugestao', (req, res) => {
  const { nome, ingredientes } = req.query;
    
  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sugestão Recebida - DevBurger</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <div class="header-container">
          <h1>Obrigado pela sua sugestão!</h1>
          <div class="sugestao-info">
            <h2>Dados da sua sugestão:</h2>
            <p><strong>Nome do lanche:</strong> ${nome || 'Não informado'}</p>
            <p><strong>Ingredientes:</strong> ${ingredientes || 'Não informado'}</p>
          </div>
          <a href="/" class="btn">Voltar ao início</a>
        </div>
      </body>
    </html>`;
  res.send(html);
});

app.get('/contato', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'contato.html'));
});

app.post('/contato', (req, res) => {
  const { nome, email, assunto, mensagem } = req.body;

  const html = `
    <!DOCTYPE html>
    <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contato Recebido - DevBurger</title>
        <link rel="stylesheet" href="/css/style.css">
      </head>
      <body>
        <div class="header-container">
          <h1>Obrigado pelo seu contato!</h1>
          <div class="contato-info">
            <h2>Dados recebidos:</h2>
            <p><strong>Nome:</strong> ${nome || 'Não informado'}</p>
            <p><strong>Email:</strong> ${email || 'Não informado'}</p>
            <p><strong>Assunto:</strong> ${assunto || 'Não informado'}</p>
            <p><strong>Mensagem:</strong> ${mensagem || 'Não informada'}</p>
          </div>
          <a href="/" class="btn">Voltar ao início</a>
        </div>
      </body>
    </html>`;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Servidor da DevBurger rodando em localhost:${PORT}`);
});

