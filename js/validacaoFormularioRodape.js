const botaoFormularioRodape = document.querySelector('[data-form-botao-rodape]');

function validaFormularioNomeRodape(){
    const inputNome = document.querySelector('[data-form-nome-rodape]');   
    const valorInputNome = inputNome.value;
    let mensagem = '';
    if(valorInputNome.length < 2 || valorInputNome.length>40|| valorInputNome.length==0){
        mensagem = "Seu nome deve ter entre 2 e 40 caracteries.";
    }
    inputNome.setCustomValidity(mensagem)
    console.log(valorInputNome.length, valorInputNome, mensagem)
}
function validaFormularioMensagemRodape(){
    const inputMensagem = document.querySelector('[data-form-mensagem-rodape]');
    const valorInputMensagem = inputMensagem.value;
    let mensagem ='';

    if(valorInputMensagem.length<2 || validaFormularioMensagemRodape.length>120 || valorInputMensagem.length==0){
        mensagem = "Sua mensagem deve ter 2 e 120 caracteries."
    }
    inputMensagem.setCustomValidity(mensagem);
    console.log(valorInputMensagem.length, valorInputMensagem, mensagem)

}

botaoFormularioRodape.addEventListener('click', validaFormularioNomeRodape);
botaoFormularioRodape.addEventListener('click', validaFormularioMensagemRodape);


