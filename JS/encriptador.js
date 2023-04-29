function encritparTexto(){
    let texto = document.getElementById("text").value;
    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoEncriptado = encriptacion(texto);
        document.getElementById("result").innerHTML = textoEncriptado;
        document.getElementById("text").value = "";
    }else{
        alert("Texto no válido, escribelo en minúsculas y sin acentos.")
    }
}

function desencriptarTexto(){
    let texto = document.getElementById("text").value;
    const caracteresValidos = /^[a-zñ\s\¿\?\¡\!\,\.]+$/;
    
    if(caracteresValidos.test(texto)){ 
        let textoDesencriptado = desencriptado(texto);
        document.getElementById("result").innerHTML = textoDesencriptado;
        document.getElementById("text").value = "";
    }else{
        alert("Texto no válido, escribelo en minsculas y sin acentos.")
    }
}

function copiarTexto(){

    let textoCopiar = document.getElementById("result"); 
    textoCopiar.select(); 
    document.execCommand("copy"); 
    window.getSelection().removeAllRanges(); 
}

function desaparecer(){
    document.getElementById("content-disappear").style.display = "none";
    document.getElementById("content-button-disappear").style.display = "block";
}

function encriptacion(texto){
    let textoEncriptado = [];
    let textoSeparado = texto.split("");
            for(let i = 0; i < textoSeparado.length; i++){
                let letra = textoSeparado[i];
                if(letra == "o"){
                    textoEncriptado.push("ober");
                }else if(letra == "a"){
                    textoEncriptado.push("ai");
                }else if(letra == "e"){
                    textoEncriptado.push("enter");
                }else if(letra == "i"){
                    textoEncriptado.push("imes");
                }else if(letra == "u"){
                    textoEncriptado.push("ufat");
                }else{
                    textoEncriptado.push(letra);
                }
            }    

            textoEncriptado = textoEncriptado.join("");
            // console.log(textoEncriptado);
            desaparecer();
            return textoEncriptado;
}


function desencriptado (texto){
    let textoSinOber = texto.replaceAll("ober", "o");
    let textoSinAi = textoSinOber.replaceAll("ai", "a");
    let textoSinEnter = textoSinAi.replaceAll("enter", "e");
    let textoSinImes = textoSinEnter.replaceAll("imes", "i");
    let textoDesencriptado = textoSinImes.replaceAll("ufat", "u");
    desaparecer();
    return textoDesencriptado;
    // console.log(textoDesencriptado);

}
