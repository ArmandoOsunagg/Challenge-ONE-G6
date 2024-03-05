const mi_textarea = document.querySelector(".textarea"); 
const mi_textarea2 = document.querySelector(".textarea2"); 
mi_textarea.addEventListener("change", (event) => {
    string = mi_textarea.value; 
    string = string.toLowerCase(); 
    mi_textarea.value = string;
});
 

mi_textarea2.addEventListener("change", (event) => {
    string = mi_textarea2.value; 
    string = string.toLowerCase(); 
    mi_textarea2.value = string;
});
 


const btn_encript = document.querySelector("#boton-encriptar"); 
const btn_desencrip = document.querySelector("#boton-desencriptar"); 

btn_encript.addEventListener("click", function (e) {
    console.log(this.className); 
    encriptar();
});

btn_desencrip.addEventListener("click", function (e) {
    console.log(this.className); 
    desencriptar();
});

function encriptar(){
    string = mi_textarea.value; 
    console.log(string)
    string = string.replaceAll("e", "enter");
    string = string.replaceAll("i", "imes");
    string = string.replaceAll("a", "ai");
    string = string.replaceAll("o", "ober");
    string = string.replaceAll("u", "ufat");
    mi_textarea2.value = string;
}

function desencriptar(){
    string = mi_textarea.value; 
    console.log(string)
    string = string.replaceAll("enter", "e");
    string = string.replaceAll("imes", "i");
    string = string.replaceAll("ai", "a");
    string = string.replaceAll("ober", "o");
    string = string.replaceAll("ufat", "u");
    mi_textarea2.value = string;
}


const btn_copy = document.querySelector("#btn_copy"); 
const btn_copy_alien = document.querySelector("#btn_copy_alien"); 

btn_copy.addEventListener("click", function (e) {
    console.log(this.className); 
    copiarPortapapeles(mi_textarea2.value);
});

function copiarPortapapeles(mensaje){
    navigator.clipboard.writeText(mensaje);
    alert("Se ha copiado el mensaje del resultado al portapapeles");
}
btn_copy_alien.addEventListener("click", function (e) {
    console.log(this.className); 
    copiarPortapapelesAlien(`qufatimesenterrober dentercimesrtenter ail oberídober taintais cobersais prentercimesobersais
    qufatenter enterstobery simesntimesenterndober poberr times
    qufatenter tenter qufatimesenterrober, qufatenter tenter aidoberrober, tú enterrenters lai mufatjenterr qufatenter henter soberñaidober
    qufatenter menter haicenters mufaty fenterlimesz
    qufatenter cufataindober nober enterstás menter failtai enterl aiimesrenter
    qufatenter enterrenters lai raizón denter mimes enterximesstimesr
    aimoberr, poberr faivoberr, nufatncai menter failtenters
    poberrqufatenter tú enterrenters toberdober pairai mí
    nufatncai menter failtenters, nufatncai menter enterngaiñenters
    qufatenter simesn tufat aimoberr yober nober sobery naidimesenter
    nufatncai menter failtenters, nufatncai menter enterngaiñenters
    qufatenter simesn tufat aimoberr yober nober sobery naidimesenter
    qufatimesenterrober dentercimesrtenter ail oberídober taintais cobersais prentercimesobersais
    qufatenter enterstobery simesntimesenterndober poberr times
    qufatenter tenter qufatimesenterrober, qufatenter tenter aidoberrober, tú enterrenters lai mufatjenterr qufatenter henter soberñaidober
    qufatenter menter haicenters mufaty fenterlimesz
    qufatenter cufataindober nober enterstás menter failtai enterl aiimesrenter
    qufatenter enterrenters lai raizón denter mimes enterximesstimesr
    aimoberr, poberr faivoberr, nufatncai menter failtenters
    poberrqufatenter tú enterrenters toberdober pairai mí
    nufatncai menter failtenters, nufatncai menter enterngaiñenters
    qufatenter simesn tufat aimoberr yober nober sobery naidimesenter
    nufatncai menter failtenters, nufatncai menter enterngaiñenters
    qufatenter simesn tufat aimoberr yober nober sobery naidimesenter`);
});

function copiarPortapapelesAlien(mensaje){
    navigator.clipboard.writeText(mensaje);
    alert("Se ha copiado el mensaje del marcianito al portapapeles");
}




const boton_limpiar = document.querySelector("#boton-limpiar"); 
boton_limpiar.addEventListener("click", function (e) {
    mi_textarea2.value="";
    mi_textarea.value="";
});
 