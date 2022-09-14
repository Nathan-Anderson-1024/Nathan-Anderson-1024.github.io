import { getDate } from "./date.js";
import { addMessage } from "./addMessage.js";

export const form = document.getElementById('chat-form');
export const chatHistory = document.getElementById('chat');

export const sendHelp = () => {
    displayHeader('8 Ball Bot');
    addMessage('Use !8ball to summon the Magic 8 Ball.');
    window.scrollTo(0, document.body.scrollHeight);
    form.removeEventListener('click', sendHelp);
    
}
//adds name of bot and time to DOM
export const displayHeader = (inputText) => {
    const localTime = getDate();
    const spanTime = document.createElement('span');
    const spanDiscordBot = document.createElement('span');
    spanDiscordBot.classList.add('fw-bold', 'fs-4', 'me-2')
    spanDiscordBot.innerHTML = inputText
    spanTime.classList.add('fs-6')
    spanTime.innerHTML = localTime;
    chatHistory.appendChild(spanDiscordBot)
    chatHistory.appendChild(spanTime)
}