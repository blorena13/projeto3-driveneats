
function toggleSelecionar(opcaoselecionada){
    const selecionado = opcaoselecionada.parentElement.querySelector(".selecionado");

    if (selecionado !== null) {
        selecionado.classList.remove("selecionado")
    } if (opcaoselecionada === selecionado){
        opcaoselecionada.classList.remove("selecionado");
    } else {
        opcaoselecionada.classList.add('selecionado');

    }
    continuar();

}

function continuar() {
    const comida = document.querySelector(".comida.selecionado");
    const bebida = document.querySelector(".bebida.selecionado");
    const sobremesa = document.querySelector(".opcoes.selecionado");


    if ( comida !== "" && bebida !== "" && sobremesa !== ""){
        
        const botaoContinuar = document.querySelector('.pedido');
        botaoContinuar.classList.add('continuar');
        botaoContinuar.disabled = false;
        botaoContinuar.innerHTML = "Fechar pedido";
    } else {
        botaoContinuar.disabled  = true;

    }
}