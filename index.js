
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult= document.getElementById("diceResult");
    const diceImage= document.getElementById("diceImage");
    const values = [];
    const Images = [];

    for(let i=0; i<numOfDice; i++){
        let value = Math.floor(Math.random()*6)+1;
        values.push(value);
        Images.push(`<img src="${value}.png" type="png">`)
    }
        diceResult.textContent = `dice : ${values.join(' , ')}`;
        diceImage.innerHTML = Images.join('');
}