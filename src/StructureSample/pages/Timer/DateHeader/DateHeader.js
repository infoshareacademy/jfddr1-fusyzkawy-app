import React from "react";
import { Container, SingleDay, NameOfDay, Day } from "./DataHeaderStyled";

const week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function DateHeader({ incommingDate, isDateVisible, numberOfDay }) {
  // const date = new Date(incommingDate);
  const date = new Date();
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
        <SingleDay key={index}>
          <NameOfDay>{week[index]}</NameOfDay>
          {isDateVisible && <Day>{elem} th</Day>}
        </SingleDay>
      ))}
    </Container>
  );
}

export default DateHeader;
