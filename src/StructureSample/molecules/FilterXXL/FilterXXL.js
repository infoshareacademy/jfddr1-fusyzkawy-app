import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import { OuterModal, FormWrapper, Input } from "./FilterXXLStyled";

const FilterXXL = ({ closeModal }) => {
  const emptyFilterData = {
    text: "",
    type: [],
    status: [],
    priority: [],
  };

  const [filterData, setFilterData] = useState(emptyFilterData);

  const outerModal = useRef(null);

  const outsideClick = event => {
    if (event.target === outerModal.current) {
      closeModal(false);
    }
  };

  const handleTextDataChange = event => {
    setFilterData({ ...filterData, text: event.target.value });
  };

  const handleDataChange = event => {
    const name = event.target.name;
    const currFilterDataValue = filterData[name];
    const clickedValue = event.target.value;
    const newFilterDataValue = currFilterDataValue.includes(clickedValue)
      ? currFilterDataValue.filter(value => value !== clickedValue)
      : [...currFilterDataValue, clickedValue];

    setFilterData({ ...filterData, [name]: newFilterDataValue });
  };

  const handleSubmit = event => {
    event.preventDefault();
    closeModal(false);
  };

  return (
    <OuterModal ref={outerModal} onClick={outsideClick}>
      <Rnd
        default={{
          x: 263,
          y: 155,
          width: 600,
          height: 136,
        }}
      >
        <FormWrapper onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Wanna filter?"
            name="text"
            value={filterData.text}
            onChange={handleTextDataChange}
          />
          <section>
            <h4>Type</h4>
            <label htmlFor="work">Work</label>
            <input
              type="checkbox"
              id="work"
              name="type"
              value="Work"
              onChange={handleDataChange}
            />
            <label htmlFor="personal">Personal</label>
            <input
              type="checkbox"
              id="personal"
              name="type"
              value="Personal"
              onChange={handleDataChange}
            />
            <label htmlFor="home">Home</label>
            <input
              type="checkbox"
              id="home"
              name="type"
              value="Home"
              onChange={handleDataChange}
            />
          </section>
          <section>
            <h4>Status</h4>
            <label htmlFor="newTask">New Task</label>
            <input
              type="checkbox"
              id="newTask"
              name="status"
              value="New task"
              onChange={handleDataChange}
            />
            <label htmlFor="inProgress">In progress</label>
            <input
              type="checkbox"
              id="inProgress"
              name="status"
              value="In progress"
              onChange={handleDataChange}
            />
            <label htmlFor="completed">Completed</label>
            <input
              type="checkbox"
              id="completed"
              name="status"
              value="Completed"
              onChange={handleDataChange}
            />
            <label htmlFor="onHold">On hold</label>
            <input
              type="checkbox"
              id="onHold"
              name="status"
              value="On hold"
              onChange={handleDataChange}
            />
            <label htmlFor="cancelled">Cancelled</label>
            <input
              type="checkbox"
              id="cancelled"
              name="status"
              value="Cancelled"
              onChange={handleDataChange}
            />
          </section>
          <section>
            <h4>Priority</h4>
            <label htmlFor="high">High</label>
            <input
              type="checkbox"
              id="high"
              name="priority"
              value="High"
              onChange={handleDataChange}
            />
            <label htmlFor="medium">Medium</label>
            <input
              type="checkbox"
              id="medium"
              name="priority"
              value="Medium"
              onChange={handleDataChange}
            />
            <label htmlFor="low">Low</label>
            <input
              type="checkbox"
              id="low"
              name="priority"
              value="Low"
              onChange={handleDataChange}
            />
          </section>
          <button type="submit">Apply</button>
        </FormWrapper>
      </Rnd>
    </OuterModal>
  );
};

export default FilterXXL;
