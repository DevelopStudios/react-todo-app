import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import './style.css';
const TaskForm = (props) => {
  return (
    <div className="TaskFormWrapper">
      <TextField
          multiline
          rowsMax={4}
        id="task-form"
        variant="outlined"
        value={props.task.value}
        className={props.task.done == true ? "done" : ""}
        InputProps={{
          startAdornment: (
            <div className="svg-container" onClick={props.toggleDone}>
              {props.task.done === true ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="12" fill="url(#paint0_linear)" />
                  <path
                    d="M8 12.3041L10.6959 15L16.6959 9"
                    stroke="white"
                    stroke-width="2"
                  />
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
          endAdornment: (
            <IconButton
              onClick={props.removeTask}
              color="primary"
              aria-label="clear task"
              component="span"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Combined Shape 2">
                  <path
                    id="Combined Shape"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M17.6777 0.707107L16.9706 0L8.83883 8.13173L0.707107 0L0 0.707107L8.13173 8.83883L0 16.9706L0.707106 17.6777L8.83883 9.54594L16.9706 17.6777L17.6777 16.9706L9.54594 8.83883L17.6777 0.707107Z"
                    fill="#494C6B"
                  />
                </g>
              </svg>
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default TaskForm;
