//import { getDate } from "./date.js";
import { addUserHeader, form, chatHistory } from "./addUserHeader.js";
import { sendHelp, displayBotHeader } from "./addBotHeader.js";
import { addMessage, Data } from "./addMessage.js";


const input = document.querySelector("[name='chat-msg']");




form.onsubmit = (event) => {
    //const localTime = getDate(); // Get local time
    addUserHeader();
    event.preventDefault(); //cant just submit nothing
    addMessage(input.value); //adds your message to dom after hitting enter
    const lastIndex = Data.length -1;
    const lowerCaseInput = input.value.toLowerCase();
    if (Data[lastIndex] === '!8ball') {
        eightBallInfo();
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 15 && lowerCaseInput.includes('will')) {
        displayBotHeader();
        getUserQuestion();
    }
    window.scrollTo(0, document.body.scrollHeight); //Scrolls to the bottom to view message
    input.value = ''; //clears input field
}

form.addEventListener('click', sendHelp);


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
    displayBotHeader();
    addMessage('Welcome to the fortune teller! Use !8ball "Your question here" in the chat or click on the link below to open the fortune teller in a new window.');
    const li = document.createElement('li');
    li.classList.add('hover-rows','chat-item', 'pt-4');
    const aElement = document.createElement('a');
    aElement.href = 'https://nathan-anderson-1024.github.io/magic8ball/';
    aElement.setAttribute('target', '_blank');
    aElement.classList.add('fw-bold', 'h5')
    aElement.innerHTML = 'Magic 8 Ball';
    li.appendChild(aElement)
    chatHistory.appendChild(li) 
    window.scrollTo(0, document.body.scrollHeight);
}
