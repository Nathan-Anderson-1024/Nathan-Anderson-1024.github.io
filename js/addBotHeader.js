import { getDate } from "./date.js";
import { chatHistory, form } from "./addUserHeader.js";
import { addMessage } from "./addMessage.js";

export const sendHelp = () => {
    const localTime = getDate();
    const spanTime = document.createElement('span');
    const spanDiscordBot = document.createElement('span');
    spanDiscordBot.classList.add('fw-bold', 'fs-4', 'me-2')
    spanDiscordBot.innerHTML = 'Discord Bot'
    spanTime.classList.add('fs-6')
    spanTime.innerHTML = localTime;
    chatHistory.appendChild(spanDiscordBot)
    chatHistory.appendChild(spanTime)
    addMessage('Use !8ball to summon the fortune teller.');
    window.scrollTo(0, document.body.scrollHeight);
    form.removeEventListener('click', sendHelp);
    
}