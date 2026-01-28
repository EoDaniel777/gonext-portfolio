# GoNext Tecnologia - Portfólio

Site institucional da GoNext Tecnologia, empresa de desenvolvimento de soluções tecnológicas sob medida, com expertise em sistemas de agendamento para barbearias, clínicas e consultórios.

## 🚀 Sobre o Projeto

Este é um site estático desenvolvido para apresentar os serviços, cases de sucesso e equipe da GoNext Tecnologia. O site é responsivo, moderno e otimizado para SEO.

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3 (com variáveis CSS)
- JavaScript (Vanilla)
- Google Fonts (Inter)

## 📁 Estrutura do Projeto

```
portifolio/
├── index.html          # Página principal
├── styles.css          # Estilos do site
├── script.js           # Interações e animações
├── docs/               # Recursos
│   ├── equipe.png      # Foto da equipe
│   ├── case1.jpg       # Imagem do case 1 (adicionar)
│   └── case2.jpg       # Imagem do case 2 (adicionar)
└── README.md           # Este arquivo
```

## 🎨 Customização

### Cores

As cores principais podem ser alteradas no arquivo `styles.css` nas variáveis CSS:

```css
:root {
    --primary-color: #667eea;    /* Cor principal */
    --secondary-color: #10b981;  /* Cor secundária */
    --text-dark: #1a202c;        /* Texto escuro */
    --text-light: #4a5568;       /* Texto claro */
}
```

### Conteúdo

Você pode editar o conteúdo diretamente no arquivo `index.html`:

- **Nome da empresa**: Atualmente "GoNext Tecnologia"
- **Informações de contato**: Seção `#contato`
- **Cases**: Seção `#cases`
- **Sobre**: Seção `#sobre`

### Imagens dos Cases

Para adicionar as imagens dos seus projetos:

1. Adicione as imagens na pasta `docs/` com os nomes:
   - `case1.jpg` - Projeto Barbearia
   - `case2.jpg` - Projeto Clínica

2. As imagens serão carregadas automaticamente

Formatos recomendados: JPG, PNG
Tamanho recomendado: 1200x800px (proporção 3:2)

## 🌐 Deploy no GitHub Pages

### 1. Criar o Repositório

```bash
# Inicializar repositório Git
git init

# Adicionar arquivos
git add .

# Primeiro commit
git commit -m "Initial commit: GoNext Tecnologia portfolio"

# Conectar com repositório no GitHub
git remote add origin git@github.com:EoDaniel777/gonext-portfolio.git
git branch -M main
git push -u origin main
```

### 2. Ativar GitHub Pages

1. Acesse o repositório no GitHub
2. Vá em **Settings** > **Pages**
3. Em **Source**, selecione a branch `main` e a pasta `/ (root)`
4. Clique em **Save**
5. Aguarde alguns minutos e seu site estará disponível em:
   `https://eodaniel777.github.io/gonext-portfolio/`

## 📱 Recursos

- ✅ Design responsivo (mobile, tablet, desktop)
- ✅ Navegação suave entre seções
- ✅ Animações ao scroll
- ✅ Menu mobile funcional
- ✅ Formulário de contato
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🎯 Seções do Site

1. **Home (Hero)**: Apresentação da empresa com call-to-action
2. **Sobre**: Informações sobre a empresa e diferenciais
3. **Cases de Sucesso**: Projetos desenvolvidos
4. **Equipe**: Apresentação do time
5. **Contato**: Formulário e informações de contato

## 📝 Próximos Passos

- [ ] Adicionar imagens dos cases de sucesso
- [ ] Integrar formulário de contato com backend/serviço de email
- [ ] Adicionar Google Analytics
- [ ] Configurar domínio personalizado (opcional)
- [ ] Adicionar mais cases conforme novos projetos

## 🤝 Contato

**GoNext Tecnologia**
- Email: contato@gonext.com.br
- Desenvolvido por: Daniel e equipe

---

🚀 Desenvolvido com ❤️ pela equipe GoNext Tecnologia
