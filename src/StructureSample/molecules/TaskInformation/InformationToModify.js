import React from "react";
import Image from "../../atoms/Image";
import RadioInput from "../../atoms/RadioInput";
import { TaskProperties } from "./TaskInformationStyled";
import { Input, Div, Textarea } from "./TaskInformationStyled";

function InformationToModify({
  task,
  iconName,
  infoName,
  infoType,
  categories,
  onChange,
}) {
  return (
    <TaskProperties>
      <Image
        classImage="iconSingle"
        srcImage={iconName}
        alternateTextImage={infoName}
        title={infoName}
      />

      {infoType === "text" ? (
        <Input
          type={infoType}
          id={infoName}
          name={infoName}
          value={task[infoName]}
          onChange={onChange}
        />
      ) : infoType === "textarea" ? (
        <Textarea
          id={infoName}
          name={infoName}
          placeholder={infoName}
          value={task[infoName]}
          onChange={onChange}
        />
      ) : infoType === "radioInput" ? (
        <Div>
          <RadioInput
            categories={categories}
            name={infoName}
            onClickInput={onChange}
            isChecked={task[infoName]}
          />
        </Div>
      ) : infoType === "TagsContainer" ? (
        <></>
      ) : null}
    </TaskProperties>
  );
}

export default InformationToModify;
