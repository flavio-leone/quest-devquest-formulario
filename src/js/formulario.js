const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {

    event.preventDefault();

    preenchidoNome();
    preenchidoEmail();
    preenchidoTelefone();
    preenchidoMensagem();
})

function preenchidoNome() {
    const nome = document.getElementById("nome");
    const avisoNome = document.getElementById("aviso-nome");
    if (nome.value == "") {
        nome.classList.add("nao-preenchido");
        avisoNome.classList.add("ativo");
        nome.classList.remove("preenchido");
    } else {
        nome.classList.add("preenchido");
        avisoNome.classList.remove("ativo");
    }
}

function preenchidoEmail() {
    const email = document.getElementById("email");
    const avisoEmail = document.getElementById("aviso-email");
    if (email.value == "") {
        email.classList.add("nao-preenchido");
        avisoEmail.classList.add("ativo");
        email.classList.remove("preenchido");
    } else {
        email.classList.add("preenchido");
        avisoEmail.classList.remove("ativo");
    }
}

function preenchidoTelefone() {
    const telefone = document.getElementById("telefone");
    const avisoTelefone = document.getElementById("aviso-telefone");

    if (telefone.value == "") {
        telefone.classList.add("nao-preenchido");
        avisoTelefone.classList.add("ativo");
        telefone.classList.remove("preenchido");
    } else {
        telefone.classList.add("preenchido");
        avisoTelefone.classList.remove("ativo");
    }
}

function preenchidoMensagem() {
    const mensagem = document.getElementById("mensagem");
    const avisoMensagem = document.getElementById("aviso-mensagem");

    if (mensagem.value == "") {
        mensagem.classList.add("nao-preenchido");
        avisoMensagem.classList.add("ativo");
        mensagem.classList.remove("preenchido");
    } else {
        mensagem.classList.add("preenchido");
        avisoMensagem.classList.remove("ativo");
    }
}