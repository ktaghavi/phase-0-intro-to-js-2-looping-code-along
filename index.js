let cardMessages = [];

function writeCards(names) {
    for (let x = 0; x < names.length; x++) {
        cardMessages.push(`Thank you, ${names[x]}, for the wonderful surprise gift!`);
    };
    return cardMessages;
}

function countDown(i) {
    for (let i = 0; i < 11; i++) 
        console.log(i);
};

countDown (4);