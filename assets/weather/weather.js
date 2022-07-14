var apikey="b189914f1691588c48fd88f62352cc63"
var url1="https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}"
var url2="https://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&appid=6eb39225f19081d854391179d7843a68"
var url3="https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid="+apikey
var icon="https://openweathermap.org/img/w/01d.png"
fetch(url2).then(function(response){
    return response.json ()
}).then(function(data){
    console.log(data)
    var cityname=data.name
    var temp=Math.round(data.main.temp)
    var cityel=$("<h2>").text(" The weather in " + cityname + " is " + temp + String.fromCharCode(176)).addClass("weather-info")
    $(".current").append(cityel)
    getForecast(data.coord.lat, data.coord.lon)
})
function getForecast(lat, lon){
    fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apikey}`).then(function(response){
        return response.json ()
    }).then(function(data){
        console.log(data)
        for(var i=1; i<6; i++){
            console.log(data.daily[i])
            var card=$("<div>").addClass("card")
            var cardtitle=$("<h3>").text(data.daily[i].dt)
            card.append(cardtitle)
            $(".forecast").append(card)
        }
    })

}