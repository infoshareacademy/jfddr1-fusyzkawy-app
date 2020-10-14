// Task name
//Status -> when click you can change status (radioInput)
//Img > Img -> first img(creator task), second(assign person)
//Type -> when click you can change tags (checkbox)
//duration....
//.....
//.....

import React from "react";

function TaskInformation({ task }) {
  const tags = task.tags.split(" ");
  return (
    <div className={"calendarTaskInformation"}>
      <div className={"displayTask"}>
        <h2>{task.title}</h2>
        <div>
          <button>edit</button>
          <button>remove</button>
        </div>
      </div>
      <div>
        <button>{task.status} v</button>
        {/* onClick more & less options to pick and chanhe status */}
        <p>
          {task.startHour}-{task.endHour}
        </p>
        <div>
          <img src={task.imgCreator} height="50" />
          <img src={task.imgAssign} height="50" />
        </div>
        <div>
          <h3>Tags:</h3>
          {tags.map(elem => (
            <a href="#"> {elem} </a>
          ))}
          <button> +</button>
        </div>
        <p>{task.description}</p>
      </div>
    </div>
  );
}

export default TaskInformation;
