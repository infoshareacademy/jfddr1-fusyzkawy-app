//Header: "task description" + "Mon(15th) Tue(16th) Wed(17th) ...."

import React from "react";
import "../styleAnia.css";
import styled from "styled-components";

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 15px;
`;

const SingleDay = styled.div`
  padding: 10px;
`;
const NameOfDay = styled.p`
  margin-bottom: 5px;
`;

const Day = styled.p`
  font-size: 0.8rem;
  margin-top: 5px;
  color: var(--extra-dark-gray);
`;

function DateHeader({ incommingDate, isDateVisible, numberOfDay }) {
  const date = new Date(incommingDate);
  const modifier = (date.getDay() + 6) % 7;
  const currentDay = date.getDate() - modifier;

  // unworking for biggining & ending month
  const weekDays = [];
  for (let i = 0; i < numberOfDay; i++) {
    weekDays[i] = currentDay + i;
  }
  return (
    <Container>
      {weekDays.map((elem, index) => (
        <SingleDay>
          <NameOfDay>{week[index]}</NameOfDay>
          {isDateVisible && <Day>{elem} th</Day>}
        </SingleDay>
      ))}
    </Container>
  );
}

export default DateHeader;
