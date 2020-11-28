import React from "react";
import {
  PhoneOutlined,
  SendOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

let Contact = () => {
  return (
    <div>
      <h1>
        Contact <SolutionOutlined />
      </h1>
      
      <div><SendOutlined /> {" "} Minsk, Belarus</div>
      
      <div><PhoneOutlined /> {" "} +375 33 902 91 91</div>
    </div>
  );
};

export default Contact;
