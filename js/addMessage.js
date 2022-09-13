import { chatHistory } from "./addUserHeader.js";


export const Data = []
export function addMessage(userMessage) {
    Data.push(userMessage); //Adds users text to the array
    const li = document.createElement('li'); //creates a new list item 
    li.classList.add('hover-rows','chat-item'); //adds hover-rows class to li
    li.innerHTML = userMessage; //sets li in the html
    chatHistory.appendChild(li); //appends li to the ul
    localStorage.setItem('chat', JSON.stringify(Data)); //saves entry in local storage
}