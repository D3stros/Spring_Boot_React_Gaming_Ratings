import React, { Component } from "react";
import "./App.css";
import { getAllGames } from "./client";

class App extends Component {
  state = {
    games: [],
  };

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    getAllGames().then((res) =>
      res.json().then((games) => {
        console.log(games);
        this.setState({
          games,
        });
      })
    );
  };
  render() {
    const { games } = this.state;

    if (games && games.length) {
      return games.map((games, index) => {
        return (
          <div key={index}>
            <h2>{games.gameId}</h2>
            <p>{games.name}</p>
            <p>{games.genre}</p>
            <p>{games.rating}</p>
            <img src={games.logo} alt="" />
          </div>
        );
      });
    }

    return <h1>No games found</h1>;
  }
}

export default App;
