import React, { Component } from "react";
import Container from "./Container";
import Footer from "./Footer";
import "./App.css";
import { getAllGames } from "./client";
import { Table, Avatar, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const getIndicatorIcon = () => (
  <LoadingOutlined style={{ fontSize: 24 }} spin />
);

class App extends Component {
  state = {
    games: [],
    isFetching: false,
  };

  componentDidMount() {
    this.fetchGames();
  }

  fetchGames = () => {
    this.setState({
      isFetching: true,
    });
    getAllGames().then((res) =>
      res.json().then((games) => {
        console.log(games);
        this.setState({
          games,
          isFetching: false,
        });
      })
    );
  };
  render() {
    const { games, isFetching } = this.state;

    if (isFetching) {
      return (
        <Container>
          <Spin indicator={getIndicatorIcon()} />
        </Container>
      );
    }

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
          <Footer numberOfGames={games.length}></Footer>
        </Container>
      );
    }

    return <h1>No games found</h1>;
  }
}

export default App;
