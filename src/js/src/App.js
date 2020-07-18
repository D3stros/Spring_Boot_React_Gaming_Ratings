import React, { Component } from "react";
import Container from "./Container";
import Footer from "./Footer";
import "./App.css";
import { getAllGames } from "./client";
import { Table, Avatar, Spin, Modal, Empty } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import AddGameForm from "./forms/AddGameForm";
import { errorNotification } from "./Notification";

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
    getAllGames()
      .then((res) =>
        res.json().then((games) => {
          console.log(games);
          this.setState({
            games,
            isFetching: false,
          });
        })
      )
      .catch((error) => {
        const message = error.error.message;
        const description = error.error.error;
        errorNotification(message, description);
        this.setState({
          isFetching: false,
        });
      });
  };
  render() {
    const { games, isFetching, isAddGameModalVisible } = this.state;

    const commonElements = () => (
      <div>
        <Modal
          title="Add new game"
          visible={isAddGameModalVisible}
          onOk={this.closeAddGameModal}
          onCancel={this.closeAddGameModal}
          width={1000}
        >
          <AddGameForm
            onSuccess={() => {
              this.closeAddGameModal();
              this.fetchGames();
            }}
          />
        </Modal>
        <Footer
          numberOfGames={games.length}
          handleAddGameClickEvent={this.openAddGameModal}
        ></Footer>
      </div>
    );

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
        <Container id="test">
          <Table
            style={{ marginBottom: "10%" }}
            dataSource={games}
            columns={columns}
            pagination={false}
            rowKey="gameId"
          />
          {commonElements()}
        </Container>
      );
    }

    return (
      <Container>
        <Empty description={"No Games found"} />
        {commonElements()}
      </Container>
    );
  }
}

export default App;
