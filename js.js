let target = document.querySelector("#target");
let divTarget = document.querySelector("#divTarget")
let comecou = false;

let botao = document.querySelector("#botao")

divTarget.innerHTML = botao;
if(comecou){
    // console.log(divTarget.innerHTML)
    // //divTarget.innerHTML = ""
    // console.log(divTarget)
    // console.log(target)
    divTarget.innerHTML = target;
}


function comecar(){
    comecou = true;
}