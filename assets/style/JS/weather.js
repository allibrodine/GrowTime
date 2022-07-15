var apikey="6eb39225f19081d854391179d7843a68"
var url1="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
var url2="https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid="+apikey

fetch(url2).then(function(response){
    return response.json ()
}).then(function(data){
    console.log(data)
    var cityname=data.name
    var temp=Math.round(data.main.temp)
    var cityel=$("<h2>").text(" The weather in " + cityname + " is " + temp + String.fromCharCode(176)).addClass("weather-info")
    $(".current").append(cityel)
})