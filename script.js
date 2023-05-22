const suits = ['♦', '♥', '♠', '♣'];
const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function generateRandomCard() {
  const suitIndex = Math.floor(Math.random() * suits.length);
  const rankIndex = Math.floor(Math.random() * ranks.length);
  const suit = suits[suitIndex];
  const rank = ranks[rankIndex];

  return {
    suit: suit,
    rank: rank
  };
}

function createCardHTML(card) {
    const cardHTML = document.createElement('div');
    cardHTML.className = 'card suit-' + card.suit.toLowerCase();
  
    const suitTop = document.createElement('div');
    suitTop.className = 'suit-top';
    suitTop.textContent = card.suit;
  
    const rankElement = document.createElement('div');
    rankElement.className = 'rank';
    rankElement.textContent = card.rank;
  
    const suitBottom = document.createElement('div');
    suitBottom.className = 'suit-bottom';
    suitBottom.textContent = card.suit;
  
    cardHTML.appendChild(suitTop);
    cardHTML.appendChild(rankElement);
    cardHTML.appendChild(suitBottom);
  
    return cardHTML;
  }
  

function drawCards() {
  const numCardsInput = document.getElementById('numCards');
  const numCards = parseInt(numCardsInput.value);

  const cardContainer = document.getElementById('cardContainer');
  cardContainer.innerHTML = '';

  for (let i = 0; i < numCards; i++) {
    const card = generateRandomCard();
    const cardHTML = createCardHTML(card);
    cardContainer.appendChild(cardHTML);
  }
}

  //SELECTIONSORT!!!!!!!!
  function selectionSort(cards) {
    var changes = [];
  
    for (var i = 0; i < cards.length - 1; i++) {
      var minIndex = i;
  
      for (var j = i + 1; j < cards.length; j++) {
        if (cards[j] < cards[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        var temp = cards[i];
        cards[i] = cards[minIndex];
        cards[minIndex] = temp;
      }
  
      changes.push(cards.slice()); // Guardar una copia de los cambios realizados en cada iteración
    }
  
    return changes;
  }

  var cards = [];
   var changes = selectionSort(cards);

for (var i = 0; i < changes.length; i++) {
  console.log("Iteración " + (i + 1) + ": " + changes[i].join(", "));
}

  
  // Función para mostrar el registro completo de cambios en el sitio web
  function showChangeLog(changes) {
    var changeLog = document.getElementById('changeLog');
    changeLog.innerHTML = '';
  
    for (var i = 0; i < changes.length; i++) {
      var changeItem = document.createElement('ol');
      changeItem.textContent = JSON.stringify(changes[i]);
      changeLog.appendChild(changeItem);
    }
  }
  
  // Función para ordenar las cartas y mostrar el registro de cambios
  function sortCards() {
    var cardContainer = document.getElementById('cardContainer');
    var cards = Array.from(cardContainer.getElementsByClassName('card')).map(function(card) {
      return card.textContent;
    });
  
    var changes = selectionSort(cards);
    showChangeLog(changes);
  }
  