function solve(input) {
  let movies = [];

  for (const row of input) {
    let command = getCommand(row);

    applyCommand(command, row);
  }

  printMovies(movies);

  function getCommand(text = "") {
    if (text.includes("addMovie")) {
      return "addMovie";
    }
    if (text.includes("directedBy")) {
      return "directedBy";
    }
    if (text.includes("onDate")) {
      return "onDate";
    }
  }

  function applyCommand(command, text = "") {
    switch (command) {
      case "addMovie":
        const movie = {
          name: text.substring("addMovie ".length),
        };
        movies.push(movie);
        break;
      case "directedBy": {
        const args = text.split(" directedBy ");
        const movieName = args[0];
        const director = args[1];

        const movie = movies.find((movie) => movie.name === movieName);

        if (!movie) {
          return;
        }

        movie.director = director;
        break;
      }
      case "onDate": {
        const args = text.split(" onDate ");
        const movieName = args[0];
        const date = args[1];

        const movie = movies.find((movie) => movie.name === movieName);

        if (!movie) {
          return;
        }

        movie.date = date;
        break;
      }
    }
  }

  function printMovies(movies) {
    for (const movie of movies) {
      if (movie.date && movie.director) {
        console.log(JSON.stringify(movie));
      }
    }
  }
}
solve([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis FordCoppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
