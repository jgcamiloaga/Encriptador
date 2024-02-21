let botonEncriptar = document.querySelector(".encriptador");
let botonDesencriptar = document.querySelector(".desencriptador");
let imagen = document.querySelector(".contenedor-imagen");
let contenedor = document.querySelector(".caja-mensaje");
let resultado = document.querySelector(".texto-resultado");
const botonCopiar = document.querySelector(".copiar")
const seccion2 = document.querySelector(".seccion-2")

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copiar;

function copiar(){
    const textoResultado = document.querySelector(".texto-resultado")
    navigator.clipboard.writeText(textoResultado.textContent)
}

function encriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajatexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajatexto);
}

function recuperarTexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    imagen.classList.add("ocultar");
    contenedor.classList.add("ocultar");
    botonCopiar.classList.remove("ocultar");
    seccion2.classList.remove("seccion-2-inicial")
    seccion2.classList.add("seccion-2-final")
    resultado.classList.remove("ocultar-responsive")
}

function SoloLetrasMinusculas(e){
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key).toString();
    letras = "abcdefghijklmnopqrstuvwxyz"

    especiales = [8,13,32];
    teclado_especial = false;

    for(var i in especiales){
        if(key == especiales[i]){
            teclado_especial = true;
            break;
        }
    }

    if(letras.indexOf(teclado)== -1 && !teclado_especial){
        return false;
    }
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
    }
    return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}


