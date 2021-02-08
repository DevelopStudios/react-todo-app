import React from 'react'
import TextField from "@material-ui/core/TextField";
import "./style.css";
const EntryForm = (props) => {
const [value, setValue] = React.useState("");
const handleChange = (event) => {
  setValue(event.target.value);
};
const handleKeyDown = (event) => {
   if (event.key === "Enter") {
       if(event.target.value) {
           props.pushTask({
               value: event.target.value,
               done: false,
               edit: false,
           });
       }
     setValue('');
   }
 }
  return (
    <TextField
      id="task-form"
      variant="outlined"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      placeholder='Create a new todo...'
      value={value}
      InputProps={{
        startAdornment: (
          <div className="svg-container">
            {props.mode === true ? (
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="white" stroke="#E3E4F1" />
              </svg>
            ) : (
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="11.5" stroke="#393A4B" />
                <g opacity="0.01">
                  <circle cx="12" cy="12" r="12" fill="url(#paint0_linear)" />
                  <path d="M8 12.3041L10.6959 15L16.6959 9" stroke="white" />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear"
                    x1="-12"
                    y1="12"
                    x2="12"
                    y2="36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#55DDFF" />
                    <stop offset="1" stop-color="#C058F3" />
                  </linearGradient>
                </defs>
              </svg>
            )}
          </div>
        ),
      }}
    />
  );
};

export default EntryForm;
