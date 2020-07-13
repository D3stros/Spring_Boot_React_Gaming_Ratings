import React, { Component } from "react";
import "./App.css";
import { getAllGames } from "./client";
import { Table } from "antd";

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
      const columns = [
        {
          title: "GameId",
          dataIndex: "gameId",
          key: "gameId",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "Genre",
          dataIndex: "genre",
          key: "genre",
        },
        {
          title: "Rating",
          dataIndex: "rating",
          key: "rating",
        },
        {
          title: "Logo",
          dataIndex: "logo",
          key: "logo",
          render: (logo) => <img alt={logo} src={logo} className="col-lg-3" />,
        },
      ];

      return <Table dataSource={games} columns={columns} rowKey="gameId" />;
    }

    return <h1>No games found</h1>;
  }
}

export default App;
