import React from "react";
import Month from "../molecules/Month";

function Filter() {
  return <button>Filter</button>;
}

function Calendar({ dateCalendar }) {
  return (
    <div className="mainHome">
      <h2>Calendar</h2>
      <div>
        <button>Day</button>
        <button>Week</button>
        <button>Month</button>
      </div>
      <Filter />
      <div className={"displayFLexRow2"}>
        <button className={"marginTop"}>Previous </button>
        <div className={"widthProcent80"}>
          <Month date={dateCalendar} />
          {/*zamiennie później z <Day/> & <Week/>*/}
        </div>
        <button className={"marginTop"}>Next</button>
      </div>
    </div>
  );
}

export default Calendar;
