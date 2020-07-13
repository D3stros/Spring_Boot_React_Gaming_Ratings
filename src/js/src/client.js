import fetch from "unfetch";

export const getAllGames = () => fetch("api/games");
