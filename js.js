let target = document.querySelector("#target");
let divTarget = document.querySelector("#divTarget")
let comecou = false;

let botao = document.querySelector("#botao")

removeChildren()
divTarget.append(botao)

// // if (comecou) {
//     console.log(divTarget.innerHTML)
//     divTarget.innerHTML = ""
//     console.log(divTarget)
//     console.log(target)

// }


function comecar() {
    removeChildren()
    divTarget.append(target)
    console.log("cliquei")
}

function removeChildren(){
    for(child of divTarget.children){
        divTarget.removeChild(child)
    }
}