import { useCallback, useState } from "react";

const SmallCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [currYear, setCurrYear] = useState(date.getFullYear());
  const [currMonth, setCurrMonth] = useState(date.getMonth());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const renderCalendar = useCallback(() => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
      lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
      lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
      lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
    let daysArray = [];

    for (let i = firstDayofMonth; i > 0; i--) {
      daysArray.push(
        <li
          key={`prevMonth_${lastDateofLastMonth - i + 1}`} // Unique key for previous month days
          style={{ width: "calc(100% / 7)", textAlign: "center" }} // Align center
          className="inactive text-gray-500" // Gray font color
        >
          {lastDateofLastMonth - i + 1}
        </li>
      );
    }

    for (let i = 1; i <= lastDateofMonth; i++) {
      let isToday =
        i === date.getDate() &&
        currMonth === new Date().getMonth() &&
        currYear === new Date().getFullYear()
          ? "bg-blue-400" // Apply bg-blue-400 for today's date
          : "";
      daysArray.push(
        <li
          key={`currentMonth_${i}`} // Unique key for current month days
          style={{ width: "calc(100% / 7)", textAlign: "center" }} // Align center
          className={` ${isToday} ${isToday ? "active" : ""}`} // Add active class if isToday is true
        >
          {i}
        </li>
      );
    }

    for (let i = lastDayofMonth; i < 6; i++) {
      daysArray.push(
        <li
          key={`nextMonth_${i - lastDayofMonth + 1}`} // Unique key for next month days
          style={{ width: "calc(100% / 7)", textAlign: "center" }} // Align center
          className="inactive text-gray-500" // Gray font color
        >
          {i - lastDayofMonth + 1}
        </li>
      );
    }
    return daysArray;
  }, [currMonth, currYear, date]);

  const handleIconClick = (id) => {
    console.log("clicked");
    let newMonth = id === "prev" ? currMonth - 1 : currMonth + 1;
    let newYear = currYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear = currYear - 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear = currYear + 1;
    }

    setDate(new Date(newYear, newMonth, new Date().getDate()));
    setCurrYear(newYear);
    setCurrMonth(newMonth);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-600 p-2">
      <div className="w-96 bg-white rounded-xl shadow-lg">
        <header className="flex items-center justify-between p-6">
          <p className="text-lg font-medium">{`${months[currMonth]} ${currYear}`}</p>
          <div className="flex gap-2">
            <span
              id="prev"
              className="cursor-pointer material-symbols-rounded"
              onClick={() => handleIconClick("prev")}
            >
              left
            </span>
            <span
              id="next"
              className="cursor-pointer material-symbols-rounded"
              onClick={() => handleIconClick("next")}
            >
              right
            </span>
          </div>
        </header>
        <div className="calendar p-5">
          <ul className="weeks flex flex-wrap text-center">
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Sun
            </li>
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Mon
            </li>
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Tue
            </li>
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Wed
            </li>
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Thu
            </li>
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Fri
            </li>
            <li style={{ width: "calc(100% / 7)" }} className="w-1/7 text-base">
              Sat
            </li>
          </ul>
          <ul className="days flex flex-wrap">{renderCalendar()}</ul>
        </div>
      </div>
    </div>
  );
};

export default SmallCalendar;
