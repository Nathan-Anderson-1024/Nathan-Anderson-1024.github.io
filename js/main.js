// const form = document.querySelector('form');
const form = document.getElementById('chat-form')
const input = document.querySelector("[name='chat-msg']");
const chatHistory = document.getElementById('chat');

const Data = []

function addMessage(userMessage) {
    Data.push(userMessage);
    const li = document.createElement('li');
    li.innerHTML = userMessage;
    chatHistory.appendChild(li);
    localStorage.setItem('chat', JSON.stringify(Data));
}

form.onsubmit = (event) => {
    event.preventDefault();
    addMessage(input.value);
}
