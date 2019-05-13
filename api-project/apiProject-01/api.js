const url = 'https://api.nasa.gov/planetary/apod?api_key=ujghZmbTjEnhrYDja1WvFJ3JIyHBwjNYLuS8WO8h';


//const searchForm = document.querySelector('form');
const newPic = document.querySelector('btn');

document.getElementById('myBtn').addEventListener('click', fetchPhoto);

function fetchPhoto(e) {
    //e.preventDefault();

    fetch(url)
        .then(result => result.json())
        .then(json => {
            console.log(json);
            //displayCool(json.url);
            let space = json;
            let galaxy = new Image(670, 600);
            galaxy.src = json.url;
            //space.title = json.title;
            //console.log(space.date,space.copyright,space.url);

            document.body.appendChild(galaxy);
            document.getElementById("focus").appendChild(galaxy);
            document.getElementById("title").innerText = space.title;
            document.getElementById("date").innerHTML = space.date;
            document.getElementById("cite").innerText = space.copyright;
            //document.body.h3.appendChild(galaxy.title);
            //document.body.appendChild(imgTitle);
        })
        .catch(err => console.log(err))
}
/*
function displayCool(star) {
    star (s => {
        let galaxy = json.url(100, 200);
        galaxy.url = s;
        document.body.appendChild(galaxy);
    })
}
*/


/*
function displayInfo(payLoad) {
    payLoad.forEach(r => {
        let rocket = document.createElement('li');
        rocket[0].innerText = r.name + ', ' + r.country;
        rocket[0].innerText = r.active;
        highFlyers.appendChild(rocket);
    })
}
*/