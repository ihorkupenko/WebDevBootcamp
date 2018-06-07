var movies = [
    {title: "Cars 3",
     rating: 5,
     hasWatched: true
    },
    {title: "The Guardians of the Galaxy",
     rating: 4.5,
     hasWatched: false
    },
    {title: "Mad Max Fury Road",
     rating: 3,
     hasWatched: true
    },
    {title: "Mimino",
     rating: 5,
     hasWatched: false
    }
]

movies.forEach(function (movie){
    if (movie.hasWatched) console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars")
    else console.log("You have not seen \"" + movie.title + "\" - " + movie.rating + " stars")
});