let searchbutton = document.querySelector(".searchbtn")
let search = document.getElementById("inputs")

wthr22 = document.querySelector(".wthr2")

//press search button to capture user values
document.querySelector(".searchbtn").addEventListener("click", function searches() {
    localStorage.setItem("userinput","")
}
)


//current weather for az api call is below
fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=33.306160&lon=-111.841248&units=imperial&exclude=minutely,hourly,alerts&appid=6d8abdcf0ec2ae046d18d13035563154`)
    .then(function (result) { return result.json(); })
    .then(function (result) {
        let resultcontainer = document.getElementById("todayswthr");
        resultcontainer.innerHTML = (result.timezone) +(result.current.temp+` degrees`)+(`Humidity `+result.current.humidity)+(`Wind Speed Is `+result.current.wind_speed+`MPH`)+(`UV INDEX `+result.current.uvi);
        document.querySelector(".searchbtn").addEventListener("click", function add() {

            document.getElementById("wthr11").innerHTML = JSON.stringify(result.daily[0]);
            document.getElementById("wthr12").innerHTML = JSON.stringify(result.daily[1]);
            document.getElementById("wthr13").innerHTML = JSON.stringify(result.daily[2]);
            document.getElementById("wthr14").innerHTML = JSON.stringify(result.daily[3]);
            document.getElementById("wthr15").innerHTML = JSON.stringify(result.daily[4])
        })
    })



//apikey// 6d8abdcf0ec2ae046d18d13035563154

