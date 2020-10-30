
async function getVideo(){
    let response = await fetch("https://theaudiodb.com/api/v1/json/1/mvid.php?i=112024");
    let data = await response.json();
    console.log(data);
    let html = "";
    data.mvids.forEach(response => {
        let url = response.strMusicVid.split("v=")[1]
        console.log(url)
        html +=
         `<div class="card-header">
         <h4>${response.strTrack}</h4>
         <ul class="list-group">
         <iframe width="400" height="345" src="https://www.youtube.com/embed/${url}?autoplay=1&mute=1">
         </iframe>
         
            <li class="list-group-item">Album ID: ${response.idAlbum}</li>
            <li class="list-group-item">Artist ID: ${response.idArtist}</li>
            <li class="list-group-item">Track ID: ${response.idTrack}</li>
         </ul>

        </div>`
    });

    document.getElementById('television').innerHTML = html;
}

getVideo();
