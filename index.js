if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const app = express();
const port = 80;

const fetch = require('node-fetch');

app.use(express.static('public'));

app.listen(port,() => {
    console.log(`App listening at http://localhost:${port}`)
});

const api_key = process.env.API_KEY;
app.get('/dinoimage', async(request, response) => {
    // run code stuff

    const fetchApi = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinasaur&count=100", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": api_key,
            "x-rapidapi-host": "bing-image-search1.p.rapidapi.com"
        },
    }
);

const dinoImageResponse = await fetchApi.json();
console.log(dinoImageResponse);
response.json(dinoImageResponse);

});

app.get('/dinoname', async(request, response) => {
    // run code stuff

    const fetchApi = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": api_key,
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com"
	},
}
);

const dinoNameResponse = await fetchApi.json();
console.log(dinoNameResponse);
response.json(dinoNameResponse);

});

