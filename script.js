const cardContainer = document.getElementById("cardContainer");
const cardContainerR = document.getElementById("cardMatriz");
const suits = ["♦", "♥", "♠", "♣"];
const ranks = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function generateRandomCard() {
  const suitIndex = Math.floor(Math.random() * suits.length);
  const rankIndex = Math.floor(Math.random() * ranks.length);
  const suit = suits[suitIndex];
  const rank = ranks[rankIndex];

  return {
    suit: suit,
    rank: rank,
  };
}
function getRankLabel(rank) {
  switch (rank) {
    case 1:
      return "A";
    case 11:
      return "J";
    case 12:
      return "Q";
    case 13:
      return "K";
    default:
      return rank.toString();
  }
}

function createCardHTML(card) {
  const cardHTML = document.createElement("div");
  console.log("suit " + card.suit);
  cardHTML.className = "card suit-" + card.suit.toLowerCase();

  const suitTop = document.createElement("div");
  suitTop.className = "suit-top";
  suitTop.textContent = card.suit;

  const rankElement = document.createElement("div");
  rankElement.className = "rank";
  rankElement.textContent = getRankLabel(card.rank);

  const suitBottom = document.createElement("div");
  suitBottom.className = "suit-bottom";
  suitBottom.textContent = card.suit;

  cardHTML.appendChild(suitTop);
  cardHTML.appendChild(rankElement);
  cardHTML.appendChild(suitBottom);

  

  return cardHTML;
}

//SELECTIONSORT!!!!!!!!
function selectionSort(cards) {
  console.log(cards);

  for (let i = 0; i < cards.length - 1; i++) {
    for (let j = i + 1; j < cards.length; j++) {
      if (cards[i].rank > cards[j].rank) {
        let temp = cards[i];
        cards[i] = cards[j];
        cards[j] = temp;
      }
      drawCardes(cards);
    }
  }

  return cards;
}

var cards = [];
var changes = selectionSort(cards);

for (var i = 0; i < changes.length; i++) {
  console.log("Iteración " + (i + 1) + ": " + changes[i].join(", "));
}

// Función para mostrar el registro completo de cambios en el sitio web
function showChangeLog(changes) {
  var changeLog = document.getElementById("cardMatriz");
  changeLog.innerHTML = "";

  for (var i = 0; i < changes.length; i++) {
    var changeItem = document.createElement("ol");
    changeItem.textContent = JSON.stringify(changes[i]);
    changeLog.appendChild(changeItem);
  }
}

// Función para ordenar las cartas y mostrar el registro de cambios
function sortCards() {
  var cardContainer = document.getElementById("cardContainer");
  //   var cards = Array.from(cardContainer.getElementsByClassName("card")).map(
  //     function (card) {
  //       return card;
  //     }
  //   );

  selectionSort(cards);
  //   showChangeLog(changes);
  //   console.log("***********");
  //   console.log(changes);
  //   console.log("***********");
  //   drawCardes(changes);
}

function drawCards() {
  cards = [];
  const numCardsInput = document.getElementById("numCards");
  const numCards = parseInt(numCardsInput.value);

  cardContainer.innerHTML = "";
  cardContainerR.innerHTML = "";
  for (let i = 0; i < numCards; i++) {
    const card = generateRandomCard();
    cards.push(card);
    const cardHTML = createCardHTML(card);
    cardContainer.appendChild(cardHTML);
  }

    console.log(cards);
}

function drawCardes(changes) {
  // console.log("******");
  // console.log(changes);
  // console.log("******");

  if (changes && changes.length > 0) {
    const row = document.createElement("div");
    row.className = "card-row";
    for (let i = 0; i < changes.length; i++) {
      const card = changes[i];

      const cardHTML = createCardHTMLes(card);
      row.appendChild(cardHTML);
    }
    cardContainerR.appendChild(row);
  }
}

function createCardHTMLes(card) {
  //   if (!card || typeof card !== "string") {
  //     // Manejar el caso en el que la tarjeta no esté definida o no sea una cadena
  //     // console.error("La tarjeta es inválida:", card);
  //     return null; // O puedes devolver un elemento de tarjeta vacío en lugar de null
  //   }

  //   const suitRegex = /[♠♣♥♦]/;
  //   const rankRegex = /[1-9|10|AJQK]/;

  //   const suitMatch = card.match(suitRegex);
  //   const rankMatch = card.match(rankRegex);

  //   if (!suitMatch || !rankMatch) {
  //     // Manejar el caso en el que la tarjeta no tenga el formato esperado
  //     console.error("La tarjeta tiene un formato inválido:", card);
  //     return null; // O puedes devolver un elemento de tarjeta vacío en lugar de null
  //   }

  //   const suit = suitMatch[0];
  //   const rank = rankMatch[0];

  const cardElement = document.createElement("div");
  cardElement.className = "card";

  const suitTop = document.createElement("div");
  suitTop.className = "suit-top";
  suitTop.textContent = card.suit;

  const rankElement = document.createElement("div");
  rankElement.className = "rank";
  rankElement.textContent = getRankLabel(card.rank);

  const suitBottom = document.createElement("div");
  suitBottom.className = "suit-bottom";
  suitBottom.textContent = card.suit;

  cardElement.appendChild(suitTop);
  cardElement.appendChild(rankElement);
  cardElement.appendChild(suitBottom);

  return cardElement;
}
