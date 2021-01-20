import React, { useState } from "react";
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap";
import FormEntry from "../../common/FormEntry/FormEntry";
import "./style.css";
const TaskList = (props: any) => {
   const [radioValue, setRadioValue] = useState("1");
   const radios = [
     { name: "All", value: "1" },
     { name: "Active", value: "2" },
     { name: "Completed", value: "3" },
   ];
    return (
      <div className="tasklistContainer">
        <Form className="enteredTasks">
          <FormEntry mode={props.mode} />
          <FormEntry mode={props.mode} />
          <FormEntry mode={props.mode} />
        </Form>
        <div className={"taskListFooter " + props.mode}>
          <div className="firstContainer">5 items left</div>
          <div className="secondContainer">
            <div className="buttonContainer">
              <ButtonGroup toggle>
                {radios.map((radio, idx) => (
                  <ToggleButton
                    key={idx}
                    type="radio"
                    variant="secondary"
                    name="radio"
                    value={radio.value}
                    checked={radioValue === radio.value}
                    onChange={(e) => setRadioValue(e.currentTarget.value)}
                  >
                    {radio.name}
                  </ToggleButton>
                ))}
              </ButtonGroup>
            </div>
          </div>
          <div className="thirdContainer">
            <Button variant="secondary" size="lg" active>
              Clear Completed
            </Button>
          </div>
        </div>
      </div>
    );
}
export default TaskList;