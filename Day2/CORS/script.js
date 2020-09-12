// creating an XMLHttpRequest object
var xhr = new XMLHttpRequest();
var cors = 'https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com';
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
xhr.open('GET',cors);
xhr.send();

