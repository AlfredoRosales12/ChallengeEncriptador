const textArea = document.querySelector(".textArea__encriptar");  //Texto ingresado por el Usuario
const mensaje = document.querySelector(".texto-encriptado__text-area"); // Texto que se muestra encriptado o desencriptado

const mensajeAuxiliar= document.querySelector("#mensajeAuxiliar");
const botonCopiar=document.querySelector(".btn__copiar")

const copyAlert= document.querySelector("#cajaConfirmacion"); //Caja de confirmación de copiado

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

//Función que encripta el texto.
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

//Funcion para desencriptar el texto
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

//Codigo que remplaza las letras con acentos por la misma letra sin acento, se modifica en tiempo real
document.getElementById("cajaTextoAEncriptar").addEventListener("input", function() {
    // Reemplaza letras acentuadas por su versión sin acento
    this.value = this.value
        .toLowerCase()
        .replace(/[áàäâã]/g, 'a') //se remplaza las variantes de la letra a con acento a la letra a sin acento
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöôõ]/g, 'o')
        .replace(/[úùüû]/g, 'u');        
        
});


//Funcion de que copia el texto que esta en la caja derecha al portapapeles.
function copiarTexto(){    
    // Copia el texto seleccionado al portapapeles
    navigator.clipboard.writeText(mensaje.value).then(function() {
        // Confirmación opcional
        //alert("Texto copiado al portapapeles: " + mensaje.value);
        showCopyAlert();
    }).catch(function(err) {
        console.error("Error al copiar el texto: ", err);
    });
    
}

// Funcion para mostrar el cartel que por default esta oculto.
function showCopyAlert() {    
    copyAlert.style.display = "block"; // Muestra el cartel
    // Oculta el cartel después de 2 segundos (2000 ms)
    setTimeout(function() {
        copyAlert.style.display = "none";
    }, 1000);
}