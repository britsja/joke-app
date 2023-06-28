const express = require('express');
const axios = require("axios");

const app = express();

// Joke API
let getFacts = async () => {
    let response = await axios(`https://v2.jokeapi.dev/joke/Any`);    
    if (response.data.joke === undefined) {
        return 'Joke is out for lunch. Please refresh page'
    } else {
        return response.data.joke;
    }
     
};

app.listen(3000, function() {
    console.log('App listening on port 3000');
});

app.get("/", async function(req, res) {
    try {
        let joke = await getFacts();
        res.send(joke);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error occurred');
    }
});