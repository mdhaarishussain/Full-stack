function UpdateClock()
{
    const now=new Date();
    const timeString = now.toLocaleTimeString();
    document.querySelector("#clock").textContent=timeString;
}

setInterval(UpdateClock,1000);