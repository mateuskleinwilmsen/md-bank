const menuItens = document.querySelector(".menu-cel-itens");
menuItens.style.display = "block";

const menuFundo = document.querySelector(".menu-cel-fundo");
menuFundo.style.display = "none";

const menuBtnFechar = document.querySelector(".menu-cel-btn-fechar");
menuBtnFechar.style.display = "none";

const menuBtnAbrir = document.querySelector(".menu-cel-btn-abrir");

function fecharMenu(){
    if(menuFundo.style.display == "block"){
        menuFundo.style.display = "none";
        menuItens.style.marginRight = "-230px";
        menuBtnFechar.style.display = "none";
        menuBtnAbrir.style.display = "block";
    }
}

function abrirMenu(){
    if(menuFundo.style.display == "none"){
        menuItens.style.marginRight = "0px";
        menuFundo.style.display = "block";
        menuBtnFechar.style.display = "block";
        menuBtnAbrir.style.display = "none";
    }else{
        menuFundo.style.display = "none";
        menuItens.style.marginRight = "-230px";
        menuBtnFechar.style.display = "none";
        menuBtnAbrir.style.display = "block";
    }
}

addEventListener("resize", () => {
    let width = window.innerWidth;

    menuFundo.style.display = "none";
    menuItens.style.marginRight = "-230px";

    if(width>=1000){
        menuBtnFechar.style.display = "none";
        menuBtnAbrir.style.display = "none";
    }else{
        menuBtnFechar.style.display = "none";
        menuBtnAbrir.style.display = "block";  
    }
});