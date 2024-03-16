// import React from 'react';
import "./showonly.css";

const ShowOnly = () => {
  return (
    <div className="showOnlyConatiner w-3/4 mx-auto">
      <h2 className="text-3xl">Show Only:</h2>
      <div>
        <ul className="showOnlyUl">
          <li className="green">
            <input name="event" id="event" type="checkbox" />{" "}
            <label htmlFor="event">Event</label>
          </li>
          <li className="red">
            <input name="assignments" id="assignments" type="checkbox" />{" "}
            <label htmlFor="assignments">Assignment</label>
          </li>
          <li className="purple">
            <input name="focusPeriod" id="focusPeriod" type="checkbox" />{" "}
            <label htmlFor="focusPeriod">Focus Period</label>
          </li>
          <li className="yellow">
            <input name="tests" id="tests" type="checkbox" />{" "}
            <label htmlFor="tests">Tests</label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ShowOnly;
