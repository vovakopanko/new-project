import React from "react";
import "./App.css";
import { Layout, Menu, Breadcrumb, Button, Steps, Rate, Image } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import photo from "./img/photo_2020-10-25_16-13-42.jpg";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";

function App() {
  const { Header, Content, Footer } = Layout;
  const { Step } = Steps;
  const desc = ["А1", "А2", "B1", "B2", "C1", "C2"];
  const job = ["terrible", "bad", "normal", "good", "wonderful"];
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">About ME</Menu.Item>
            <Menu.Item key="2">Portfolio:</Menu.Item>
            <Menu.Item key="3">Contact</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>My description</Breadcrumb.Item>
            <Breadcrumb.Item>Experience</Breadcrumb.Item>
            <Breadcrumb.Item>Education</Breadcrumb.Item>
            <Breadcrumb.Item>Profile Skills</Breadcrumb.Item>
            <Breadcrumb.Item>Language skills</Breadcrumb.Item>
            <Breadcrumb.Item>Personality</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <h1>About ME</h1>
            <div>Welcome, I AM VLADZIMIR KAPANKO</div>
            <div>
              <Image width={200} src={photo} />
            </div>
            <div>
              <Button type="primary" shape="round" icon={<DownloadOutlined />}>
                Download CV
              </Button>
            </div>
            <h3>My description</h3>
            <div>
              Hello, I'm <b>Vladzimir Kapanko</b>. I'm a front-end developer
              from Minsk. I can describe my personal qualities as
              responsibility, goal-oriented person and punctuality. I'm an
              open-minded person and always ready for learning new technologies.
              I 'm able to get along with different types of people and can say
              that i' m a good team player. In my free time i like going to the
              gym, swiming and play big tennis. Ready for hardwork and make
              progress in the IT sphere.
            </div>
            <h3>Education</h3>
            <div>
              <Steps direction="vertical" size="small" current={3}>
                <Step title="2000 - 2011" description="Medium school" />
                <Step
                  title="2011 - 2016"
                  description="Polotsk State University | Faculty of Engineering and Technology | Mechanical Engineer Diploma."
                />
                <Step
                  title="june 2020 - september 2020"
                  description="IT-INCUBATOR (ReactJS, Redux,Rest API, TypeScript) - youtube chanel"
                />
              </Steps>
            </div>
            <h3>Experience</h3>
            <div>
              <Steps direction="vertical" size="small" current={3}>
                <Step
                  title="2016 - 2019"
                  description="ENGINEER - Public corporation NAFTAN"
                />
                <Step
                  title="2019 - 2020"
                  description="PROJECT MANAGER - <b>OOO CROSSLINE</b>"
                />
                <Step
                  title="2020 - now"
                  description="PRODUCTION EQUIPMENT ENGINEER - UNIX ENGINEERING"
                />
              </Steps>
            </div>
            <h3>Language skills</h3>
            <div>
              <div>
                <span>English</span>
                <Rate disabled defaultValue={3} tooltips={desc} count={6} />
              </div>
              <div>
                <span>Russian</span>
                <Rate disabled defaultValue={6} tooltips={desc} count={6} />
              </div>
              <div>
                <span>Belarusian</span>
                <Rate disabled defaultValue={5} tooltips={desc} count={6} />
              </div>
            </div>
            <h3>Profile Skills</h3>
            <div>
              <div>
                <span>JavaScript</span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={4.5}
                  tooltips={job}
                  count={5}
                />
              </div>
              <div>
                <span>ReactJS</span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={4.5}
                  tooltips={job}
                  count={5}
                />
              </div>
              <div>
                <span>Redux</span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={4.5}
                  tooltips={job}
                  count={5}
                />
              </div>
              <div>
                <span>RestAPI,CRUD,AJAX</span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={4.5}
                  tooltips={job}
                  count={5}
                />
              </div>
              <div>
                <span>Git / GitHub </span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={3.5}
                  tooltips={job}
                  count={5}
                />
              </div>
              <div>
                <span>HTML/CSS</span>
                <Rate disabled defaultValue={4} tooltips={job} count={5} />
              </div>
              <div>
                <span>PHP</span>
                <Rate disabled defaultValue={3} tooltips={job} count={5} />
              </div>
              <div>
                <span>TypeScript</span>
                <Rate disabled defaultValue={4} tooltips={job} count={5} />
              </div>
              <div>
                <span>NodeJS(elementary)</span>
                <Rate
                  disabled
                  allowHalf
                  defaultValue={3.5}
                  tooltips={job}
                  count={5}
                />
              </div>
            </div>
            <h3>Personality</h3>
            <div>
              <div>Responsible</div>
              <div>Active</div>
              <div>Communicative</div>
              <div>Organized</div>
              <div>High learning ability</div>
            </div>
            <h1>Portfolio</h1>
            <div>
              <Image width={200} src={img1} />
              <Image width={200} src={img2} />
              <Image width={200} src={img3} />
            </div>
            <h1>Contact</h1>
            <div>
              <a href="https://www.facebook.com/vova.kopanko">FaceBoock</a>
            </div>
            <div>
              <a href="https://github.com/vovakopanko">Github</a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/vladzimir-kopanko-37b451186/">
                LinkeIn
              </a>
            </div>
            <div>
              <a href="https://www.instagram.com/vovakopanko/">instagram</a>
            </div>
            <div>Minsk, Belarus</div>
            <div>+375 33 902 91 91</div>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Vladzimir Kapanko</Footer>
      </Layout>
    </div>
  );
}

export default App;
