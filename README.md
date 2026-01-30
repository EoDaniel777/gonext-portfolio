# GoNext Tecnologia - Portfólio

Site institucional da GoNext Tecnologia, empresa especializada em desenvolvimento de sistemas SaaS de agendamento para barbearias, clínicas e consultórios. Oferecemos planos flexíveis a partir de R$ 59,90/mês com tecnologias modernas como Go, Firebase, automação com IA e integração WhatsApp.

## 🚀 Sobre o Projeto

Site institucional completo desenvolvido para apresentar os serviços, planos, cases de sucesso e equipe da GoNext Tecnologia. O site é totalmente responsivo, acessível, otimizado para performance e SEO, com design profissional, meta tags Open Graph para compartilhamento em redes sociais, calculadora de preços interativa e seção FAQ.

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Variáveis CSS, Grid, Flexbox e Media Queries avançadas
- **JavaScript (Vanilla ES6+)** - Interatividade sem dependências
- **Google Fonts** - Tipografia Inter
- **Font Awesome 6.5.1** - Ícones profissionais
- **Devicon 2.15.1** - Ícones de tecnologias
- **FormSubmit** - Serviço de envio de emails do formulário

## 📁 Estrutura do Projeto

```
gonext-portfolio/
├── index.html          # Página principal
├── styles.css          # Estilos do site
├── script.js           # Interações e animações
├── docs/               # Recursos
│   └── logo.png        # Logo da empresa GoNext
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

### Logo

A logo da empresa está localizada em `docs/logo.png` e é utilizada:
- No cabeçalho (navbar)
- Na seção hero (com animação flutuante)
- No rodapé (footer)

Para substituir a logo, basta substituir o arquivo `docs/logo.png` mantendo o mesmo nome.

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

## 📱 Recursos e Funcionalidades

### Design e UX
- ✅ Design responsivo profissional (mobile, tablet, desktop)
- ✅ 7 breakpoints para responsividade perfeita
- ✅ Animações suaves ao scroll e hover effects
- ✅ Menu mobile com hamburger animado
- ✅ Navegação suave entre seções

### Seção de Preços
- ✅ 3 planos (Básico R$ 59,90, Plus R$ 149,90, Pro R$ 349,90)
- ✅ Toggle entre assinatura mensal e compra única
- ✅ Cards com destaque para plano mais popular
- ✅ Informações sobre funcionalidades de cada plano

### Calculadora Interativa
- ✅ Seleção de funcionalidades personalizadas
- ✅ Cálculo automático de preço mensal e único
- ✅ Lista dinâmica de funcionalidades selecionadas
- ✅ Botão direto para solicitar orçamento

### FAQ
- ✅ 10 perguntas frequentes com respostas detalhadas
- ✅ Accordion interativo (abre/fecha ao clicar)
- ✅ Design clean e fácil leitura

### Otimizações e Acessibilidade
- ✅ **Meta tags Open Graph** para Facebook, WhatsApp, LinkedIn
- ✅ **Meta tags Twitter Card** para compartilhamento no Twitter
- ✅ **SEO completo** com meta description e keywords
- ✅ **Favicon personalizado** com logo da empresa
- ✅ **Preload de fontes** para performance
- ✅ **ARIA labels** para acessibilidade
- ✅ **Focus styles** para navegação por teclado
- ✅ **Suporte a prefers-reduced-motion**
- ✅ **Botão WhatsApp flutuante** com animação pulse

### Formulário de Contato
- ✅ Integração com FormSubmit (sem backend)
- ✅ Modal de sucesso após envio
- ✅ Validação HTML5
- ✅ Feedback visual ao enviar

### Outros
- ✅ Popup promocional (exibido após scroll)
- ✅ Lazy loading de imagens
- ✅ Links para GitHub e LinkedIn da equipe
- ✅ Ícones de tecnologias (Font Awesome + Devicon)
- ✅ Performance otimizada

## 🎯 Seções do Site

1. **Home (Hero)** - Apresentação da empresa com estatísticas e call-to-action
2. **Sobre** - Informações sobre a empresa, diferenciais e stack tecnológica
3. **Cases de Sucesso** - Portfólio de projetos desenvolvidos com tecnologias utilizadas
4. **Preços** - Três planos (Básico, Plus, Pro) com toggle assinatura/compra única
5. **Calculadora de Preço** - Ferramenta interativa para montar plano personalizado
6. **FAQ** - 10 perguntas frequentes com accordion interativo
7. **Equipe** - Apresentação do time com links para GitHub e LinkedIn
8. **Contato** - Formulário integrado com FormSubmit e informações de contato

## 💰 Planos e Preços

### Plano Básico - R$ 59,90/mês ou R$ 4.000 único
- Agendamento Online
- Firebase Authentication
- Painel Administrativo
- Até 2 profissionais
- Notificações internas
- Relatórios básicos
- Suporte por email

### Plano Plus - R$ 149,90/mês ou R$ 8.500 único (Mais Popular)
- Tudo do Básico
- Até 5 profissionais
- PDV/Sistema de Comandas
- Gestão Financeira
- Relatórios avançados
- Suporte prioritário
- **Deploy + Domínio Grátis (1 ano)**

### Plano Pro - R$ 349,90/mês ou R$ 18.000 único
- Tudo do Plus
- Profissionais ilimitados
- Multi-filiais
- **Integração WhatsApp**
- **IA + Automação (n8n + Evo API)**
- **Customização Visual (Logo, Fontes)**
- Editor de Imagens no Painel
- Firebase Database
- Backup automático
- Suporte 24/7
- **Deploy + Domínio Grátis (1 ano)**

## 📝 Checklist de Implementação

- [x] Design profissional com ícones interativos
- [x] Responsividade completa (7 breakpoints)
- [x] Seção de preços com 3 planos
- [x] Toggle assinatura/compra única
- [x] Calculadora de preço interativa
- [x] FAQ com 10 perguntas
- [x] Meta tags Open Graph e Twitter Card
- [x] SEO otimizado
- [x] Favicon personalizado
- [x] Botão WhatsApp flutuante
- [x] Acessibilidade (ARIA, focus styles)
- [x] Performance (preload, lazy loading)
- [x] Formulário de contato com FormSubmit
- [x] Modal de sucesso
- [x] Links LinkedIn da equipe
- [ ] Google Analytics (futuro)
- [ ] Domínio personalizado (em andamento)
- [ ] Email corporativo (planejado)

## 👥 Equipe

**GoNext Tecnologia**
- **Daniel Alisom** - CIO & Backend Developer - [@EoDaniel777](https://github.com/EoDaniel777)
- **Bruno Santiago** - Frontend Developer - [@B-Evil](https://github.com/B-Evil)
- **Thiago Santiago** - Frontend Developer - [@Thaysantzs](https://github.com/Thaysantzs)

## 🤝 Contato

- **Email**: gonextsolutions.contato@gmail.com
- **WhatsApp**: (61) 98426-7420
- **Website**: [GoNext Portfolio](https://eodaniel777.github.io/gonext-portfolio/)
- **Localização**: Atendemos todo o Brasil

## 🔗 Links Úteis

- [Demonstração Barbearia Silva](https://barbearia-silva.onrender.com/) - Sistema de agendamento em produção
- [GitHub - Daniel Alisom](https://github.com/EoDaniel777)
- [GitHub - Bruno Santiago](https://github.com/B-Evil)
- [GitHub - Thiago Santiago](https://github.com/Thaysantzs)
- [LinkedIn - Daniel](https://www.linkedin.com/in/danielalisom/)
- [LinkedIn - Bruno](https://www.linkedin.com/in/bruno-santiago-code0071/)
- [LinkedIn - Thiago](https://www.linkedin.com/in/thiagosantiagodev/)

---

🚀 Desenvolvido com ❤️ pela equipe GoNext Tecnologia
