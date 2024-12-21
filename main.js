const cardCursor = document.querySelector("#cardCursor");

const cards = document.querySelector(".block__cards");

const card = document.querySelector(".block__card");

const focusCard = (event) => {
    const target = event.target;
    const card = target.closest(".block__card");
    const img = card.querySelector("img");

    if (card.id == 1) {
        img.src = "./assets/001-cursor-extra.svg";
    } else if (card.id == 2) {
        img.src = "./assets/003-save-extra.svg";
    } else if (card.id == 3) {
        img.src = "./assets/001-puzzle-extra.svg";
    } else if (card.id == 4) {
        img.src = "./assets/002-heart-extra.svg";
    } 
}

const resetCard = (event) => {
    const target = event.target;
    const card = target.closest(".block__card");
    const img = card.querySelector("img");

    if (card.id == 1) {
        img.src = "./assets/001-cursor.svg";
    } else if (card.id == 2) {
        img.src = "./assets/003-save.svg";
    } else if (card.id == 3) {
        img.src = "./assets/001-puzzle.svg";
    } else if (card.id == 4) {
        img.src = "./assets/002-heart.svg";
    } 
}

const addEventListenerCards = () => {
    for (let i = 0; cards.children.length > i; i++) {
        cards.children[i].addEventListener("mouseenter", focusCard);
        cards.children[i].addEventListener("mouseleave", resetCard);
    }
}


addEventListenerCards();

