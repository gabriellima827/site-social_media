$(document).ready(function () {
    // Função para alternar o menu móvel
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $(this).find('i').toggleClass('fa-bars fa-x');
    });

    // Efeito de sombra no header ao rolar a página
    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
    });

    // Validação do formulário de contato
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Impede o envio real do formulário, você pode remover isso se for enviar via servidor
            
            // Exibe a mensagem de sucesso
            const successMessage = document.getElementById("success-message");
            if (successMessage) {
                successMessage.classList.add("show");
            }

            // Reseta o formulário
            contactForm.reset();
        
            // Esconde a mensagem após 3 segundos
            setTimeout(function() {
                if (successMessage) {
                    successMessage.classList.remove("show");
                }
            }, 3000);
        });
    } else {
        console.error("Formulário não encontrado!");
    }

    // ScrollReveal
    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonials', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });
});