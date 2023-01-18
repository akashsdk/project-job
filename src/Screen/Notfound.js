import React from "react";
import { Button, Result } from "antd";
import { Link } from "react-router-dom";

export default function Notfound() {
  return (
    <div>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={ <Link to="/">Go Back Home</Link>}
        
      />
    </div>
  );
}
