// variable declaration for each clock hand referencing the html elements
const hourHand = document.querySelector('.hour-hand');
const minutesHand = document.querySelector('.min-hand');
const secondsHand = document.querySelector('.second-hand');

const setTime = () => {
    const now = new Date();
    
    const seconds = now.getSeconds(); // get the current seconds
    secondsDegrees = ((seconds / 60) * 360) + 90; // calculates the n. of degrees to rotate the hand
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`; // Apply rotation to the clock hand
    
    const minutes = now.getMinutes();
    minutesDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hours = now.getHours();
    hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setTime, 1000);