// import React from 'react';

import Events from "./Events/Events";
import ShowOnly from "./ShowOnly/ShowOnly";
import SideCalendar from "./SideCalendar/SideCalendar";

const CalendarSide = () => {
  return (
    <div className="w-1/4">
      <SideCalendar />
      <Events />
      <hr className="border-dashed w-3/4 border-black border-t-2 mx-auto my-5" />
      <ShowOnly />
      <hr className="border-dashed w-3/4 border-black border-t-2 mx-auto my-5" />
    </div>
  );
};

export default CalendarSide;
