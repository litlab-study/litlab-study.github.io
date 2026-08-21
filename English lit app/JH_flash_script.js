document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "Finish the quote: Trampled...", answer: "calmly"
        },
        {
            question: "Like some damned...", answer: "Juggernaut"
        },
        {
            question: "I beg of you...", answer: "to let it sleep"
        },
        {
            question: "Grew pale to the lips...", answer: "and there came a blackness about his eyes"
        },
        {
            question: "Even in the houses...", answer: "the fog began to lie thickly"
        }, 
        {
            question: "The large, handsome face of Dr Jekyll...", answer: "grew pale to the lips and there cae a blackness about his eyes"
        },
        {
            question: "That child of hell had nothing human...", answer: "nothing lived in him but fear and hatred"
        },
        {
            question: "All human beings, as we meet them...", answer: "are commingled out of good and evil"
        },
        {
            question: "Snarled aloud...", answer: "into a savage laugh"
        },
        {
            question: "The temptation of a discovery...", answer: "so singular and profound"
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