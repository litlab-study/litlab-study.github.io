document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "Finish the quote: Kill the pig...", answer: "cut her throat, spill her blood"
        },
        {
            question: "Roger, with a sense of delirious abandonment...", answer: "leaned all his weight on the lever"
        },
        {
            question: "There were no words and no movements...", answer: "but the tearing of teeth and claws"
        },
        {
            question: "The creature was...", answer: "a party of boys"
        },
        {
            question: "The mask was a thing on its own...", answer: "behind which Jack hid, liberated from shame and self-consciousness"
        },
        {
            question: "Roger sharpened a stick...", answer: "at both ends"
        },
        {
            question: "Maybe there is a beast...", answer: "maybe it's only us"
        },
        {
            question: "Ralph wept for the end of innocence...", answer: "and the darkness of man's heart"
        },
        {
            question: "Roger's arm was conditioned bya civilisation...", answer: "that knew nothing of him and was in ruins"
        },
        {
            question: "The conch exploded into a thousand white fragments...", answer: "and ceased to exist"
        },
        {
            question: "Simon found for them...", answer: "the fruit they could not reach"
        }
    ];

    let currentCard = 0;

    const flashcardElement = document.getElementById('flashcard');
    const questionElement = document.getElementById('question');
    const answerElement = document.getElementById('answer');

    function displayCard() {

    // Disable animation temporarily
    flashcardElement.style.transition = 'none';

    // Show front of card
    flashcardElement.classList.remove('is-flipped');

    // Update text
    questionElement.textContent = flashcards[currentCard].question;
    answerElement.textContent = flashcards[currentCard].answer;

    // Force browser refresh
    void flashcardElement.offsetWidth;

    // Turn animation back on
    flashcardElement.style.transition = 'transform 0.6s';
}

document.getElementById('flip-card').addEventListener('click', () => {
    flashcardElement.classList.toggle('is-flipped');
});

document.getElementById('next-card').addEventListener('click', () => {
    currentCard = (currentCard + 1) % flashcards.length;
    displayCard();
});

document.getElementById('prev-card').addEventListener('click', () => {
    currentCard = (currentCard - 1 + flashcards.length) % flashcards.length;
    displayCard();
});

displayCard();
});