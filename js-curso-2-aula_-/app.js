let listaDeNumerosSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = numeroAleatorio();
let tentativa = 1;

function exibirTexto(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparChute();
    tentativa = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute('disabled', true);
}
function mensagemInicial(){
    exibirTexto('h1','Jogo do numero secreto');
    exibirTexto('p','Escolha um numero de 0 a 100');
}

function verificarChute(){
    let chute = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas':'tentativa';
    let mensagemTentativa = (`Voce acertou o nuemro secreto! com ${tentativa} ${palavraTentativa}`);
    if (chute == numeroSecreto){
        exibirTexto('h1',mensagemTentativa);
        exibirTexto('p','Parabens');
        document.getElementById("reiniciar").removeAttribute('disabled');
    }else {
        if (chute > numeroSecreto){
            exibirTexto('h1','O numero secreto e menor');
        }else{
            exibirTexto('h1','O numero secreto e maior');
        }
        tentativa++
        limparChute();
    }
    console.log(numeroSecreto);
}

function numeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()* numeroMaximo + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeNumerosNaLista == numeroMaximo){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    }else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }

}

function limparChute(){
    chute = document.querySelector("input");
    chute.value = '';
}

mensagemInicial();
