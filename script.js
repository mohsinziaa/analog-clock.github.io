setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds(); 
    let hoursRotation = (30*hours) + (minutes/2);
    let minutesRotation = (6*minutes); 
    let secondsRotation = (6*seconds);
    console.log("Hours : " + hours + " Minutes : " + minutes + " Seconds : " + seconds) 

    document.getElementById('hours').style.transform = `rotate(${hoursRotation}deg)`;
    document.getElementById('minutes').style.transform = `rotate(${minutesRotation}deg)`;
    document.getElementById('seconds').style.transform = `rotate(${secondsRotation}deg)`; 

}, 1000);