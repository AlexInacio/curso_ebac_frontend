const submitButton = document.getElementById("ButtonSend");
let formValido = false;

function compararNumeros(n1, n2) {
    return n2 > n1;
}


function exibirMensagem(container, mensagem, cor) {
    container.innerHTML = mensagem;
    container.style.display = "block";
    container.style.color = cor;
}

submitButton.addEventListener("click", function (e) {
    e.preventDefault(); 

    
    const numero1 = document.getElementById("n1");
    const numero2 = document.getElementById("n2");

    
    const containerMensagemSucesso = document.querySelector(".success-message");
    const containerErroMessage = document.querySelector(".error-message");

    
    const valor1 = parseFloat(numero1.value);
    const valor2 = parseFloat(numero2.value);

    
    if (isNaN(valor1) || isNaN(valor2)) {
        exibirMensagem(containerErroMessage, "Por favor, insira valores numéricos válidos.", "red");
        containerMensagemSucesso.style.display = "none";
        return;
    }

    
    formValido = compararNumeros(valor1, valor2);

    if (formValido) {

        exibirMensagem(containerMensagemSucesso, "Formulário enviado com sucesso!", "green");
        containerErroMessage.style.display = "none";

        submitButton.disabled = false;
    } else {
        
        exibirMensagem(containerErroMessage, "O número 2 deve ser maior que o número 1.", "red");
        containerMensagemSucesso.style.display = "none";

        
        submitButton.disabled = true;
    }
});


document.getElementById("n1").addEventListener("input", verificarCampos);
document.getElementById("n2").addEventListener("input", verificarCampos);

r
function verificarCampos() {
    const numero1 = parseFloat(document.getElementById("n1").value);
    const numero2 = parseFloat(document.getElementById("n2").value);


    const containerMensagemSucesso = document.querySelector(".success-message");
    const containerErroMessage = document.querySelector(".error-message");

  
    if (!isNaN(numero1) && !isNaN(numero2) && compararNumeros(numero1, numero2)) {
        submitButton.disabled = false;
        exibirMensagem(containerMensagemSucesso, "Agora você pode enviar o formulário!", "green");
        containerErroMessage.style.display = "none";
    } else {
        submitButton.disabled = true;
        containerMensagemSucesso.style.display = "none";
    }
}
