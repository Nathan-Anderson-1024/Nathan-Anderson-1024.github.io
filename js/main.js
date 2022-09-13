import { getDate } from "./date.js";
import { addUserHeader, form } from "./addUserHeader.js";
import { sendHelp } from "./addBotHeader.js";
import { addMessage, Data } from "./addMessage.js";


const input = document.querySelector("[name='chat-msg']");




form.onsubmit = (event) => {
    const localTime = getDate(); // Get local time
    addUserHeader();
    event.preventDefault(); //cant just submit nothing
    addMessage(input.value); //adds your message to dom after hitting enter
    const lastIndex = Data.length -1;
    const lowerCaseInput = input.value.toLowerCase();
    if (Data[lastIndex] === '!8ball') {
        eightBallInfo();
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 15 && lowerCaseInput.includes('will')) {
        eightBallResult();
        getUserQuestion();
    }
    window.scrollTo(0, document.body.scrollHeight); //Scrolls to the bottom to view message
    input.value = ''; //clears input field
}

form.addEventListener('click', sendHelp);

// implement !8ball command.

//array for remembering the 8ball answers
const answerMemory = [];
// Answers the 8ball can give
const answerArray = [
    'Definitely.',
    'No.',
    'Possibly.',
    'There is a small chance.',
    'It is very likely.',
    'No chance.',
    'My sources say yes!',
    'Without a doubt yes!',
    'Hazy, but I say it will happen',
    'You will',
    'Concentrate and ask again',
    'No way'
];
// Capture user question and check if its already been asked before.
const getUserQuestion = () => {
    const randomNum = Math.floor(Math.random() * answerArray.length); //picks random number
    //returnAnswer pushed 8ball response to array and returns an alert to the user of the answer
    answerMemory.push(answerArray[randomNum]);
    const originalQuestion = input.value.split("!8ball ").pop(); //splits 8ball of the question and returns the question
    return addMessage(`You asked me "${originalQuestion}", and my answer is ${answerArray[randomNum]}`);
};

// sends 8ball info when user types !8ball
const eightBallInfo = () => {
    const localTime = getDate();
    const localSmallFont = `<span class='fs-6'>${localTime}</span>`; // Add some bootstrap classes to time in a not so elegant fashion
    const you = "<span class='fw-bold fs-4 me-2'>Discord Bot</span> "; // Add some bootstrap classes to style 'You'
    const combined = you + localSmallFont;
    addMessage(combined);
    addMessage('Welcome to the fortune teller! Use <strong>!8ball "Your question here"</strong> in the chat or click on the link below to open the fortune teller in a new window.');
    addMessage('<a href="https://nathan-anderson-1024.github.io/magic8ball/" target="_blank">Fortune Teller</a>')
    window.scrollTo(0, document.body.scrollHeight);
}
// sends bot time and name to chat
const eightBallResult = () => {
    const localTime = getDate();
    const localSmallFont = `<span class='fs-6'>${localTime}</span>`; // Add some bootstrap classes to time in a not so elegant fashion
    const you = "<span class='fw-bold fs-4 me-2'>Discord Bot</span> "; // Add some bootstrap classes to style 'You'
    const combined = you + localSmallFont;
    addMessage(combined);
}
