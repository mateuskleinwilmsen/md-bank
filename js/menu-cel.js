const menuItens = document.querySelector(".menu-cel-itens");
menuItens.style.display = "none";

function abrirMenu(){
    if(menuItens.style.display == "none"){
        menuItens.style.display = "block";
    }else{
        menuItens.style.display = "none";
    }
}