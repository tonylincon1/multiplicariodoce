var form = document.getElementById('Página1');
                
form.addEventListener("submit", function validaCadastro(evt) {
var nome = document.getElementById('nome_footer');
var telefone = document.getElementById('Telefone');
var email = document.getElementById('E-mail');
var assunto = document.getElementById('Assunto');
var duvida = document.getElementById('duvida_footer');
var contErro = 0;


/* Required */
function required (tagErro,tagCampo,tagMensagem){
caixa = document.querySelector(tagErro);
if(tagCampo.value == "" | tagCampo.value == null){
    caixa.innerHTML = "*Por favor preencher: ".concat(tagMensagem);
    caixa.style.display = 'block';
    contErro += 1;
}else{
    caixa.style.display = 'none';
}
}

/* Email */
function validemail (tagErro,tagCampo){
    filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    caixa = document.querySelector(tagErro);
    if (filter.test(tagCampo.value)) {
        caixa.style.display = 'none';
    }
    else{
        caixa.innerHTML = "*Email não aceito. Por favor digite um e-mail valido.";
        caixa.style.display = 'block';
        contErro += 1;
    }
    }

required('.msg-nome',nome,"Nome")
required('.msg-telefone',telefone,"Telefone")
required('.msg-email',email,"E-mail")
validemail('.msg-email',email)
required('.msg-interesse',duvida,"Mensagem")
required('.msg-assunto',assunto,"Assunto")

if(contErro > 0){
    evt.preventDefault();
    console.log(contErro)
}

else {
    var formData = new FormData(document.getElementById("Página1"));
    formData.append('nome_footer', nome.value);
    formData.append('Telefone', telefone.value);
    formData.append('E-mail', email.value);
    formData.append('duvida_footer', duvida.value);
    formData.append('Assunto', assunto.value);

    // Exibe o spinner de carregamento
    document.getElementById('loadingSpinner').style.display = 'block';
    document.getElementsByClassName('botao_enviar')[0].style.display = 'none';

    form.addEventListener("submit", e => {
        e.preventDefault();
        fetch("https://hook.us1.make.com/3yee3rgod20qdpjabtvrxnvoco8hoypv", {
            method : "POST",
            body: formData,
        }).then(
            response => response.toString()
        ).then((html) => {
            setTimeout(function() {
                // Oculta o spinner de carregamento quando a resposta é recebida
                document.getElementById('loadingSpinner').style.display = 'none';
                document.getElementsByClassName('botao_enviar')[0].style.display = 'flex';
                caixa = document.querySelector('.msg-envio');
                caixa.innerHTML = "Sua dúvida foi enviada, entraremos em contato.";
            }, 1000);
        })
    });
}

},true)