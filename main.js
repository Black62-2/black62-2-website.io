document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        } else if (href.endsWith('.html') || href.endsWith('/')) {
            return true;
        } else {
            return true;
        }
    });
});

const currentPage = window.location.pathname;
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        setTimeout(() => {
            const message = document.createElement('p');
            message.textContent = 'Formulário enviado com sucesso!';
            message.classList.add('success-message');
            form.appendChild(message);
        }, 1000);
    });
});

const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
    const question = item.querySelector('h3');
    const answer = item.querySelector('p');

    if (question && answer) {
        question.addEventListener('click', () => {
            answer.classList.toggle('show');
        });
    }
});

const headerUsername = document.getElementById('username');
const textToType = '@Black62.2 — Site';
let index = 0;

function typeWriterEffect() {
    if (headerUsername) {
        if (index < textToType.length) {
            headerUsername.textContent = textToType.substring(0, index + 1);
            index++;
            setTimeout(typeWriterEffect, 100);
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    typeWriterEffect();
});