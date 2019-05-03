// Pulled in data from dotenv, axios, moment and keys.js.
require("dotenv").config();

// Set up of Axios and FS for use in node.
var axios = require("axios");
var fs = require("fs");

// Set up of Moment for use in node.
var moment = require("moment");
moment().format();

// Global variables needed to run LIRI app.
var command = process.argv[2];
var input = process.argv.slice(3).join(" ");

// Linking all the input commands to the written functions.
if (command === "concert-this") {
    findConcerts(input);
} else if (command === "spotify-this-song") {
    findSongs(input);
} else if (command === "movie-this") {
    findMovies(input);
} else if (command === "do-what-it-says") {
    doWhatItSays(input);
};

// Function that finds concerts for the selected artist.
function findConcerts(input) {
    axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp")
        .then(function (response) {
            for (var i = 0; i < response.data.length; i++) {
                var date = response.data[i].datetime;
                console.log("------------Concert Info------------",
                    "\nArtist: " + input,
                    "\nVenue: " + response.data[i].venue.name,
                    "\nLocation: " + response.data[i].venue.city,
                    "\nDate: " + moment(date).format('L'),
                    "\n-----------------------------------")
            }
        })
    .catch(function(error){
        console.log("There was an error when trying to find concerts- please try again.");
    })
};



// Function that finds information on the movie that was used as the input or returns information on Mr. Nobody.
function findMovies() {
    if (!input) {
        input = "Mr Nobody"
    }
    axios.get("http://www.omdbapi.com/?apikey=trilogy&t=" + input)
    .then(function (response) {
                console.log("------------Movie Info------------", "\nTitle: " + response.data.Title,
                    "\nYear: " + response.data.Year,
                    "\nimdbRating: " + response.data.imdbRating,
                    "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                    "\nCountry: " + response.data.Country,
                    "\nLanguage: " + response.data.Language,
                    "\nPlot: " + response.data.Plot,
                    "\nActors: " + response.data.Actors,
                    "\n----------------------------------")
        })
    .catch(function(error) {
        console.log("There was an error when trying to find the requested movie- please try again.");
    })
};

// Function that finds song information on the song that was used as the input or returns information on The Sign by Ace of Base.
function findSongs(input) {
    // Set up of Spotify api information for use in node.
    var keys = require("./keys.js");
    var Spotify = require("node-spotify-api");
    var spotify = new Spotify(keys.spotify);
    // If no input is provided the song The Sign will be added for the input.
    if (!input) {
        input = "The Sign";
    } 
    spotify.search({ type: 'track', query: input, limit: 1})
    .then(function(data) {
        console.log("------------",
                "\nArtist: " + data.tracks.items[0].album.artists[0].name,
                "\nAlbum: " + data.tracks.items[0].album.name,
                "\nSong: " + data.tracks.items[0].name,
                "\nSong URL: " + data.tracks.items[0].external_urls.spotify,
                "------------")
    })
    .catch(function(error) {
        console.log("There was an error when trying to find the requested song- please try again.")
    })
};

function doWhatItSays(input) {
    fs.readFile("random.txt", "utf-8", function (error, data) {
        if (error) {
            console.log("There was an error when trying to find the requested movie- please try again.")
        } else {
            var dataArr = data.split(",");
            findSongs(dataArr[0],dataArr[1]);
        }
    })
};