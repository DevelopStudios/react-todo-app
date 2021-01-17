import React from "react";
import { Form } from "react-bootstrap";
import "./style.css";
const FormEntry = (props: any) => {
    return (
        <div className={'entry-form ' + props.mode}>
          <div className="circle"></div>
          <Form.Control type="email" placeholder="Enter email" />
        </div>
    );
}

export default FormEntry;