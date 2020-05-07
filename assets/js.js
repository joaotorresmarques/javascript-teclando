function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split(' ');
    //console.log(textoArray);
    elemento.innerHTML = '';
    textoArray.forEach((letra,i) =>{
        //console.log(letra);
        setTimeout(() => {
            elemento.innerHTML +=letra + " ";
        }, 200*i);
    })
}
const titulo = document.querySelector('h1');
//console.log(titulo);
typeWrite(titulo);