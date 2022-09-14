import { chatHistory } from "./addUserHeader.js";


export const Data = []
//adds user message to the dom, checks for html insertion and sanitizes it
export function addMessage(userMessage) {
    const htmlInjectTest = (new RegExp(/</g)).test(userMessage)
    if (htmlInjectTest) {
        santizeMessage(userMessage);
    }
    else {
        defaultMessage(userMessage)
    }
    
}

function santizeMessage(userMessage) {
    const sanitizedMessage = userMessage.replace(/</g,"&lt;");
    Data.push(sanitizedMessage); //Adds users text to the array
    const li = document.createElement('li'); //creates a new list item 
    li.classList.add('hover-rows','chat-item'); //adds hover-rows class to li
    li.innerHTML = sanitizedMessage; //sets li in the html
    chatHistory.appendChild(li); //appends li to the ul
    localStorage.setItem('chat', JSON.stringify(Data)); //saves entry in local storage
}

function defaultMessage(userMessage) {
    Data.push(userMessage); //Adds users text to the array
    const li = document.createElement('li'); //creates a new list item 
    li.classList.add('hover-rows','chat-item'); //adds hover-rows class to li
    li.innerHTML = userMessage; //sets li in the html
    chatHistory.appendChild(li); //appends li to the ul
    localStorage.setItem('chat', JSON.stringify(Data)); //saves entry in local storage
}