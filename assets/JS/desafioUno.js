const precio = 400000

function calcularValor() {
    let numero = document.querySelector("#cantidad").value;
    let resultado = numero * precio;
    document.querySelector("#total").textContent = resultado;


    let cantidadFinall= document.querySelector('#cantidad').value;
    document.querySelector(' #cantidadFinal').textContent=cantidadFinall;

    let colorFinal= document.querySelector('#color').value;  

    
    document.querySelector('#colorMuestra').style.backgroundColor = colorFinal;

}




