const textArea = document.querySelector(".textArea__encriptar");  //Texto ingresado por el Usuario
const mensaje = document.querySelector(".texto-encriptado__text-area"); // Mensaje encriptado o desencriptado


function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    console.log(textoEncriptado);
}

function encriptar(cadenaAEncriptar){
    let matrizLlave=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaAEncriptar = cadenaAEncriptar.toLowerCase();

    for(let i=0;i<matrizLlave.length; i++){
        if(cadenaAEncriptar.includes(matrizLlave[i][0])){
            cadenaAEncriptar=cadenaAEncriptar.replaceAll(matrizLlave[i][0],matrizLlave[i][1])
        }
    }
    return cadenaAEncriptar;
}
