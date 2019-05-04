# liri-node-app
Creating repository for LIRI- a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## Requirements
- Make a node.js app (called liri.js) that depends on the command and input from the user to get data from BandsInTown, Spotify, or OMDb APIs. 
- Integrate BandsInTown, Spotify and OMDb APIs using appropriate NPM modules.
- Use API calls to write data to the console after the user enters needed command and input.

## Technologies Used
- Node.js
- JavaScript
- Spotify API
- OMDb API
- BandsInTown API
- Axios
- FS
- Moment
- Git
- GitHub

## Code Explanation / Demo
- There are 4 main commands that a user can type that will call different fuctions.
  1) < concert-this > < artist/band name > will return the following.
    - ------------Concert Info------------
    - Artist: 
    - Venue: 
    - Location:
    - Date: 
    - ------------------------------------
  2) < spotify-this-song > < song name > will return the following and if no song is provided "Ace of Base - The Sign" is added as the input. value.
    - ------------Song Info------------
    - Artist:
    - Album: 
    - Song:
    - Song URL: 
    - ---------------------------------
  3) < movie-this > < movie name > will return the following and if no movie is provided "Mr. Nobody" is added as the input value.
    - ------------Movie Info------------
    - Title:
    - Year: 
    - imdbRating:
    - Rotten Tomatoes Rating:
    - Country: 
    - Language:
    - Plot:
    - Actors: 
    - ----------------------------------
  4) < do-what-it-says > utilizes FS to read the "random.txt" file to pull "I want it that way" and will return the following.
    - ------------Song Info------------
    - Artist:
    - Album: 
    - Song:
    - Song URL: 
    - ---------------------------------
  5) After each command is run it will also append the information logged in the console to "log.txt".

