import React, { Component } from "react";
import Container from "./Container";
import Footer from "./Footer";
import "./App.css";
import { getAllGames } from "./client";
import { Table, Avatar, Spin, Modal } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AddGameForm from "./forms/AddGameForm";

const getIndicatorIcon = () => (
  <LoadingOutlined style={{ fontSize: 24 }} spin />
);

class App extends Component {
  state = {
    games: [],
    isFetching: false,
    isAddGameModalVisible: false,
  };

  componentDidMount() {
    this.fetchGames();
  }

  openAddGameModal = () => this.setState({ isAddGameModalVisible: true });

  closeAddGameModal = () => this.setState({ isAddGameModalVisible: false });

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
    const { games, isFetching, isAddGameModalVisible } = this.state;

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
          <Modal
            title="Add new game"
            visible={isAddGameModalVisible}
            onOk={this.closeAddGameModal}
            onCancel={this.closeAddGameModal}
            width={1000}
          >
            <h1>Hello Modal with Antd</h1>
            <AddGameForm />
          </Modal>
          <Footer
            numberOfGames={games.length}
            handleAddGameClickEvent={this.openAddGameModal}
          ></Footer>
        </Container>
      );
    }

    return <h1>No games found</h1>;
  }
}

export default App;
