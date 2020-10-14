//h2 -> calendar
// 3x button -> Day, Week, Month
//Filter
//button previous
//Calendar header -> monday(15th), tuesday(16th), wednesday(17th).....
//button next
//Calendar -> compose of components day, week, month

import React from "react";
import Month from "../molecules/Month";

function Filter() {
  return <button>Filter</button>;
}

function Calendar({ dateCalendar }) {
  return (
    <>
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
    </>
  );
}

export default Calendar;
