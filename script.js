const textArea = document.querySelector(".textArea__encriptar");  //Texto ingresado por el Usuario
const mensaje = document.querySelector(".texto-encriptado__text-area"); // Mensaje encriptado o desencriptado

const mensajeAuxiliar= document.querySelector("#mensajeAuxiliar");
const botonCopiar=document.querySelector(".btn__copiar")


function btnEncriptar(){
    const textoEncriptado=encriptar(textArea.value);
    mensaje.value=textoEncriptado;
    //console.log(textoEncriptado);
    textArea.value=""; //limpieza del text area del texto dado por el usuario.
    mensaje.style.backgroundImage = "none";
    mensajeAuxiliar.style.display="none";
    botonCopiar.style.display="block";
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value=textoDesencriptado;
    textArea.value="";
    mensaje.style.backgroundImage = "none";
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

function desencriptar(cadenaADesencriptar){
    let matrizLlave=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaADesencriptar = cadenaADesencriptar.toLowerCase();

    for(let i=0;i<matrizLlave.length; i++){
        if(cadenaADesencriptar.includes(matrizLlave[i][1])){
            cadenaADesencriptar=cadenaADesencriptar.replaceAll(matrizLlave[i][1],matrizLlave[i][0])
        }
    }
    return cadenaADesencriptar;
}