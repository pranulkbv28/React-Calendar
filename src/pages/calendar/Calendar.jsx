import { Calendar, Navigate, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./calendar.css";

function CustomToolbar(toolbar) {
  const goToBack = () => {
    toolbar.onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    toolbar.onNavigate(Navigate.NEXT);
  };

  const goToCurrent = () => {
    toolbar.onNavigate(Navigate.TODAY);
  };

  const goToMonth = () => {
    toolbar.onView("month");
  };

  const goToWeek = () => {
    toolbar.onView("week");
  };

  const goToDay = () => {
    toolbar.onView("day");
  };

  return (
    <div className="flex items-center px-4 my-5 w-3/4">
      <div className="flex items-center gap-8 w-1/4">
        <button
          className="bg-sky-600 py-1 px-3 rounded-md text-white"
          onClick={goToCurrent}
        >
          Today
        </button>
        <div className="flex items-center justify-center gap-1">
          <button
            className="bg-sky-400 rounded-full flex items-center justify-center"
            onClick={goToBack}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="bg-sky-400 rounded-full flex items-center justify-center"
            onClick={goToNext}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <span>{toolbar.label}</span>
      </div>
      <div className="flex items-center justify-end w-1/4">
        <button
          className="border py-1 px-6 flex items-center justify-center w-1/5 rounded-l-3xl"
          onClick={goToMonth}
        >
          Month
        </button>
        <button
          className="border py-1 px-6 flex items-center justify-center w-1/5"
          onClick={goToWeek}
        >
          Week
        </button>
        <button
          className="border py-1 px-6 flex items-center justify-center w-1/5 rounded-r-3xl"
          onClick={goToDay}
        >
          Day
        </button>
      </div>
    </div>
  );
}

const localizer = momentLocalizer(moment);

function MyCalendar() {
  const events = [
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Sample Event",
    },
    {
      start: moment().toDate(),
      end: moment().toDate(),
      title: "Sample Event 1",
    },
  ];

  return (
    <div className="component-1 container mx-auto p-4 w-3/4">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        className="rounded-lg shadow"
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

export default MyCalendar;
