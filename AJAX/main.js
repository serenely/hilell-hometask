const countries = document.querySelector('.countries')
const country = document.querySelector('.country')
const weather = []
const weatherObj = {}
const keys = ['city', 'temperature', 'pressure', 'humidity', 'wind speed', 'deg', 'ico']

const request = new XMLHttpRequest()
request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
request.send()

request.addEventListener('load', function () {
    const data = JSON.parse(this.response)
    const q = data.name
    const dataMAin = data.main
    const temperature = dataMAin.temp
    const tysk = dataMAin.pressure
    const vologist = dataMAin.humidity
    const dataWind = data.wind
    const windSpeed = dataWind.speed
    const napryam = dataWind.deg
    const weatheIco = data.weather[0].icon

    weather.push(q, temperature, tysk, vologist, windSpeed, napryam, weatheIco)
    for (let i = 0; i < weather.length; i++) {
        weatherObj[keys[i]] = weather[i]
    }
    const link = document.createElement('link')
    link.rel = 'shortcut icon';
    link.href = `http://openweathermap.org/img/w/${weatheIco}.png`
    document.head.appendChild(link);
    console.log(weatherObj);
})