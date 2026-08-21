document.addEventListener('DOMContentLoaded', () => {
    const flashcards = [
        {
            question: "Finish the quote: Fair is foul and...", answer: "foul is fair"
        },
        {
            question: "Out, out, brief candle! ...", answer: "Life's but a walking shadow"
        },
        {
            question: "I have no spur to prick the sides of my intent...", answer: "but only vaulting ambition which o'erleaps itself"
        },
        {
            question: "Is this a dagger which I see before me...", answer: "the handle toward my hand?"
        },
        {
            question: "A little water...", answer: "clears us of this deed"
        },
        {
            question: "His virtues will...", answer: " plead like angels"
        },
        {
            question: "His gashed stabs... ", answer: "looked like a breach in nature"
        },
        {
            question: "This tyrant...", answer: "whose sole name blisters our tongues"
        },
        {
            question: "I am in blood...", answer: "Stepped in so far"
        },
        {
            question: "O full of scorpions...", answer: "is my mind, dear wife"
        },
        {
            question: "Stars, hide your fires...", answer: "let not light see my black and deep desires"
        },
        {
            question: "Yet I do fear thy nature...", answer: "It is too full of the milk of human kindness"
        },
        {
            question: "Unsex me here...", answer: "and fill me from the crown to the toe topfull of direst cruelty"
        },
        {
            question: "Naught's had, all's spent...", answer: "where desire is got without content"
        },
        {
            question: "Had he not resembled my father as he slept...", answer:"I had done't"
        },
        {
            question: "Sleep no more...", answer: "Macbeth does murder sleep"
        },
        {
            question: "Better be with the dead...", answer: "than on the torture of the mind to lie in restless ecstasy"
        },
        {
            question: "Out damned spot...", answer: "out I say!"
        },
        {
            question: "This dead butcher...", answer: "and his fiend-like queen"
        },
        {
            question: "It will have blood they say- ...", answer: "blood will have blood"
        },
        {
            question: "Come you spirits ...", answer: "who tend on mortal throughts"
        },
        {
            question: "My dearest partner...", answer: "of greatness"
        },
        {
            question: "To the weird sisters...", answer: "for I am bent to know by the worst means, the worst"
        },
        {
            question: "He had a wisdom...", answer: "that doth guide his valour"
        },
        {
            question: "He chid the sisters ...", answer: "when they first put the name of king upon me"
        },
        {
            question: "The instruments of darkness...", answer: "win us with honest trifles to betray's in deepest consequence"
        },
        {
            question: "Look like th'innocent flower...", answer: "but be the serpent under't"
        },
        {
            question: "There's no art...", answer: "to find the mind's construction in a face"
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