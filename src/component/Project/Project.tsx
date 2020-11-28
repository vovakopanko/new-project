import React from "react";
import { Image } from "antd";
import { FolderOpenOutlined } from "@ant-design/icons";
import img1 from "./../../img/1.png";
import img2 from "./../../img/2.png";
import img3 from "./../../img/3.png";
let Project = () => {
  return (
    <div>
      <h1>
        Project <FolderOpenOutlined />
      </h1>
      <div>
        <Image width={200} src={img1} />
        <Image width={200} src={img2} />
        <Image width={200} src={img3} />
      </div>
    </div>
  );
};

export default Project;
