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
    Link to demo: https://drive.google.com/file/d/1cKDoJq9npr8EZU_By-k2yK8CnhsF1vEA/view

    - ------------Concert Info------------
    - Artist: 
    - Venue: 
    - Location:
    - Date: 
    - ------------------------------------

  2) < spotify-this-song > < song name > will return the following and if no song is provided "Ace of Base - The Sign" is added as the input value.
      Link to demo:
      https://drive.google.com/file/d/1vyVDrVJ44JXkGvnfH2XidjouFvINQdX7/view

    - ------------Song Info------------
    - Artist:
    - Album: 
    - Song:
    - Song URL: 
    - ---------------------------------

  3) < movie-this > < movie name > will return the following and if no movie is provided "Mr. Nobody" is added as the input value.
      Link to demo:
      https://drive.google.com/file/d/1TEf4p-WZpwPfM-TacQg71cWq05Svr2xo/view

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
      Link to demo:
      https://drive.google.com/file/d/1x-PgwSoofkF7UZ8Mrg7gmi9w8VxD8Aqj/view
      
    - ------------Song Info------------
    - Artist:
    - Album: 
    - Song:
    - Song URL: 
    - ---------------------------------
  5) After each command is run it will also append the information logged in the console to "log.txt".

