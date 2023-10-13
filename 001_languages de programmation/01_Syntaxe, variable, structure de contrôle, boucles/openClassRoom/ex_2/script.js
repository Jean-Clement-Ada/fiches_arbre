let listeMots = ["youpi", "melon", "artichaut"]
let score = 0

let i = prompt("écrivez ce mot s’il vous plaît : " + listeMots[0])
while (i !== "youpi"){
    console.log("et bien non ! Il faut recommencer ! ^_^")
    i = prompt("écrivez ce mot s’il vous plaît : " + listeMots[0])
}
    console.log("bravo vous avez gagné un point")
    score++
    console.log("total = " + score)

i = prompt("entrez ce nouveau mot s’il vous plaît : " + listeMots[1])
while (i !== "melon") {
    console.log("encore raté !")
    i = prompt("entrez ce nouveau mot s’il vous plaît : " + listeMots[1])
}
    console.log("bravo vous avez gagné un point")
    score++
    console.log("total = " + score)
i = prompt("entrez ce nouveau mot s’il vous plaît : " + listeMots[2])
while (i !== "artichaut") {
    console.log("nooooooooon !")
    i = prompt("entrez ce nouveau mot s’il vous plaît : " + listeMots[2])
    }
    console.log("bravo vous avez gagné dix point")
    score += 10
    console.log("total = " + score)