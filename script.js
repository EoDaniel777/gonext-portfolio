// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    const isActive = navMenu.classList.contains('active');
    navMenu.classList.toggle('active');

    // Atualiza aria-expanded para acessibilidade
    mobileMenuToggle.setAttribute('aria-expanded', !isActive);

    // Anima o botão hambúrguer
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (!isActive) {
        spans[0].style.transform = 'rotate(45deg) translateY(10px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Form submission - FormSubmit feedback
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    // Feedback visual ao enviar
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;

    // O FormSubmit cuida do envio, apenas mostramos feedback
    // O formulário será submetido normalmente (sem preventDefault)
});

// Success Message Modal
const successMessage = document.getElementById('successMessage');
const closeSuccessBtn = document.getElementById('closeSuccess');

// Verifica se há parâmetro de sucesso na URL
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === 'true') {
    // Mostra o modal de sucesso
    successMessage.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Remove o parâmetro da URL sem recarregar a página
    const newUrl = window.location.pathname;
    window.history.replaceState({}, document.title, newUrl);
}

// Fechar modal de sucesso
function closeSuccessMessage() {
    successMessage.classList.remove('active');
    document.body.style.overflow = '';
}

closeSuccessBtn.addEventListener('click', closeSuccessMessage);

// Fechar com ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && successMessage.classList.contains('active')) {
        closeSuccessMessage();
    }
});

// Fechar clicando fora
successMessage.addEventListener('click', (e) => {
    if (e.target === successMessage) {
        closeSuccessMessage();
    }
});

// Intersection Observer para animações ao scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa elementos para animação
document.querySelectorAll('.feature-card, .case-card, .team-member, .info-card, .depoimento-card, .stat-card').forEach(el => {
    observer.observe(el);
});

// Atualiza o ano no footer automaticamente
const currentYear = new Date().getFullYear();
document.querySelector('.footer-bottom p').textContent =
    `© ${currentYear} GoNext Tecnologia. Todos os direitos reservados.`;

// Analytics de navegação (opcional)
document.querySelectorAll('.nav-link, .btn').forEach(element => {
    element.addEventListener('click', (e) => {
        const action = e.target.textContent.trim();
        console.log(`Usuário clicou em: ${action}`);
        // Aqui você pode integrar com Google Analytics ou similar
    });
});

// Adiciona efeito de hover nos cards
const cards = document.querySelectorAll('.feature-card, .case-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Lazy loading para imagens
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Popup Modal
const popup = document.getElementById('promotionPopup');
const closePopupBtn = document.getElementById('closePopup');
let popupShown = false;

// Verifica se o popup já foi mostrado
const hasSeenPopup = localStorage.getItem('gonext_popup_shown');

// Função para mostrar o popup
function showPopup() {
    if (!hasSeenPopup && !popupShown) {
        popup.classList.add('active');
        popupShown = true;
        document.body.style.overflow = 'hidden'; // Previne scroll quando popup está aberto
    }
}

// Função para fechar o popup
function closePopup() {
    popup.classList.remove('active');
    document.body.style.overflow = ''; // Restaura scroll
    localStorage.setItem('gonext_popup_shown', 'true'); // Marca como visto
}

// Evento de scroll para mostrar o popup
let scrollThreshold = 500; // Pixels de scroll antes de mostrar o popup
window.addEventListener('scroll', () => {
    if (window.pageYOffset > scrollThreshold && !hasSeenPopup && !popupShown) {
        showPopup();
    }
});

// Fechar popup ao clicar no botão
closePopupBtn.addEventListener('click', closePopup);

// Fechar popup ao clicar fora dele
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        closePopup();
    }
});

// Fechar popup com tecla ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains('active')) {
        closePopup();
    }
});

// Toggle de Preços (Assinatura/Compra)
const pricingToggle = document.getElementById('pricingToggle');
const labelAssinatura = document.getElementById('labelAssinatura');
const labelCompra = document.getElementById('labelCompra');
const priceValues = document.querySelectorAll('.price-value');
const pricePeriods = document.querySelectorAll('.price-period');

// Inicializa labels
labelAssinatura.classList.add('active');

pricingToggle.addEventListener('change', function() {
    const isCompra = this.checked;

    // Atualiza labels
    if (isCompra) {
        labelAssinatura.classList.remove('active');
        labelCompra.classList.add('active');
    } else {
        labelAssinatura.classList.add('active');
        labelCompra.classList.remove('active');
    }

    // Atualiza preços
    priceValues.forEach(priceElement => {
        const monthlyPrice = priceElement.getAttribute('data-monthly');
        const onetimePrice = priceElement.getAttribute('data-onetime');

        if (isCompra) {
            priceElement.textContent = onetimePrice;
        } else {
            priceElement.textContent = monthlyPrice;
        }
    });

    // Atualiza período
    pricePeriods.forEach(period => {
        if (isCompra) {
            period.textContent = ' única';
        } else {
            period.textContent = '/mês';
        }
    });
});

// Event listeners para botões de planos
document.querySelectorAll('.btn-plan').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = this.closest('.pricing-card');
        const planName = card.querySelector('.plan-name').textContent;
        const isCompra = pricingToggle.checked;
        const tipo = isCompra ? 'Compra Única' : 'Assinatura Mensal';

        // Rola para o formulário de contato
        const contatoSection = document.getElementById('contato');
        const offsetTop = contatoSection.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });

        // Preenche o campo de mensagem
        const mensagemField = document.getElementById('mensagem');
        mensagemField.value = `Olá! Tenho interesse no plano ${planName} - ${tipo}. Gostaria de mais informações.`;
        mensagemField.focus();

        console.log(`Interesse no plano: ${planName} - ${tipo}`);
    });
});

// Função para formatar valores em Real Brasileiro
function formatarReal(valor) {
    return valor.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

// Calculadora de Preço
const BASE_PRICE = 59.90;
const ONETIME_MULTIPLIER = 45; // Reduzido para não passar muito do plano Pro

function updateCalculator() {
    let totalMonthly = BASE_PRICE;
    let selectedFeatures = [
        'Agendamento Online',
        'Firebase Authentication',
        'Painel Administrativo'
    ];

    // Coleta funcionalidades adicionais
    const features = document.querySelectorAll('input[name="feature"]:checked:not(:disabled)');
    features.forEach(feature => {
        totalMonthly += parseFloat(feature.value);
        selectedFeatures.push(feature.getAttribute('data-name'));
    });

    // Capacidade
    const capacity = document.querySelector('input[name="capacity"]:checked');
    if (capacity) {
        totalMonthly += parseFloat(capacity.value);
        selectedFeatures.push(capacity.getAttribute('data-name'));
    }

    // Hospedagem
    const hosting = document.querySelector('input[name="hosting"]:checked');
    if (hosting) {
        const hostingValue = parseFloat(hosting.value);
        if (hostingValue > 0) {
            totalMonthly += hostingValue;
            selectedFeatures.push(hosting.getAttribute('data-name'));
        }
    }

    // Calcula valor único
    const totalOnetime = totalMonthly * ONETIME_MULTIPLIER;

    // Atualiza interface com formatação brasileira
    document.getElementById('totalMonthly').textContent = `R$ ${formatarReal(totalMonthly)}`;
    document.getElementById('totalOnetime').textContent = `R$ ${formatarReal(totalOnetime)}`;

    // Atualiza lista de funcionalidades
    const featuresList = document.getElementById('selectedFeatures');
    featuresList.innerHTML = selectedFeatures.map(f => `<li><i class="fas fa-check"></i> ${f}</li>`).join('');

    // Atualiza extras
    const extrasContainer = document.getElementById('extrasContainer');
    const extras = [];

    features.forEach(feature => {
        extras.push({
            name: feature.getAttribute('data-name'),
            value: parseFloat(feature.value)
        });
    });

    if (capacity && parseFloat(capacity.value) > 0) {
        extras.push({
            name: capacity.getAttribute('data-name'),
            value: parseFloat(capacity.value)
        });
    }

    if (hosting && parseFloat(hosting.value) > 0) {
        extras.push({
            name: hosting.getAttribute('data-name'),
            value: parseFloat(hosting.value)
        });
    }

    if (extras.length > 0) {
        extrasContainer.innerHTML = extras.map(extra =>
            `<div class="extra-line">
                <span>${extra.name}:</span>
                <strong>+R$ ${formatarReal(extra.value)}</strong>
            </div>`
        ).join('');
    } else {
        extrasContainer.innerHTML = '';
    }
}

// Event listeners para calculadora
document.querySelectorAll('.calculadora input[type="checkbox"], .calculadora input[type="radio"]').forEach(input => {
    input.addEventListener('change', updateCalculator);
});

// Inicializa calculadora
if (document.querySelector('.calculadora')) {
    updateCalculator();
}

// Chat Widget WhatsApp
const whatsappButton = document.getElementById('whatsappButton');
const chatWidget = document.getElementById('chatWidget');
const chatClose = document.getElementById('chatClose');
const chatForm = document.getElementById('chatForm');
const chatWhatsappBtn = document.getElementById('chatWhatsappBtn');
const chatEmailBtn = document.getElementById('chatEmailBtn');
const chatMessageField = document.getElementById('chatMessage');

// Auto-crescimento da caixa de mensagem conforme o usuário digita
// (o CSS limita a altura máxima; ao atingir o limite, aparece a barra de rolagem)
function autoGrowChat() {
    chatMessageField.style.height = 'auto';
    chatMessageField.style.height = chatMessageField.scrollHeight + 'px';
}
chatMessageField.addEventListener('input', autoGrowChat);

// Toggle chat widget
whatsappButton.addEventListener('click', () => {
    chatWidget.classList.toggle('active');
});

// Fechar chat
chatClose.addEventListener('click', () => {
    chatWidget.classList.remove('active');
});

// Fechar chat ao clicar fora
document.addEventListener('click', (e) => {
    if (!chatWidget.contains(e.target) && !whatsappButton.contains(e.target)) {
        chatWidget.classList.remove('active');
    }
});

// Botão WhatsApp (não submete o formulário)
chatWhatsappBtn.addEventListener('click', () => {
    const nome = document.getElementById('chatName').value.trim();
    const mensagem = document.getElementById('chatMessage').value.trim();

    if (!nome || !mensagem) {
        alert('Por favor, preencha seu nome e mensagem.');
        return;
    }

    const textoCompleto = `Olá! Meu nome é ${nome}.\n\n${mensagem}`;
    const whatsappUrl = `https://wa.me/5561984267420?text=${encodeURIComponent(textoCompleto)}`;

    // Abre WhatsApp
    window.open(whatsappUrl, '_blank');

    // Feedback visual
    chatWhatsappBtn.innerHTML = '<i class="fas fa-check"></i> Enviado!';
    setTimeout(() => {
        chatWidget.classList.remove('active');
        chatForm.reset();
        autoGrowChat(); // volta a caixa de mensagem à altura inicial
        chatWhatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar pelo WhatsApp';
    }, 1500);
});

// Botão Email (submete o formulário via FormSubmit)
chatForm.addEventListener('submit', (e) => {
    // Valida os campos
    const nome = document.getElementById('chatName').value.trim();
    const mensagem = document.getElementById('chatMessage').value.trim();

    if (!nome || !mensagem) {
        e.preventDefault();
        alert('Por favor, preencha seu nome e mensagem.');
        return;
    }

    // Configura o redirect para voltar ao site com parâmetro de sucesso
    const currentUrl = window.location.href.split('?')[0]; // Remove parâmetros existentes
    document.getElementById('chatRedirect').value = currentUrl + '?success=true';

    // Feedback visual
    chatEmailBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    chatEmailBtn.disabled = true;

    // O FormSubmit cuida do envio (não usa preventDefault)
});

// Nota: A verificação de sucesso do chat já é tratada pelo código
// do formulário de contato, pois ambos usam o mesmo parâmetro ?success=true

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('active');
            otherItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
        });

        // Toggle do item atual
        if (!isActive) {
            item.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
        }
    });
});

// Mensagem de boas-vindas no console
console.log('%c🚀 GoNext Tecnologia', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cSite desenvolvido com ❤️ pela equipe GoNext', 'font-size: 12px; color: #4a5568;');
