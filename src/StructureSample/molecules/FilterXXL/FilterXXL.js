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

  const handleTypeDataChange = event => {
    const currFilterDataType = filterData.type;
    const clickedValue = event.target.value;
    const newFilterDataType = currFilterDataType.includes(clickedValue)
      ? currFilterDataType.filter(t => t !== clickedValue)
      : [...currFilterDataType, clickedValue];

    setFilterData({ ...filterData, type: newFilterDataType });
  };
  console.log(filterData);

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
          <label htmlFor="work">Work</label>
          <input
            type="checkbox"
            id="work"
            name="type"
            value="work"
            onChange={handleTypeDataChange}
          />
          <label htmlFor="personal">Personal</label>
          <input
            type="checkbox"
            id="personal"
            name="type"
            value="personal"
            onChange={handleTypeDataChange}
          />
          <label htmlFor="home">Home</label>
          <input
            type="checkbox"
            id="home"
            name="type"
            value="home"
            onChange={handleTypeDataChange}
          />
          <button type="submit">Apply</button>
        </FormWrapper>
      </Rnd>
    </OuterModal>
  );
};

export default FilterXXL;
