// creating an XMLHttpRequest object
var xhr = new XMLHttpRequest();
var openApi = "https://dog.ceo/api/breeds/list/all"

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4){
         if(xhr.status == 200){
             console.log(JSON.parse(xhr.responseText));
         } 
         if(xhr.status == 404) {       
            console.log("File or resource not found");
           }
        }
  };

// Open a new connection, using the GET request on the URL endpoint
xhr.open('GET',openApi);
xhr.send();

