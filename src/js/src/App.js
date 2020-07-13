import React, { Component } from "react";
import Container from "./Container";
import "./App.css";
import { getAllGames } from "./client";
import { Table, Avatar } from "antd";

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
          title: "Logo",
          dataIndex: "logo",
          key: "logo",
          render: (logo) => <Avatar src={logo} size={100} />,
        },
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
      ];

      return (
        <Container>
          <Table
            dataSource={games}
            columns={columns}
            pagination={false}
            rowKey="gameId"
          />
        </Container>
      );
    }

    return <h1>No games found</h1>;
  }
}

export default App;
