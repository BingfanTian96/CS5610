// Bingfan Tian
// extra credit for Week5

function rollDice(NdM) {
    var res = 0;
    let arr = NdM.split('d');
    
    for (let i = 0; i < arr[0]; i++) {
        res +=  Math.floor(Math.random() * arr[1]);
    }
    return res
}

console.log(rollDice("3d6"));