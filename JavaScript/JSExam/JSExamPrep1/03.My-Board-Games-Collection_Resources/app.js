const baseUrl = "http://localhost:3030/jsonstore/games";

const loadButton = document.getElementById("load-games");
const addButton = document.getElementById("add-game");
const editButton = document.getElementById("edit-game");

const gamesList = document.getElementById("games-list");

const nameInput = document.getElementById("g-name");
const typeInput = document.getElementById("type");
const playersInput = document.getElementById("players");

// Hacky solution, next time will do better
let selectedGameId = null;

loadButton.addEventListener("click", loadButtonClickHandler);
addButton.addEventListener("click", addButtonClickHandler);
editButton.addEventListener("click", editButtonClickHandler);

async function loadButtonClickHandler(e) {
  await loadGames();
}

async function addButtonClickHandler(e) {
  // Create game
  const newGame = {
    name: nameInput.value,
    type: typeInput.value,
    players: playersInput.value,
  };

  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newGame),
  });

  // fetch all game records
  loadGames();

  // clear input fields
  clearInputs();
}

async function editButtonClickHandler(e) {
  // Collect input data
  const modifiedGame = {
    _id: selectedGameId,
    name: nameInput.value,
    type: typeInput.value,
    players: playersInput.value,
  };

  // send put request
  await fetch(`${baseUrl}/${selectedGameId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(modifiedGame),
  });

  // fetch all games
  loadGames();

  // Deactivate edit button
  editButton.setAttribute("disabled", "");

  // Activate add buitton
  addButton.removeAttribute("disabled");

  // Clear input fields
  clearInputs();

  // Clear selectedGameId
  selectedGameId = null;
}

async function loadGames() {
  // Get Request for games
  const response = await fetch(baseUrl);
  const result = await response.json();
  const games = Object.values(result);

  // create element for each game
  const gameElements = games.map(createGameElement);

  // clean up games-list
  gamesList.innerHTML = "";

  // add game element to div games-list
  gamesList.append(...gameElements);

  // edit button should be deactivated
}

function createGameElement(game) {
  const gameElement = document.createElement("div");
  gameElement.classList.add("board-game");

  const contentElement = document.createElement("div");
  contentElement.classList.add("content");

  const nameParagraph = document.createElement("p");
  nameParagraph.textContent = game.name;

  const typeParagraph = document.createElement("p");
  typeParagraph.textContent = game.type;

  const playersParagraph = document.createElement("p");
  playersParagraph.textContent = game.players;

  const buttonsContainer = document.createElement("div");
  buttonsContainer.classList.add("buttons-container");

  const changeButton = document.createElement("button");
  changeButton.classList.add("change-btn");
  changeButton.textContent = "Change";
  changeButton.addEventListener("click", () => {
    // Populate input fields
    nameInput.value = game.name;
    typeInput.value = game.type;
    playersInput.value = game.players;

    // Activate form edit button
    editButton.removeAttribute("disabled");

    // Add game should be decativated
    addButton.setAttribute("disabled", "");

    selectedGameId = game._id;
  });

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", async () => {
    // send delete request
    await fetch(`${baseUrl}/${game._id}`, {
      method: "DELETE",
    });

    // fetch all games
    loadGames();
  });

  contentElement.append(nameParagraph, typeParagraph, playersParagraph);

  buttonsContainer.append(changeButton, deleteButton);

  gameElement.append(contentElement, buttonsContainer);

  return gameElement;
}

function clearInputs() {
  nameInput.value = "";
  typeInput.value = "";
  playersInput.value = "";
}
