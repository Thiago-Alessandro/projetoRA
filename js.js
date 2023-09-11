let target = document.querySelector("#target");
let divTarget = document.querySelector("#divTarget")
let comecou = false;

let botao = document.querySelector("#botao")

divTarget.outerHTML = "";
divTarget.innerHTML = "";
divTarget.outerHTML = botao.outerHTML
divTarget.innerHTML = botao.innerHTML

if (comecou) {
    // console.log(divTarget.innerHTML)
    // //divTarget.innerHTML = ""
    // console.log(divTarget)
    // console.log(target)

}


function comecar() {
    divTarget.outerHTML = "";
    divTarget.innerHTML = "";
    divTarget.outerHTML = target.outerHTML
    divTarget.innerHTML = target.innerHTML

}