//gets current time
export function getDate() {
    const current = new Date();
    const localTime = current.toLocaleTimeString();
    return localTime
}