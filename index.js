let cardMessages = [];

function writeCards(names) {
    for (let x = 0; x < names.length; x++) {
        cardMessages.push(`Thank you, ${names[x]}, for the wonderful surprise gift!`);
    };
    return cardMessages;
}

function countDown(number) {
    while(number >= 0) {
        console.log(number--)
    };
}