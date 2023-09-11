let target = document.querySelector("#target");
let divTarget = document.querySelector("#divTarget")
let comecou = false;

let botao = document.querySelector("#botao")

divTarget.removeChildren()
divTarget.append(botao)

// // if (comecou) {
//     console.log(divTarget.innerHTML)
//     divTarget.innerHTML = ""
//     console.log(divTarget)
//     console.log(target)

// }


function comecar() {
    divTarget.removeChildren()
    divTarget.append(target)
    console.log("cliquei")
}

function removeChildren(){
    for(child of divTarget.children){
        div.removeChild(child)
    }
}