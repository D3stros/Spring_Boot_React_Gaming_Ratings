import fetch from "unfetch";

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    response.json().then((e) => {
      error.error = e;
    });
    return Promise.reject(error);
  }
};

export const getAllGames = () => fetch("api/games").then(checkStatus);

export const addNewGame = (game) =>
  fetch("api/games", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(game),
  }).then(checkStatus);
