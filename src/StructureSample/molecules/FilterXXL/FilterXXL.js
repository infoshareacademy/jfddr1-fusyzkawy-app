import React, { useRef, useState } from "react";
import { Rnd } from "react-rnd";
import {
  OuterModal,
  FormWrapper,
  Input,
  Btn,
  SectionTitle,
  Section,
  CheckboxesContainer,
  Checkbox,
} from "./FilterXXLStyled";

const FilterXXL = ({ closeModal, onDataReady }) => {
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
    onDataReady(filterData);
    closeModal(false);
  };

  return (
    <OuterModal ref={outerModal} onClick={outsideClick}>
      <Rnd
        default={{
          x: 263,
          y: 155,
          width: 300,
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
          <Section>
            <SectionTitle>Type</SectionTitle>
            <CheckboxesContainer>
              <label htmlFor="work">Work</label>
              <Checkbox
                type="checkbox"
                id="work"
                name="type"
                value="Work"
                onChange={handleDataChange}
              />
              <label htmlFor="personal">Personal</label>
              <Checkbox
                type="checkbox"
                id="personal"
                name="type"
                value="Personal"
                onChange={handleDataChange}
              />
              <label htmlFor="home">Home</label>
              <Checkbox
                type="checkbox"
                id="home"
                name="type"
                value="Home"
                onChange={handleDataChange}
              />
            </CheckboxesContainer>
          </Section>
          <Section>
            <SectionTitle>Status</SectionTitle>
            <CheckboxesContainer>
              <label htmlFor="newTask">New Task</label>
              <Checkbox
                type="checkbox"
                id="newTask"
                name="status"
                value="New task"
                onChange={handleDataChange}
              />
              <label htmlFor="inProgress">In progress</label>
              <Checkbox
                type="checkbox"
                id="inProgress"
                name="status"
                value="In progress"
                onChange={handleDataChange}
              />
              <label htmlFor="completed">Completed</label>
              <Checkbox
                type="checkbox"
                id="completed"
                name="status"
                value="Completed"
                onChange={handleDataChange}
              />
              <label htmlFor="onHold">On hold</label>
              <Checkbox
                type="checkbox"
                id="onHold"
                name="status"
                value="On hold"
                onChange={handleDataChange}
              />
              <label htmlFor="cancelled">Cancelled</label>
              <Checkbox
                type="checkbox"
                id="cancelled"
                name="status"
                value="Cancelled"
                onChange={handleDataChange}
              />
            </CheckboxesContainer>
          </Section>
          <Section>
            <SectionTitle>Priority</SectionTitle>
            <CheckboxesContainer>
              <label htmlFor="high">High</label>
              <Checkbox
                type="checkbox"
                id="high"
                name="priority"
                value="High"
                onChange={handleDataChange}
              />
              <label htmlFor="medium">Medium</label>
              <Checkbox
                type="checkbox"
                id="medium"
                name="priority"
                value="Medium"
                onChange={handleDataChange}
              />
              <label htmlFor="low">Low</label>
              <Checkbox
                type="checkbox"
                id="low"
                name="priority"
                value="Low"
                onChange={handleDataChange}
              />
            </CheckboxesContainer>
          </Section>
          <Btn type="submit">Apply</Btn>
        </FormWrapper>
      </Rnd>
    </OuterModal>
  );
};

export default FilterXXL;
