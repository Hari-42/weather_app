async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const apiKey = 'YOURAPIKEY'; // Replace with your OpenWeatherMap API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        document.getElementById('result').innerHTML = `
            <h3>${data.name}, ${data.sys.country}</h3>
            <p>Temperature: ${data.main.temp}&#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = `<p style="color: red;">${error.message}</p>`;
    }
}
