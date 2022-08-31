// const form = document.querySelector('form');
const form = document.getElementById('chat-form');
const input = document.querySelector("[name='chat-msg']");
const chatHistory = document.getElementById('chat');

// Initialize array for messages
const Data = []

// pushes user typed message to the document
function addMessage(userMessage) {
    Data.push(userMessage); //Adds users text to the array
    const li = document.createElement('li'); //creates a new list item 
    li.classList.add('hover-rows'); //adds hover-rows class to li
    li.classList.add('chat-item'); //adds chat-item class to li
    li.innerHTML = userMessage; //sets li in the html
    chatHistory.appendChild(li); //appends li to the ul
    localStorage.setItem('chat', JSON.stringify(Data)); //saves entry in local storage
}

// get date function
function getDate() {
    const current = new Date();
    const localTime = current.toLocaleTimeString();
    return localTime
}
getDate();

form.onsubmit = (event) => {
    const localTime = getDate(); // Get local time
    const spanTime = document.createElement('span');
    const spanYou = document.createElement('span');
    spanYou.classList.add('fw-bold')
    spanYou.classList.add('fs-4')
    spanYou.classList.add('me-2')
    spanYou.innerHTML = 'You'
    spanTime.classList.add('fs-6')
    spanTime.innerHTML = localTime;
    console.log(spanYou.innerHTML)
    chatHistory.appendChild(spanYou)
    chatHistory.appendChild(spanTime)
    event.preventDefault(); //cant just submit nothing
    addMessage(input.value); //adds your message to dom after hitting enter
    const lastIndex = Data.length -1;
    if (Data[lastIndex] === '!8ball') {
        eightBallInfo();
    }
    else if (input.value.includes('!8ball') && input.value.length > 15 && input.value.includes("?")) {
        eightBallResult();
        getUserQuestion();
    }
    else if (input.value.includes('!8ball') &&!input.value.includes("?")) {
        eightBallResult();
        addMessage('Please include a ? at the end of your question.')
    }
    window.scrollTo(0, document.body.scrollHeight); //Scrolls to the bottom to view message
    input.value = ''; //clears input field
}

// display help message from bot
// when user clicks on chat bar send help message
const sendHelp = () => {
    const localTime = getDate();
    const spanTime = document.createElement('span');
    const spanDiscordBot = document.createElement('span');
    spanDiscordBot.classList.add('fw-bold')
    spanDiscordBot.classList.add('fs-4')
    spanDiscordBot.classList.add('me-2')
    spanDiscordBot.innerHTML = 'Discord Bot'
    spanTime.classList.add('fs-6')
    spanTime.innerHTML = localTime;
    chatHistory.appendChild(spanDiscordBot)
    chatHistory.appendChild(spanTime)
    addMessage('Use !8ball to summon the fortune teller.');
    window.scrollTo(0, document.body.scrollHeight);
    form.removeEventListener('click', sendHelp);
    
}
form.addEventListener('click', sendHelp);

// implement !8ball command.
//array for remembering the user questions
const inputMemory = [];
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
    'hazy, try again',
    "you dont want to know the answer",
    'concentrate and ask again'
];
// Capture user question and check if its already been asked before.
const getUserQuestion = () => {
    //const userInput = document.getElementById("message").value; //captures user question
    const randomNum = Math.floor(Math.random() * answerArray.length); //picks random number
    //returnAnswer pushed 8ball response to array and returns an alert to the user of the answer
    answerMemory.push(answerArray[randomNum]);
    const originalQuestion = input.value.split("!8ball ").pop();
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
    addMessage('<a href="https://www.google.com" target="_blank">Fortune Teller</a>')
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
