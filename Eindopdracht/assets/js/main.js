drawDeck('clean');
function drawDeck (mode) {
    let cards = [];
    for (let i = 0; i < 4; i++) {
        for (let x = 1; x < 14; x++) {
            let cardData = {
                number: "A",
                type: i
            };
            if (x > 1 && x < 11) {
                cardData.number = x;
            } else if (x == 11) {
                cardData.number = 'H';
            } else if (x == 12) {
                cardData.number = 'Q';
            } else if (x == 13) {
                cardData.number = 'K';
            }
            cards.push(cardData);
        }
    }
    if (mode == 'shuffle') {
        cards = shuffleArray(cards);
    }
    for (let i in cards) {
        addCard(cards[i]);
    }
}
function shuffleArray (arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.random() * (i + 1) | 0;
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
function addCard(data) {
    let type = 'hart.jpg';
    let color = 'red';
    if (data.type == 1) {
        type = 'ruit.jpg';
    } else if (data.type == 2) {
        type = 'schoppen.jpg';
        color = 'black';
    } else if (data.type == 3) {
        type = 'klaver.jpg';
        color = 'black';
    }
    //inladen kaarten
    document.getElementById("cardholder").innerHTML += '\n<div class="kaart" tabindex="0" style="color: ' + color + '"><div class="inner"><div class="front"><div class="top"><p>' + data.number + '</p><img src="assets/img/' + type + '"></div><div class="mid"><img src="https://slome.org/Assets/player/char.png"></div><div class="bot"><p>' + data.number + '</p><img src="assets/img/' + type + '"></div></div><div class="back"></div></div></div>';
}

function shuffleDeck (mode) {
    let elements = document.getElementsByClassName('kaart');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('retract');
    }
    const timeout = setTimeout(() => {
        document.getElementById("cardholder").innerHTML = "";
        drawDeck(mode);
    }, 2000);
}
function showDeck () {
    let elements = document.getElementsByClassName('inner');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add('show');
    }
}