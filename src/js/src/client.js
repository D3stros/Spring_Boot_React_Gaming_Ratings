import fetch from "unfetch";

export const getAllGames = () => fetch("api/games");
export const addNewGame = (game) =>
  fetch("api/games", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(game),
  });
