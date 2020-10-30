// <div class="container">
//           <div class="row">
//             <div class="col-sm-12 col-md-8 col-lg-8 tv overflow-auto">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//                 <img src="TV.PNG" alt="TV" class="tvi">
//             </div>

// const div = document.createElement('div');
// div.classList.add("container");
// document.body.append(div);

// const row = document.createElement('div');
// row.classList.add("row");
// div.append(row);


// const division = document.createElement('div');
// division.classList.add("col-sm-12");
// division.classList.add("col-md-8");
// division.classList.add("col-lg-8");
// division.classList.add("tv");
// division.classList.add("overflow-auto");
// row.append(division);

async function getMusicAsync(){
    let response = await fetch("https://theaudiodb.com/api/v1/json/1/album.php?i=112024");
    let data = await response.json();
    console.log(data);
    let html = "";
    data.album.forEach(response => {
        html +=
         `<div class="card-header">
         <h4>${response.strAlbum}</h4>
         <ul class="list-group">
            <img src="${response.strAlbumThumb}" id="album"></img>
            <li class="list-group-item">Album ID: ${response.idAlbum}</li>
            <li class="list-group-item">Artist ID: ${response.idArtist}</li>
            <li class="list-group-item">Label ID: ${response.idLabel}</li>
            <li class="list-group-item">Album Striped: ${response.strAlbumStripped}</li>
         </ul>
        </div>`
    });

    document.getElementById('television').innerHTML = html;
}

getMusicAsync();
