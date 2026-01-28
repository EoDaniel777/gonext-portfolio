# 📋 Instruções de Deploy - GoNext Tecnologia

## ✅ Checklist Antes do Deploy

- [ ] Adicionar imagens dos cases de sucesso (`docs/case1.jpg` e `docs/case2.jpg`)
- [ ] Revisar informações de contato (email, telefone)
- [x] Nome da empresa confirmado: "GoNext Tecnologia"
- [ ] Verificar textos dos cases de sucesso

## 📸 Como Adicionar Imagens dos Cases

1. Prepare as imagens dos seus 2 projetos (barbearia e clínica)
2. Redimensione para aproximadamente 1200x800px (proporção 3:2)
3. Salve com os nomes:
   - `case1.jpg` → Projeto Barbearia
   - `case2.jpg` → Projeto Clínica
4. Coloque na pasta `docs/`

Se não tiver as imagens ainda, o site mostrará placeholders com "Em breve"

## 🚀 Deploy no GitHub Pages

### Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com
2. Clique em **New repository** (botão verde)
3. Configure:
   - **Repository name**: `gonext-portfolio` (ou outro nome que preferir)
   - **Description**: "Site institucional GoNext Tecnologia"
   - **Public** (para usar GitHub Pages gratuito)
   - NÃO marque "Initialize with README" (já temos um)
4. Clique em **Create repository**

### Passo 2: Conectar e Enviar o Código

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Criar primeiro commit
git commit -m "Initial commit: GoNext Tecnologia portfolio"

# Conectar com o repositório remoto
git remote add origin git@github.com:EoDaniel777/gonext-portfolio.git

# Renomear branch para main
git branch -M main

# Enviar código para o GitHub
git push -u origin main
```

### Passo 3: Ativar GitHub Pages

1. No seu repositório no GitHub, clique em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source** (Fonte):
   - Branch: selecione **main**
   - Folder: selecione **/ (root)**
4. Clique em **Save**
5. Aguarde 2-5 minutos

### Passo 4: Acessar seu Site

Seu site estará disponível em:
```
https://EoDaniel777.github.io/gonext-portfolio/
```

O GitHub mostrará o link exato na seção Pages.

## 🎨 Personalizações Sugeridas

### Alterar Nome da Empresa

Para alterar o nome da empresa (atualmente "GoNext Tecnologia"):

1. Abra `index.html`
2. Use Ctrl+F (ou Cmd+F no Mac)
3. Procure por "GoNext" e substitua pelo nome desejado
4. Salve o arquivo

### Alterar Informações de Contato

Edite a seção de contato no `index.html` (linha ~323):

```html
<div class="info-card">
    <div class="info-icon">📧</div>
    <h3>Email</h3>
    <p>seu-email@dominio.com.br</p> <!-- Altere aqui -->
</div>
<div class="info-card">
    <div class="info-icon">💬</div>
    <h3>WhatsApp</h3>
    <p>(XX) XXXXX-XXXX</p> <!-- Altere aqui -->
</div>
```

### Alterar Cores do Site

Abra `styles.css` e modifique as variáveis no início do arquivo:

```css
:root {
    --primary-color: #667eea;      /* Azul principal */
    --secondary-color: #10b981;    /* Verde */
}
```

## 🔄 Atualizando o Site

Depois que estiver online, para fazer alterações:

```bash
# Após editar os arquivos
git add .
git commit -m "Descrição da alteração"
git push

# O site será atualizado automaticamente em 1-2 minutos
```

## 🌐 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio (ex: www.agendasmart.com.br):

1. Compre um domínio em algum provedor (Registro.br, GoDaddy, etc)
2. No GitHub Pages Settings, adicione o domínio em **Custom domain**
3. Configure os DNS do seu domínio apontando para o GitHub:
   - CNAME para `EoDaniel777.github.io`

## 💡 Dicas

- **Teste local**: Abra o `index.html` direto no navegador antes de fazer deploy
- **Validação**: Use https://validator.w3.org para validar o HTML
- **Performance**: Use https://pagespeed.web.dev para testar velocidade
- **SEO**: Adicione Google Analytics e Search Console depois

## 🆘 Problemas Comuns

**Site não aparece após ativar Pages:**
- Aguarde 5-10 minutos
- Verifique se a branch está correta (main)
- Certifique-se que o repositório é público

**Imagens não carregam:**
- Verifique os nomes dos arquivos (case1.jpg, case2.jpg)
- Confirme que estão na pasta `docs/`
- Letras maiúsculas/minúsculas importam no Linux

**Formulário não envia:**
- O formulário atual é apenas visual
- Para funcionar, integre com Formspree, EmailJS ou similar

## 📞 Suporte

Se tiver dúvidas, consulte:
- GitHub Pages: https://docs.github.com/pages
- Git: https://git-scm.com/doc

---

Boa sorte com o deploy! 🚀
