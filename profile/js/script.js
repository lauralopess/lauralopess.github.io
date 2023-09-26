function enviarMensagem() {
    var nome = document.getElementById("idNome");

    if(nome.value !="") {
        alert("Obrigado, sr(a) " + nome.value + ", sua mensagem foi enviada com sucesso!")
    }
}