require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var input = process.argv[3];

if (command === "concert-this") {
  axios.get("https://rest.bandsintown.com/artists/" + input + "/events?app_id=codingbootcamp").then(
    function(response) {
      console.log(response.data.venue[0]);
      // console.log(response.data.datetime);
      // console.log(response.data.venue.name);
      // console.log(response.data.venue.city);
    }
  );
} else if (command === "spotify this song") {
  spotify.search({ type: 'track', query: input }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
  console.log(data); 
  });
} else if (command === "movie-this") {
  axios.get("http://www.omdbapi.com/?apikey=trilogy&" + input).then(
    function(response) {
      console.log(response);
    }
  );
} else if (command === "do-what-it-says") {
  
}
