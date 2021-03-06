function App() {
    
    this.dataProcessingService = new DataProcessingService();
    this.results = document.getElementById("results");
    this.allBeers = document.getElementById("allBeers")
    this.searchBtn = document.getElementById("searchBtn");
    this.searchInput = document.getElementById("searchInput");
    this.randomBeers = document.getElementById("randomBeers");

    this.init = function () {
       
        this.allBeers.addEventListener('click', () => {
            this.dataProcessingService.getAllBeers(this.results);
        });

        this.searchBtn.addEventListener(`click`, () => {
            let name = this.searchInput.value;
            console.log(name);
            this.dataProcessingService.searchBeersByName(name);
        });

        this.randomBeers.addEventListener(`click`, () => {
            this.dataProcessingService.getRandomBeer(this.results);
        });

        this.results.addEventListener(`click`, function (event) {
            console.log(event.target)
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
        //.then(data => console.log(data));
    };

    this.mapBeers = function (beers) {
        return new Promise ((resolve, reject) => {
            if (!beers || beers.length === 0) {
                reject("Something went wrong")
            }
            let mapedBeers = beers.map (beers => {
                return {
                    name: beers.name,
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
                    <a href="#" id="${beer.id}" class="btn btn-primary">More Info</a>
                </div>
            </div>
        </div>`;
        html += col;
    }

    html += "</div>";
    element.innerHTML = html;
    };

    this.getRandomBeer = function (element)
    {
        this.apiService.getRandom()
        .then(response => response.json())
        .then(beers => {
            this.showMoreDetails(beers, element)
        })
        .catch(error => {
            console.log(error)
        })
    };

    this.mapMoreDetails = function (beers)
    {
        return new Promise ((resolve, reject) => {
            if (!beers || beers.length === 0) {
                reject ("Something is wrong");
            };

            let mapedMoreDetails = beers.map(beer => {
                return {
                    name: beer.name,
                    tagline: beers.tagline,
                    first_brewed: beer.first_brewed,
                    description: beer.description,
                    image_url: beer.image_url,
                    abv: beer.abv,
                    ibu: beer.ibu,
                    food_pairing: beer.food_pairing
                };
            });
            resolve (mapedMoreDetails);
        });
    };

    this.showMoreDetails = function (beers, element)
    {
        element.innerHTML = "";

        for (let beer of beers) {
            let cardDetails = `<div class="col-sm=6">
                    <div class="card-body mb-3 rounded bg-light">
                        <img class="class-body mb-3 rounded bg-light>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="card">
                        <div class="card-body bg-light">
                            <div class="card-header">
                                <h5 class="card-title">${beer.name}</h5><p>"${beers.tagline}"</p>
                            </div>

                            </br>
                            <p class="card-text>${beers.description}</p>
                            </br>
                            <p class="card-text>Brewed: ${beers.first_brewed}</p>
                            <p class="card-text>Alcohol: ${beers.abv}%</p>
                            <p class="card-text>Bitterness: ${beers.ibu} IBU</p>

                            </br>
                            <ul class="list-group list-group-flush">
                                <h5>Food pairing</h5>
                                <li class="list-group-item">${beers.food_pairing}</li>
                                <li class="list-group-item">${beers.food_pairing}</li>
                                <li class="list-group-item">${beers.food_pairing}</li>
                            </ul>
                        </div>
                    </div>
                </div>`;

            html += cardDetails;
            
        }
        html =+ "</div>";
        element.innerHTML = html;
    };

function ApiService() {
    this.baseUrl = "https://api.punkapi.com/v2/";

    this.getAll = function () {
        let url = `${this.baseUrl}beers`;
        return fetch (url);
    };

    /////////////////////////////    DA GO NAPRAVAM SO FETCH ///////////////////
    this.searchByName = function (name) {
        let url = `${this.baseUrl}beers?beer_name=${name}`;
        return new Promise ((resolve, reject) => {
            $.ajax ({
                url: url,
                success: function (response) {
                    console.log(response)
                    resolve (response);
                },
                error: function (error) {
                    reject (error);
                }
            });
        });
    };

    this.getRandom = function ()
    {
        let urlRandom = `${this.baseUrl}beers/random`;
        return fetch(urlRandom);
    };

    this.get5PerPage = function () 
    {
        let url5 = `${this.baseUrl}beers?per_page=8`;
        return fetch(url5);
    };

}}

let app = new App();
app.init();