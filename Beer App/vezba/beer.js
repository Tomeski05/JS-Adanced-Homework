function App() {
    
    this.dataProcessingService = new DataProcessingService();
    this.results = document.getElementById("results");
    this.allBeers = document.getElementById("allBeers")
    this.searchBtn = document.getElementById("searchBtn");
    this.searchInput = document.getElementById("searchInput");

    this.init = function () {
       
        this.allBeers.addEventListener('click', () => {
            this.dataProcessingService.getAllBeers(this.results);
        })

        this.searchBtn.addEventListener(`click`, () => {
            let name = this.searchInput.value;
            console.log(name);
            this.dataProcessingService.searchBeersByName(name);
        })
        
    }}

function DataProcessingService() {
    this.apiService = new ApiService();

    this.getAllBeers = function (element) {
        this.apiService.getAll()
        .then(response => response.json())
        .then(data => this.mapBeers(data))
        .then(beers => this.showBeers(beers, element));
    };

    this.searchBeersByName = function (name, element) {
        this.apiService.searchByName (name)
        .then(data => console.log(data));
    }

    this.mapBeers = function (beers) {
        return new Promise ((resolve, reject) => {
            if (!beers || beers.length === 0) {
                reject("Something went wrong")
            }
            let mapedBeers = beers.map (beers => {
                return {
                    name: beers.beers_name,
                    description: beers.description,
                    img: beers.image_url
                }
            })
            resolve (mapedBeers)
        })
    };

    this.showBeers = function (beers, element) {
        element.innerHTML = "";
        let html = `<div class="row">`;

        for (let beer of beers) {
        let col = `<div class="col-md-6 col-lg-4">
            <div class="card" style="width: 15rem;">
                <img src="${beer.img}" height="400" class="card-img-top" alt="${beer.image_url}beers image">
                <div class="card-body">
                    <h5 class="card-title">${beer.name}</h5>
                    <p class="card-text">
                    Description: ${beer.description}
                    </p>
                    <a href="#" class="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>`;
        html += col;
    }

    html += "</div>";
    element.innerHTML = html;
}

function ApiService() {
    this.baseUrl = "https://api.punkapi.com/v2/";

    this.getAll = function () {
        let url = `${this.baseUrl}beers`;
        return fetch (url);
    };

    this.searchByName = function (name) {
        let url = `${this.baseUrl}name/${name}`;
        return new Promise ((resolve, reject) => {
            $.ajax ({
                url: url,
                success: function (response) {
                    resolve (response);
                },
                error: function (error) {
                    reject (error);
                }
            })
        })
    }
}}

let app = new App();
app.init();