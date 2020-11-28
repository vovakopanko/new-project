import React from "react";
import {Steps, Rate} from "antd";
import "antd/dist/antd.css";

let Portfolio = () => {
    const { Step } = Steps;
    const desc = ["А1", "А2", "B1", "B2", "C1", "C2"];
    const job = ["terrible", "bad", "normal", "good", "wonderful"];
  return (
    <div>
       <h1>My description</h1>
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
  );
};

export default Portfolio;
