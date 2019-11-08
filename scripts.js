const app = document.getElementById('root');
const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var url = 'https://ghibliapi.herokuapp.com/films';
var request = new XMLHttpRequest();

request.open('GET', url, true);
request.onload = function() {
    var iStatus = request.status;
// Sucess
    if (iStatus >= 200 && iStatus <= 400) {
        var oData = JSON.parse(this.response);
        oData.forEach(movie => {
            console.log(movie.title);

            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            const h1 = document.createElement('h1');
            h1.textContent = movie.title;

            const p = document.createElement('p');
            p.textContent = movie.description;

            container.appendChild(card);
            card.appendChild(h1);
            card.appendChild(p);

        });
        
    } else {
        console.log("ERROR");
    }
}

request.send();