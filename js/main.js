import { sendHelp, displayHeader, form, chatHistory } from "./addMessageHeader.js";
import { addMessage, Data } from "./addMessage.js";


const input = document.querySelector("[name='chat-msg']");

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

//WHO answers the 8ball can give
const whoAnswers = ['Robert Downey Jr.', 'Emma Stone', 'SpongeBob SquarePants', 'Sandra Bullock', 'Brad Pitt', 'Natalie Portman',
'Leonardo DiCaprio', 'Scarlett Johansson', 'Patrick Star'];

// WHEN answers the 8ball can give
const whenAnswers = ['Tomorrow', 'In two days', 'In a week', 'In a month', 'In five years', 'Never', 'In one year', 'In 3 months',
'In six months',
'In five days'];

//WHY answers the 8ball can give
const whyAnswers = ['Whynot', 'Because I said so', 'No one knows', 'To keep things interesting', 'Because of a bet'];

//WHERE answers the 8ball can give
const whereAnswers = ['The Bahamas', 'Disneyland', 'Disney World', 'Fresno, CA', 'Antartica', 'The North Pole', 'The South Pole', 
'The East Coast', 'The West Coast', 'At the mall'];


form.onsubmit = (event) => {
    //const localTime = getDate(); // Get local time
    displayHeader('You')
    event.preventDefault(); //cant just submit nothing
    addMessage(input.value); //adds your message to dom after hitting enter
    const lastIndex = Data.length -1;
    const lowerCaseInput = input.value.toLowerCase();
    console.log(lowerCaseInput.substring(7,10))
    if (Data[lastIndex] === '!8ball') {
        eightBallInfo();
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 10 && lowerCaseInput.substring(7,10).includes('who')) {
        displayHeader('8 Ball Bot');
        getUserQuestion(whoAnswers);
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 10 && lowerCaseInput.substring(7,11).includes('when')) {
        displayHeader('8 Ball Bot');
        getUserQuestion(whenAnswers);
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 10 && lowerCaseInput.substring(7,10).includes('why')) {
        displayHeader('8 Ball Bot');
        getUserQuestion(whyAnswers);
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 10 && lowerCaseInput.substring(7,12).includes('where')) {
        displayHeader('8 Ball Bot');
        getUserQuestion(whereAnswers);
    }
    else if (lowerCaseInput.includes('!8ball') && input.value.length > 10 && lowerCaseInput.substring(7,11).includes('will')) {
        displayHeader('8 Ball Bot');
        getUserQuestion(answerArray);
    }
    window.scrollTo(0, document.body.scrollHeight); //Scrolls to the bottom to view message
    input.value = ''; //clears input field
}

form.addEventListener('click', sendHelp);



// Capture user question and check if its already been asked before.
const getUserQuestion = (array) => {
    const randomNum = Math.floor(Math.random() * array.length); //picks random number
    //returnAnswer pushed 8ball response to array and returns an alert to the user of the answer
    answerMemory.push(array[randomNum]);
    const originalQuestion = input.value.split("!8ball ").pop(); //splits 8ball of the question and returns the question
    return addMessage(`You asked me "${originalQuestion}", and my answer is ${array[randomNum]}`);
};

// sends 8ball info when user types !8ball
const eightBallInfo = () => {
    displayHeader('8 Ball Bot');
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
