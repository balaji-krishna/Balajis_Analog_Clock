setInterval(setClock, 1000)

const hoursHand = document.querySelector('[hour-hand-data]')
const minutesHand = document.querySelector('[minute-hand-data]')
const secondsHand = document.querySelector('[second-hand-data]')

function setClock(){
    const currentDate = new Date()
    const seconds = currentDate.getSeconds() / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60
    const hours = (minutes + currentDate.getHours()) / 12
    setRotation(secondsHand, seconds)
    setRotation(minutesHand, minutes)
    setRotation(hoursHand, hours)
}

function setRotation(element, rotation){
    element.style.setProperty('--rotation', rotation * 360)
}

setClock()