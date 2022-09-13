import { getDate } from "./date.js";

export const form = document.getElementById('chat-form');
export const chatHistory = document.getElementById('chat');

export function addUserHeader() {
    const spanTime = document.createElement('span');
    const spanYou = document.createElement('span');
    spanYou.classList.add('fw-bold','fs-4','me-2')
    spanYou.innerHTML = 'You'
    spanTime.classList.add('fs-6')
    const localTime = getDate();
    spanTime.innerHTML = localTime;
    chatHistory.appendChild(spanYou)
    chatHistory.appendChild(spanTime)
}
    