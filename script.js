let botao = document.querySelector("#botao");
botao.addEventListener("click", gerarNumero);
let lista = document.querySelector("ul");
function gerarNumero(){
    let num = Math.floor(Math.random()*100);

    
    let item = document.createElement("li");

    item.textContent = num;
    
    lista.prepend(item);
}