const baseUrl = "http://localhost:3030/jsonstore/movies";

const loadButton = document.getElementById("load-movies");
const addButton = document.getElementById("add-movie");
const editButton = document.getElementById("edit-movie");

const moviesList = document.getElementById("movie-list");

const titleInput = document.getElementById("title");
const directorInput = document.getElementById("director");
const yearInput = document.getElementById("year");

loadButton.addEventListener("click", loadButtonClickHandler);
addButton.addEventListener("click", addButtonClickHandler);
editButton.addEventListener("click", editButtonClickHandler);

let selectedMovieId = null;

async function loadButtonClickHandler() {
  await loadMovies();
}

async function loadMovies() {
  const response = await fetch(baseUrl);
  const result = await response.json();
  const movies = Object.values(result);

  const movieEls = movies.map(createMovieElement);

  moviesList.innerHTML = "";

  moviesList.append(...movieEls);

  editButton.setAttribute("disabled", "");
}

function createMovieElement(movie) {
  const movieDivEl = document.createElement("div");
  movieDivEl.classList.add("movie");

  const contentEl = document.createElement("div");
  contentEl.classList.add("content");

  const titlePEl = document.createElement("p");
  titlePEl.textContent = movie.title;

  const directorPEl = document.createElement("p");
  directorPEl.textContent = movie.director;

  const yearPEl = document.createElement("p");
  yearPEl.textContent = movie.year;

  const btnsContainerDiv = document.createElement("div");
  btnsContainerDiv.classList.add("buttons-container");

  const changeBtn = document.createElement("button");
  changeBtn.classList.add("change-btn");
  changeBtn.textContent = "Edit";
  changeBtn.addEventListener("click", () => {
    titleInput.value = titlePEl.textContent;
    directorInput.value = directorPEl.textContent;
    yearInput.value = yearPEl.textContent;

    movieDivEl.remove();

    editButton.removeAttribute("disabled");
    addButton.setAttribute("disabled", "");

    selectedMovieId = movie._id;
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`${baseUrl}/${movie._id}`, {
      method: "DELETE",
    });

    loadMovies();
  });

  contentEl.appendChild(titlePEl);
  contentEl.appendChild(directorPEl);
  contentEl.appendChild(yearPEl);

  btnsContainerDiv.appendChild(changeBtn);
  btnsContainerDiv.appendChild(deleteBtn);

  movieDivEl.appendChild(contentEl);
  movieDivEl.appendChild(btnsContainerDiv);

  return movieDivEl;
}

async function addButtonClickHandler(e) {
  const newMovie = {
    title: titleInput.value,
    director: directorInput.value,
    year: yearInput.value,
  };

  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newMovie),
  });

  loadMovies();

  clearInputs();
}

function clearInputs() {
  titleInput.value = "";
  directorInput.value = "";
  yearInput.value = "";
}

async function editButtonClickHandler(e) {
  const modifiedMovie = {
    _id: selectedMovieId,
    title: titleInput.value,
    director: directorInput.value,
    year: yearInput.value,
  };

  await fetch(`${baseUrl}/${selectedMovieId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(modifiedMovie),
  });

  loadMovies();

  editButton.setAttribute("disabled", "");

  addButton.removeAttribute("disabled");

  clearInputs();

  selectedMovieId = null;
}
