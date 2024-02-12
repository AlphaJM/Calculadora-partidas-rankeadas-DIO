let vitorias = 1000
let derrotas = 5
let winRate = calcRank(vitorias , derrotas)

if(winRate <= 10){
    let nivelRanked = "Ferro"
    printRank(winRate, nivelRanked)
}
else if(winRate >= 11 && winRate <= 20){
    let nivelRanked = "Bronze"
    printRank(winRate, nivelRanked)
}
else if(winRate >= 21 && winRate <= 50){
    let nivelRanked = "Prata"
    printRank(winRate, nivelRanked)
}
else if(winRate >= 51 && winRate <= 80){
    let nivelRanked = "Ouro"
    printRank(winRate, nivelRanked)
}
else if(winRate >= 81 && winRate <= 90){
    let nivelRanked = "Diamante"
    printRank(winRate, nivelRanked)
}
else if(winRate >= 91 && winRate <= 100){
    let nivelRanked = "Lendário"
    printRank(winRate, nivelRanked)
}
else{
    let nivelRanked = "Imortal"
    printRank(winRate, nivelRanked)
}

function printRank(valorUm, valorDois){
    console.log(`O Herói tem de saldo de ${valorUm} vitórias e está no nível de ${valorDois} na ranqueada`)
}

function calcRank(x, y){
    return x - y
}

