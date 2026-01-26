# 📊 Tutorial Completo: Google Sheets API para Captação de Leads

## 🎯 O que vamos fazer

Criar um sistema onde:
1. Usuário preenche formulário na landing page
2. Dados são enviados automaticamente para uma planilha do Google Sheets
3. Você recebe os leads organizados em tempo real

## ⚙️ Passo a Passo

### 1️⃣ Criar a Planilha no Google Sheets

1. Acesse [sheets.google.com](https://sheets.google.com)
2. Crie uma nova planilha
3. Nomeie como "MusicSet - Leads"
4. Na primeira linha, adicione os cabeçalhos:
   ```
   | Timestamp | Nome | Email | Origem |
   ```

### 2️⃣ Criar o Google Apps Script

1. Na planilha, clique em **Extensões** > **Apps Script**
2. Delete o código padrão
3. Cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // Pegar a planilha ativa
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse dos dados recebidos
    var data = JSON.parse(e.postData.contents);
    
    // Formatar a data/hora
    var timestamp = new Date(data.timestamp);
    var formattedDate = Utilities.formatDate(timestamp, "GMT-3", "dd/MM/yyyy HH:mm:ss");
    
    // Adicionar uma nova linha com os dados
    sheet.appendRow([
      formattedDate,
      data.name,
      data.email,
      data.source || 'landing-page'
    ]);
    
    // Retornar sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retornar erro
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Função de teste (opcional)
function testPost() {
  var testData = {
    postData: {
      contents: JSON.stringify({
        name: "João Silva",
        email: "joao@teste.com",
        timestamp: new Date().toISOString(),
        source: "teste"
      })
    }
  };
  
  var result = doPost(testData);
  Logger.log(result.getContent());
}
```

4. Clique em **Salvar** (ícone de disquete)
5. Nomeie o projeto como "MusicSet Lead Capture"

### 3️⃣ Publicar como Web App

1. Clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de "Selecione o tipo"
3. Escolha **Aplicativo da Web**
4. Configure:
   - **Descrição**: "API de captura de leads"
   - **Executar como**: Eu (seu email)
   - **Quem tem acesso**: Qualquer pessoa
5. Clique em **Implantar**
6. **COPIE A URL** que aparece (algo como: `https://script.google.com/macros/s/AKfy...XYZ/exec`)
7. Clique em **Concluído**

⚠️ **IMPORTANTE**: Salve essa URL em algum lugar seguro!

### 4️⃣ Configurar no Projeto Next.js

1. No seu projeto, crie um arquivo `.env.local`:

```bash
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SUA_URL_AQUI/exec
```

2. Substitua `SUA_URL_AQUI` pela URL que você copiou

3. Reinicie o servidor de desenvolvimento:
```bash
npm run dev
```

### 5️⃣ Testar o Sistema

1. Acesse http://localhost:3000
2. Preencha o formulário com dados de teste
3. Clique em "Entrar na lista de espera"
4. Verifique sua planilha do Google Sheets
5. O lead deve aparecer instantaneamente! 🎉

## 🔧 Troubleshooting

### Erro: "Script function not found: doPost"
- Certifique-se de que salvou o script
- Verifique se o nome da função está correto (doPost)

### Erro: "Authorization required"
- Na primeira vez que implantar, vai pedir autorização
- Clique em "Revisar permissões"
- Escolha sua conta
- Clique em "Avançado" > "Acessar MusicSet Lead Capture (não seguro)"
- Autorize

### Leads não aparecem na planilha
- Verifique se a URL no .env.local está correta
- Teste a URL do script diretamente no navegador
- Veja os logs do Apps Script: Executar > Ver execuções

### CORS Error
- O Apps Script deve estar configurado como "Qualquer pessoa" no acesso
- Reimplante o script se necessário

## 📱 Extras Opcionais

### Receber Email Quando Alguém se Cadastrar

Adicione no final da função `doPost`:

```javascript
// Enviar email de notificação
MailApp.sendEmail({
  to: "musicseat.co@gmail.com",
  subject: "🎸 Novo Lead - MusicSet",
  body: `
    Novo cadastro!
    
    Nome: ${data.name}
    Email: ${data.email}
    Data: ${formattedDate}
  `
});
```

### Adicionar Validação de Email Duplicado

Adicione antes de `sheet.appendRow`:

```javascript
// Verificar se email já existe
var lastRow = sheet.getLastRow();
var emails = sheet.getRange(2, 3, lastRow - 1, 1).getValues();
var emailExists = emails.some(row => row[0] === data.email);

if (emailExists) {
  return ContentService
    .createTextOutput(JSON.stringify({ 
      'result': 'error', 
      'error': 'Email já cadastrado' 
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 🚀 Deploy no Vercel

Quando fizer deploy no Vercel:

1. Vá em **Settings** > **Environment Variables**
2. Adicione:
   - **Name**: `GOOGLE_SCRIPT_URL`
   - **Value**: Sua URL do script
3. Salve e redeploy

## 🎉 Pronto!

Agora você tem um sistema completo de captação de leads:
- ✅ Formulário bonito na landing page
- ✅ Dados salvos automaticamente no Google Sheets
- ✅ Totalmente grátis
- ✅ Fácil de gerenciar e exportar

Qualquer dúvida, é só avisar! 🎸
