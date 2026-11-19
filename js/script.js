/* =======================================================
   JAVASCRIPT GLOBAL SOLUTION - ALIMENTABRASIL
   ======================================================= */

// INTERAÇÃO 1: Menu Hambúrguer Responsivo
const btnMenu = document.querySelector('.hamburger-btn');
const navMenu = document.querySelector('.nav-menu');

if (btnMenu && navMenu) {
    btnMenu.addEventListener('click', function () {
        navMenu.classList.toggle('active');
        btnMenu.classList.toggle('active');
    });
}

// INTERAÇÃO 2: Validação do Formulário de Contato
const formContato = document.querySelector('#form-contato');

if (formContato) {
    formContato.addEventListener('submit', function (event) {
        event.preventDefault(); // Previne o envio padrão

        const nome = document.querySelector('#nome');
        const email = document.querySelector('#email');
        const mensagem = document.querySelector('#mensagem');
        const feedback = document.querySelector('#feedback-sucesso');
        let formValido = true;

        // Reset visual
        [nome, email, mensagem].forEach(campo => {
            if(campo) campo.classList.remove('input-error');
        });

        // Validações
        if (nome && nome.value.trim() === '') {
            nome.classList.add('input-error');
            formValido = false;
        }

        if (email && (email.value.trim() === '' || !email.value.includes('@'))) {
            email.classList.add('input-error');
            formValido = false;
        }

        if (mensagem && mensagem.value.trim() === '') {
            mensagem.classList.add('input-error');
            formValido = false;
        }

        if (formValido) {
            feedback.textContent = 'Mensagem enviada! A nossa equipa entrará em contacto.';
            feedback.style.display = 'block';
            formContato.reset();
        }
    });
}

// INTERAÇÃO 3: Filtro Duplo (Tipo e Validade) na página de Doações
const filtroTipo = document.querySelector('#filtro-tipo');
const filtroValidade = document.querySelector('#filtro-validade');
const cardsDoacao = document.querySelectorAll('.card-doacao');

function aplicarFiltros() {
    if (!filtroTipo || !filtroValidade) return;

    const tipoSelecionado = filtroTipo.value;
    const validadeSelecionada = filtroValidade.value;

    cardsDoacao.forEach(card => {
        const tipoCard = card.getAttribute('data-tipo');
        const validadeCard = card.getAttribute('data-validade');

        const matchTipo = (tipoSelecionado === 'todos' || tipoSelecionado === tipoCard);
        const matchValidade = (validadeSelecionada === 'todas' || validadeSelecionada === validadeCard);

        if (matchTipo && matchValidade) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Ouve as mudanças nos dois select boxes
if (filtroTipo) filtroTipo.addEventListener('change', aplicarFiltros);
if (filtroValidade) filtroValidade.addEventListener('change', aplicarFiltros);