// Code your solutions in this file


function writeCards(arr, eventName) {
    let thankYouCards = []
    for (let i=0; i<arr.length; i++){
        thankYouCards.push(`Thank you, ${arr[i]}, for the wonderful ${eventName} gift!`)
    }
    return thankYouCards
}

function countDown(startNumber){
    while(startNumber > 0){
        console.log(startNumber);
        startNumber -= 1;
    }
    console.log(startNumber);
}