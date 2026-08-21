document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "Finish the quote: I met a traveller...", answer: "from an antique land"
        },
        {
            question: "Finish the quote: Half sunk...", answer: "a shattered visage lies"
        },
        {
            question: "Finish the quote: Two vast and ...", answer: "trunkless legs of stone"
        },
        {
            question: "Finish the quote: A sneer of...", answer: "cold command"
        },
        {
            question: "Finish the quote: Look on My works, Ye Mighty, and despair...", answer: "nothing beside remains."
        }, 
        {
            question: "Finish the quote: Boundless and bare...", answer: "the lone and level sands stretch far away"
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

displayCard();
});