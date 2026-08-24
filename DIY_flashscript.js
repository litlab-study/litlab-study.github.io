const container = document.querySelector(".container");

const addQuestionCard =
    document.getElementById("add-question-card");

const addFlashcardBtn =
    document.getElementById("add-flashcard");

const saveButton =
    document.getElementById("save-button");

const closeButton =
    document.getElementById("close-button");

const questionInput =
    document.getElementById("question");

const answerInput =
    document.getElementById("answer");

const errorMessage =
    document.getElementById("error");

const flashcardElement =
    document.getElementById("flashcard");

const questionDisplay =
    document.getElementById("question-display");

const answerDisplay =
    document.getElementById("answer-display");

const prevButton =
    document.getElementById("prev-card");

const flipButton =
    document.getElementById("flip-card");

const nextButton =
    document.getElementById("next-card");

const emptyMessage =
    document.getElementById("empty-message");

const cardManagement =
    document.getElementById("card-management");

const editCurrentButton =
    document.getElementById("edit-current");

const deleteCurrentButton =
    document.getElementById("delete-current");


/* =========================
   LOAD SAVED FLASHCARDS
========================= */

let flashcards =
    JSON.parse(localStorage.getItem("flashcards")) || [];

let currentCard = 0;
let editingIndex = null;


/* =========================
   SAVE TO LOCAL STORAGE
========================= */

function saveToStorage() {

    localStorage.setItem(
        "flashcards",
        JSON.stringify(flashcards)
    );

}


/* =========================
   DISPLAY CARD
========================= */

function displayCard() {

    if (flashcards.length === 0) {

        flashcardElement.classList.add("hide");
        emptyMessage.classList.remove("hide");
        cardManagement.classList.add("hide");

        prevButton.disabled = true;
        nextButton.disabled = true;
        flipButton.disabled = true;

        return;
    }


    emptyMessage.classList.add("hide");

    flashcardElement.classList.remove("hide");
    cardManagement.classList.remove("hide");


    prevButton.disabled = false;
    nextButton.disabled = false;
    flipButton.disabled = false;


    // Always show the front when changing cards

    flashcardElement.classList.remove("is-flipped");


    questionDisplay.textContent =
        flashcards[currentCard].question;

    answerDisplay.textContent =
        flashcards[currentCard].answer;

}


/* =========================
   FLIP
========================= */

flipButton.addEventListener("click", () => {

    if (flashcards.length === 0) return;

    flashcardElement.classList.toggle("is-flipped");

});


/* =========================
   NEXT
========================= */

nextButton.addEventListener("click", () => {

    if (flashcards.length === 0) return;

    currentCard =
        (currentCard + 1) % flashcards.length;

    displayCard();

});


/* =========================
   PREVIOUS
========================= */

prevButton.addEventListener("click", () => {

    if (flashcards.length === 0) return;

    currentCard =
        (currentCard - 1 + flashcards.length)
        % flashcards.length;

    displayCard();

});


/* =========================
   ADD FLASHCARD
========================= */

addFlashcardBtn.addEventListener("click", () => {

    editingIndex = null;

    questionInput.value = "";
    answerInput.value = "";

    errorMessage.classList.add("hide");

    container.classList.add("hide");

    addQuestionCard.classList.remove("hide");

});


/* =========================
   CLOSE POPUP
========================= */

closeButton.addEventListener("click", () => {

    addQuestionCard.classList.add("hide");

    container.classList.remove("hide");

    questionInput.value = "";
    answerInput.value = "";

    errorMessage.classList.add("hide");

    editingIndex = null;

});


/* =========================
   SAVE / EDIT
========================= */

saveButton.addEventListener("click", () => {

    const question =
        questionInput.value.trim();

    const answer =
        answerInput.value.trim();


    if (!question || !answer) {

        errorMessage.classList.remove("hide");

        return;
    }


    errorMessage.classList.add("hide");


    /* EDIT */

    if (editingIndex !== null) {

        flashcards[editingIndex] = {
            question: question,
            answer: answer
        };

        currentCard = editingIndex;

    }


    /* ADD */

    else {

        flashcards.push({
            question: question,
            answer: answer
        });

        currentCard =
            flashcards.length - 1;

    }


    saveToStorage();

    displayCard();


    addQuestionCard.classList.add("hide");

    container.classList.remove("hide");

    questionInput.value = "";
    answerInput.value = "";

    editingIndex = null;

});


/* =========================
   EDIT CURRENT CARD
========================= */

editCurrentButton.addEventListener("click", () => {

    if (flashcards.length === 0) return;


    editingIndex = currentCard;


    questionInput.value =
        flashcards[currentCard].question;

    answerInput.value =
        flashcards[currentCard].answer;


    errorMessage.classList.add("hide");


    container.classList.add("hide");

    addQuestionCard.classList.remove("hide");

});


/* =========================
   DELETE CURRENT CARD
========================= */

deleteCurrentButton.addEventListener("click", () => {

    if (flashcards.length === 0) return;


    flashcards.splice(currentCard, 1);


    saveToStorage();


    if (currentCard >= flashcards.length) {

        currentCard =
            flashcards.length - 1;

    }


    if (flashcards.length === 0) {

        currentCard = 0;

    }


    displayCard();

});


/* =========================
   START
========================= */

displayCard();