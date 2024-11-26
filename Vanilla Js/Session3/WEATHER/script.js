async function getWeather() {
    const location = document.getElementById('location').value;
    const response = await fetch(`https://wttr.in/${location}?format=3`);
    console.log(response);
    if (response.ok) {
        const weatherData = await response.text();
        document.getElementById('weather').textContent = weatherData;
    } else {
        document.getElementById('weather').textContent = 'Weather data not available';
    }
}
