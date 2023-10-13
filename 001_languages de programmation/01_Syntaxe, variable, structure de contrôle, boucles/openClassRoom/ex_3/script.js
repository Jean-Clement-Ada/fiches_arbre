// // Déclaration des tableaux contenant les listes des mots proposés à l'utilisateur
 
const listeMots = ["Cachalot", "Pétunia", "Serviette"]
const listePhrases = ["Pas de panique !", "La vie, l'univers et le reste", "Merci pour le poisson"]

function afficherResultat(score, nombreMotsProposes) {
    alert("Votre score est de " + score + " sur " + nombreMotsProposes)
    console.log("Votre score est de " + score + " sur " + nombreMotsProposes)
}

function choisirPhrasesOuMots() {
// Déclaration de la variable contenant le choix de l'utilisateur
let choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
// Tant que l'utilisateur n'a pas saisi "mots" ou "phrases", on lui redemande de saisir un choix
while (choix !== "mots" && choix !== "phrases") {
    choix = prompt("Avec quelle liste désirez-vous jouer : 'mots' ou 'phrases' ?")
}
return choix
}

function lancerbouclejeu(listePropositions) {
        // On parcourt le tableau des mots
        let score = 0
        for (let i = 0; i < listePropositions.length; i++) {
            // On demande à l'utilisateur de saisir le mot correspondant à l'indice i
            let motUtilisateur = prompt("Entrez le mot : " + listePropositions[i])
            if (motUtilisateur === listePropositions[i]) {
                // Si le mot saisi par l'utilisateur est correct, on incrémente le score
                score++
            }
    }
    return score
}

function lancerJeu() {
    let choix = choisirPhrasesOuMots()
    let score = 0
    let nombreMotsProposes = 0
    afficherResultat(score, nombreMotsProposes)

    if (choix === "mots") {
        score = lancerbouclejeu(listeMots)
        nombreMotsProposes = listeMots.length
    } else {
        score = lancerbouclejeu(listePhrases)
        nombreMotsProposes = listePhrases.length
    }
}

lancerJeu()