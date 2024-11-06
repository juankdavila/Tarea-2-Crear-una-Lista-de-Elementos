let  ListaElementos= document.getElementById("Lista").getElementsByTagName("li");
let cont = 1;
for(let elemento of ListaElementos){
    console.log(elemento.innerHTML);
    elemento.innerHTML = `Elemento actualizado ${cont}`;
    cont++;
}