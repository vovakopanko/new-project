import React from "react";
import "./App.css";
import { Layout, Menu } from "antd";
import {
  GithubOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import { NavLink, Route } from "react-router-dom";
import AboutMe from "./component/AboutMe/AboutMe";
import Portfolio from "./component/Portfolio/Porftfolio";
import Contact from "./component/Contact/Contact";
import Project from "./component/Project/Project";

function App() {
  const { Header, Content, Footer } = Layout;
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to="aboutme">About ME</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="portfolio">Portfolio</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="project">Project</NavLink>
            </Menu.Item>
            <Menu.Item key="4">
              <NavLink to="contact">Contact</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <div className="site-layout-content">
            <Route path="/aboutme" render={() => <AboutMe />} />
            <Route path="/portfolio" render={() => <Portfolio />} />
            <Route path="/project" render={() => <Project />} />
            <Route path="/contact" render={() => <Contact />} />
          </div>
        </Content>
        <Footer style={{ textAlign: "right" }}>
          {" "}
          <a href="https://www.facebook.com/vova.kopanko">
            <FacebookOutlined />
          </a>{" "}
          <a href="https://github.com/vovakopanko">
            <GithubOutlined />
          </a>{" "}
          <a href="https://www.linkedin.com/in/vladzimir-kopanko-37b451186/">
            <LinkedinOutlined />
          </a>{" "}
          <a href="https://www.instagram.com/vovakopanko/">
            {" "}
            <InstagramOutlined />
          </a>
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
