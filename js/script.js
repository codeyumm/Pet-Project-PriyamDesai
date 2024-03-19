// waiting for dom to gets load in window
window.onload = function() {

    // to check the linking of js file
    // alert("Hello, from script.js");

    // getting all maps in an array 
    var maps = document.getElementsByClassName('map');

    // getting country flag contianer
    var flagContainer = document.getElementsByClassName('country-flag')[0];


    // getting elements to display data about song
    var songContainer = document.getElementById("song-container")
    var countryName = document.getElementById("country-name");
    var songName = document.getElementById("song-name");
    var countryName = document.getElementById("country-name");
    var singersList = document.getElementById("singersList");
    var songGenre = document.getElementById("song-genre");
    var coverArt = document.getElementById("cover-art");
    var audioSrc = document.getElementById("audio-source");
    var audio = document.getElementById("audio");


    for(let i=0; i<maps.length; i++){


        maps[i].addEventListener('click', (e) => {

            // display song container
            songContainer.style.display = "flex";
            
            // getting country name fro data atrribute (data-country="ca")
            // based on that name accessing the data (dataset.country)
            var country = e.target.dataset.country

            // passing data to html elements from data object based on particular country
            countryName.innerHTML = DATA[country].fullCountryName;
            songName.innerHTML = DATA[country].song;
            
            //coverart
            coverArt.src = DATA[country].coverArt;


            // making list for artist, using loop for multiple artist
            // cleaning singer list 
            singersList.innerHTML = "";

            DATA[country].artists.forEach( (artist) => {
                
                //creating li element
                var listElem = document.createElement("li");

                // adding artist name to li
                listElem.innerHTML = artist;

                //appending li element to list
                singersList.appendChild(listElem);
            })

            // genre
            songGenre.innerHTML = DATA[country].genre;
            
            //audio
            audioSrc.setAttribute("src", DATA[country].audioSrc)
            audio.load();

            singersList.scrollIntoView();
        
        });
    }
    
    
    // hard coding data like api respone
    var DATA = {
        ca:{
           fullCountryName: "Canada",
           song: "Last Christmas",
           artists: ["Wham!"],
           genre: "Synth-pop",
           coverArt: "./images/last-chirstmas-cover-art.jpg",
           audioSrc: "./audio/last-chirstmas.mp3",
        },

        in:{
            fullCountryName: "India",
            song: "Tu hai kahan",
            artists: ["Aur", "Raffey Anwar"],
            genre: "Pop",
            coverArt: "./images/tu-hai-kahan-cover-art.jpg",
            audioSrc: "./audio/tu-hai-kahan.mp3",

        },

        kr:{
            fullCountryName: "South Korea",
            song: "Do Or Die",
            artists: ["Lim Young Woong"],
            genre: "Festival Progressive House",
            coverArt: "./images/do-or-die-cover-art.jpg",
            audioSrc: "./audio/do-or-die.mp3",
        },

        vn:{
            fullCountryName: "Vietnam",
            song: "Tung Quen",
            artists: ["Wren Evans"],
            genre: "R&B",
            coverArt: "./images/tung-quen-cover-art.png",
            audioSrc: "./audio/tung-quen.mp3",
        },

        np:{
            fullCountryName: "Nepal",
            song: "Syndicate",
            artists: ["Bipul Chettri"],
            genre: "Himalayan folk",
            coverArt: "./images/syndicate-cover-art.png",
            audioSrc: "./audio/syndicate.mp3",

        },

        is:{
            fullCountryName: "Iceland",
            song: "KENYA",
            artists: ["Karpe"],
            genre: "Hip hop",
            coverArt: "./images/kenya-cover-art.jpg",
            audioSrc: "./audio/kenya.mp3",

        }
    }
    
}

