import React from "react";
import Container from "./Container";
import { Button, Avatar } from "antd";
import "./Footer.css";

const Footer = (props) => (
  <div className="footer">
    <Container>
      {props.numberOfGames ? (
        <Avatar
          style={{ backgroundColor: "#f56a00", marginRight: "5px" }}
          size="large"
        >
          {props.numberOfGames}
        </Avatar>
      ) : null}
      <Button type="primary">Add new Game +</Button>
    </Container>
  </div>
);

export default Footer;
