//let maPetiteVariable = "Perdita 8 10 8"

function parseTrip(trip){
    let analyse = trip.split(" ")
    fichierClient={
        "client":analyse[0],
        "depart":analyse[1],
        "duree":analyse[2],
        "prix":Number(analyse[3])
    }
    return fichierClient
}
//parseTrip(maPetiteVariable)
//console.log(parseTrip(maPetiteVariable))

let tripsToParse = [
	"Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

function parseTrips(trips){
    tableau=[]
    for(i=0;i<trips.length;i++){
        tableau.push(parseTrip(trips[i]))
    }
    return tableau
}
//parseTrips(tripsToParse)
tableauBienRange = parseTrips(tripsToParse)
console.log(tableauBienRange)

function getTripsPrice(trips){
    sommeTotale=0
    for(i=0;i<trips.length;i++){
        sommeTotale+=trips[i].prix
    }
    return sommeTotale
}
cestmoiquidecide = getTripsPrice(tableauBienRange)
//getTripsPrice(tableauBienRange)
console.log(cestmoiquidecide)









// let tripsToParse = [
//     "Roger 0 5 10",
//     "Pongo 3 7 14",
//     "Perdita 8 10 8",
//     "Anita 16 3 7"
// ]

// //let tableauPrix = parseTrips(tripsToParse)

// function parseTrip(trip) {
//     let rangeTrip = trip.split(" ")
//     console.log(rangeTrip)
//         let rangement={
//             "client":rangeTrip[0],
//             "start":rangeTrip[1],
//             "duration":rangeTrip[2],
//             "price":rangeTrip[3]
//         }
//     console.log(rangement)
//     return rangement
// }

// function parseTrips(trips) {
//     let rangement2=[]
//         for(i=0;i<trips.length;i++){
//             rangement2.push(parseTrip(trips[i]))
//         }
//         console.log(rangement2)
//     return rangement2
// }

// // function getTripsPrice(voyage) {
// //     let prixDuVogage = voyage.price
// //     console.log(prixDuVogage)
// //     return prixDuVogage
// // }

// function checkCompatibility(tripA, tripB) {
//     console.log(tripA.start + tripA.duration)
//     return (tripA.start + tripA.duration) < tripB.start
// }

// function findCompatibilities(trips){

// }

// //parseTrip(tripsToParse)
// parseTrips(tripsToParse)
// //getTripsPrice(tableauPrix)
