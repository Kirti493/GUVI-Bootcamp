// creating an XMLHttpRequest object
var xhr = new XMLHttpRequest();
var openWeathermap = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=e97adeb719ce0fdd36331ed8e5ea0be1';

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
        if(xhr.status == 200){
            console.log(JSON.parse(xhr.responseText));

        }
    }
};

// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET', openWeathermap);
xhr.send();

