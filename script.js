// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');

    // Anima o botão hambúrguer
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
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

// Form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pega os dados do formulário
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    // Monta o corpo do email
    const emailBody = `
Nome: ${nome}
Email: ${email}
Telefone: ${telefone}

Mensagem:
${mensagem}
    `.trim();

    // Monta o link mailto
    const mailtoLink = `mailto:gonextsolutions.contato@gmail.com?subject=Contato do Site - ${nome}&body=${encodeURIComponent(emailBody)}`;

    // Botão de feedback
    const button = contactForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.textContent = 'Abrindo email...';
    button.disabled = true;

    // Abre o cliente de email
    window.location.href = mailtoLink;

    // Feedback e reset
    setTimeout(() => {
        button.textContent = '✓ Email aberto!';
        button.style.background = 'var(--secondary-color)';

        // Reseta o formulário
        contactForm.reset();

        // Volta ao normal após 3 segundos
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
            button.style.background = '';
        }, 3000);
    }, 500);
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
document.querySelectorAll('.feature-card, .case-card, .team-member, .info-card').forEach(el => {
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

// Mensagem de boas-vindas no console
console.log('%c🚀 GoNext Tecnologia', 'font-size: 20px; color: #667eea; font-weight: bold;');
console.log('%cSite desenvolvido com ❤️ pela equipe GoNext', 'font-size: 12px; color: #4a5568;');
