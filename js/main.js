// const form = document.querySelector('form');
const form = document.getElementById('chat-form')
const input = document.querySelector("[name='chat-msg']");
const chatHistory = document.getElementById('chat');
// set up time variable
const current = new Date();
// Get local time
const localTime = current.toLocaleTimeString();
// Add some bootstrap classes to time in a not so elegant fashion
const localSmallFont = `<span class='fs-6'>${localTime}</span>`
// Add some bootstrap classes to style 'You'
const you = "<span class='fw-bold fs-4 me-2'>You</span> ";
// Combine you and time to look like discord text
const combined = you + localSmallFont;
// Initialize array for messages
const Data = []

// pushes user typed message to the document
function addMessage(userMessage) {
    Data.push(userMessage); //Adds users text to the array
    const li = document.createElement('li'); //creates a new list item 
    li.classList.add('hover-rows'); //adds hover-rows class to li
    li.classList.add('chat-item') //adds chat-item class to li
    li.innerHTML = userMessage; //sets li in the html
    chatHistory.appendChild(li); //appends li to the ul
    localStorage.setItem('chat', JSON.stringify(Data)); //saves entry in local storage
}


form.onsubmit = (event) => {
    event.preventDefault(); //cant just submit nothing
    addMessage(combined); //adds You + time li to dom after hitting enter
    addMessage(input.value); //adds your message to dom after hitting enter
    window.scrollTo(0, document.body.scrollHeight); //Scrolls to the bottom to view message
}
