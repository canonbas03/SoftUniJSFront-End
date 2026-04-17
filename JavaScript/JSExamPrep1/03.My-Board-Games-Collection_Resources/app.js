const baseUrl = "http://localhost:3030/jsonstore/games/";

const loadButton = document.getElementById("load-games");
const addButton = document.getElementById("add-game");
const gamesListEl = document.getElementById("games-list");

loadButton.addEventListener("click", handleLoadButtonAction);
addButton.addEventListener("click", addButtonClickHandler);

async function handleLoadButtonAction() {
  const response = await fetch(baseUrl);
  const result = await response.json();
  const games = Object.values(result);

  gamesListEl.innerHTML = "";
  const gameEls = games.map(createGameEl);

  gamesListEl.append(...gameEls);

  function createGameEl(game) {
    const gameDivEl = document.createElement("div");
    gameDivEl.classList.add("board-game");

    const contentEl = document.createElement("div");
    contentEl.classList.add("content");

    const gameTitlePEl = document.createElement("p");
    gameTitlePEl.textContent = game.name;

    const gameMaxPlayersPEl = document.createElement("p");
    gameMaxPlayersPEl.textContent = game.players;

    const gameTypePEl = document.createElement("p");
    gameTypePEl.textContent = game.type;

    contentEl.appendChild(gameTitlePEl);
    contentEl.appendChild(gameMaxPlayersPEl);
    contentEl.appendChild(gameTypePEl);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const changeBtn = document.createElement("button");
    changeBtn.classList.add("change-btn");
    changeBtn.textContent = "Change";
    changeBtn.setAttribute("disabled", "");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    buttonsContainer.appendChild(changeBtn);
    buttonsContainer.appendChild(deleteBtn);

    gameDivEl.appendChild(contentEl);
    gameDivEl.appendChild(buttonsContainer);

    return gameDivEl;
  }
}

async function addButtonClickHandler(game) {
  const gameNameInputEl = document.getElementById("g-name");
  const gameName = gameNameInputEl.value;

  const gameTypeInputEl = document.getElementById("type");
  const gameType = gameTypeInputEl.value;

  const gamePlayersInputEl = document.getElementById("players");
  const gamePlayers = gamePlayersInputEl.value;

  const newGame = {
    name: gameName,
    type: gameType,
    players: gamePlayers,
  };
  // Create POST request
  await fetch(baseUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newGame),
  });

  handleLoadButtonAction();
}
