import React from "react";
import { Button, Image } from "antd";
import photo from "./../../img/photo_2020-10-25_16-13-42.jpg";
import { DownloadOutlined } from "@ant-design/icons";

let AboutMe = () => {
  return (
    <div>
      <h1>About ME</h1>
      <div>Welcome, I AM VLADZIMIR KAPANKO</div>
      <div>
        <Image width={200} src={photo} />
      </div>
      <div>
        Hello, I'm <b>Vladzimir Kapanko</b>. I'm a front-end developer from
        Minsk. I can describe my personal qualities as responsibility,
        goal-oriented person and punctuality. I'm an open-minded person and
        always ready for learning new technologies. I 'm able to get along with
        different types of people and can say that i' m a good team player. In
        my free time i like going to the gym, swiming and play big tennis. Ready
        for hardwork and make progress in the IT sphere.
      </div>
      <div>
        <Button
          type="primary"
          shape="round"
          icon={<DownloadOutlined />}
          onClick={() => {
            console.log("ff");
          }}
        >
          Download CV
        </Button>
      </div>
    </div>
  );
};

export default AboutMe;
