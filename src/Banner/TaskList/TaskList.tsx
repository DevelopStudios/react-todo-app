import React from "react";
import { Form } from "react-bootstrap";
import FormEntry from "../../common/FormEntry/FormEntry";
import "./style.css";
const TaskList = (props: any) => {
    return (
      <div className="tasklistContainer">
        <Form className="enteredTasks">
          <FormEntry mode={props.mode} />
          <FormEntry mode={props.mode} />
          <FormEntry mode={props.mode} />
        </Form>
        <div className="taskListFooter">
          <div className="firstContainer">test</div>
          <div className="secondContainer">test</div>
          <div className="thirdContainer">test</div>
        </div>
      </div>
    );
}
export default TaskList;