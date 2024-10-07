/*function imc(a,p){
    return p/(a*a);
}
resultado = imc(1.71,58);
console.log(resultado);*/

/*function fatoracao(numero){
    if (numero === 0 || numero === 1){
        return 1;
    }
    let fatorial = 1;
    for (let i = 2; i <= numero; i++){
        fatorial *= i;
    }
    return fatorial;
}
let numero = 5;
let resultado = fatoracao(numero);
console.log(`O fatorial de ${numero} e ${resultado}`);*/

/*function conversao(dolar){
    let cotacao = 4.80;
    let valorEmReal = dolar * cotacao;
    return valorEmReal.toFixed(2);
}
let dolar = prompt (`valor em dolar`);
let resultado = conversao(dolar);
console.log(`O valor da conversao de ${dolar}$ para real e de R$${resultado}`);
*/
/*function areaPerimetro(altura,largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    console.log(`area da sala: ${area}`);
    console.log(`perimetro da sala ${perimetro}`);
}
let altura = 3;
let largura = 9;
areaPerimetro(altura,largura);*/

/*function circulo(r){
    let area = Math.PI * (r*r);
    let perimetro = 2*Math.PI*r;

    console.log(`area e de ${area.toFixed(2)}`);
    console.log(`o perimetro e de ${perimetro.toFixed(2)}`);

}
let raio = 3;
circulo(raio);*/

function tabuada(n){
    
    for (i=0; i<=10;i++){
        let resultado = n*i
        console.log(`${n}x${i}=${resultado}`);
    }
}
let multiplicador = prompt(`entre com o multiplicador`);
tabuada(multiplicador);