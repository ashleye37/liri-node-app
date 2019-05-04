// Pulled in data from dotenv, axios, moment and keys.js.
require("dotenv").config();

// Set up of Spotify api information for use in node.
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

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
} else if (!command) {
    console.log("Invalid Command- Please type any of the following commands: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says");
}

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
                fs.appendFileSync("log.txt", "------------Concert Info------------");
                fs.appendFileSync("log.txt", "\nArtist: " + input,);
                fs.appendFileSync("log.txt", "\nVenue: " + response.data[i].venue.name);
                fs.appendFileSync("log.txt", "\nLocation: " + response.data[i].venue.city);
                fs.appendFileSync("log.txt", "\nDate: " + moment(date).format('L'));
                fs.appendFileSync("log.txt", "\n-----------------------------------");
            }
        })
        .catch(function (error) {
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
                "\n----------------------------------");
            fs.appendFileSync("log.txt", "------------Movie Info------------");
            fs.appendFileSync("log.txt", "\nTitle: " + response.data.Title);
            fs.appendFileSync("log.txt", "\nYear: " + response.data.Year);
            fs.appendFileSync("log.txt", "\nimdbRating: " + response.data.imdbRating);
            fs.appendFileSync("log.txt", "\nRotten Tomatoes Rating: " + response.data.Ratings[1].Value);
            fs.appendFileSync("log.txt", "\nCountry: " + response.data.Country);
            fs.appendFileSync("log.txt", "\nLanguage: " + response.data.Language);
            fs.appendFileSync("log.txt", "\nPlot: " + response.data.Plot);
            fs.appendFileSync("log.txt", "\nActors: " + response.data.Actors);
            fs.appendFileSync("log.txt", "\n----------------------------------");
        })
        .catch(function (error) {
            console.log("There was an error when trying to find the requested movie- please try again.");
        })
};

// Function that finds song information on the song that was used as the input or returns information on The Sign by Ace of Base.
function findSongs() {
    // If no input is provided the song The Sign will be added for the input.
    if (!input) {
        input = "Ace of Base The Sign";
    }
    spotify.search({ type: 'track', query: input, limit: 1 })
        .then(function (data) {
            console.log("------------Song Info------------",
                "\nArtist: " + data.tracks.items[0].album.artists[0].name,
                "\nAlbum: " + data.tracks.items[0].album.name,
                "\nSong: " + data.tracks.items[0].name,
                "\nSong URL: " + data.tracks.items[0].external_urls.spotify,
                "\n---------------------------------");
        fs.appendFileSync("log.txt", "------------Song Info------------");
        fs.appendFileSync("log.txt", "\nArtist: " + data.tracks.items[0].album.artists[0].name);
        fs.appendFileSync("log.txt", "\nAlbum: " + data.tracks.items[0].album.name);
        fs.appendFileSync("log.txt", "\nSong: " + data.tracks.items[0].name);
        fs.appendFileSync("log.txt", "\nSong URL: " + data.tracks.items[0].external_urls.spotify);
        fs.appendFileSync("log.txt", "\n---------------------------------");
        })
        .catch(function (error) {
            console.log("There was an error when trying to find the requested song- please try again.")
        })
};

function doWhatItSays(input) {
    fs.readFile("random.txt", "utf-8", function (error, data) {
        if (error) {
            console.log("There was an error when trying to read the text file- please try again.")
        } else {
            var dataArr = data.split(",");
            spotify.search({ type: 'track', query: dataArr[1], limit: 1 })
                .then(function (data) {
                    console.log("------------Song Info------------",
                        "\nArtist: " + data.tracks.items[0].album.artists[0].name,
                        "\nAlbum: " + data.tracks.items[0].album.name,
                        "\nSong: " + data.tracks.items[0].name,
                        "\nSong URL: " + data.tracks.items[0].external_urls.spotify,
                        "\n---------------------------------");
                    fs.appendFileSync("log.txt", "------------Song Info------------");
                    fs.appendFileSync("log.txt", "\nArtist: " + data.tracks.items[0].album.artists[0].name);
                    fs.appendFileSync("log.txt", "\nAlbum: " + data.tracks.items[0].album.name);
                    fs.appendFileSync("log.txt", "\nSong: " + data.tracks.items[0].name);
                    fs.appendFileSync("log.txt", "\nSong URL: " + data.tracks.items[0].external_urls.spotify);
                    fs.appendFileSync("log.txt", "\n---------------------------------");
                })
                .catch(function (error) {
                    console.log("There was an error when trying to find the requested song- please try again.")
                })
        }
    })
};