import { Calendar, Navigate, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import "./sideCalendar.css";

function CustomToolbar(toolbar) {
  const goToBack = () => {
    toolbar.onNavigate(Navigate.PREVIOUS);
  };

  const goToNext = () => {
    toolbar.onNavigate(Navigate.NEXT);
  };

  // const goToCurrent = () => {
  //   toolbar.onNavigate(Navigate.TODAY);
  // };

  return (
    <div className="flex flex-wrap items-center px-4 my-5">
      <div className="flex items-center gap-8 w-1/2">
        {/* <button
          className="bg-sky-600 py-1 px-3 rounded-md text-white text-xs"
          onClick={goToCurrent}
        >
          Today
        </button> */}
        <div className="flex items-center justify-center gap-1">
          <button
            className="bg-sky-400 rounded-full flex items-center justify-center h-3 w-3 p-2"
            onClick={goToBack}
          >
            <ChevronLeftIcon />
          </button>
          <button
            className="bg-sky-400 rounded-full flex items-center justify-center h-3 w-3 p-2"
            onClick={goToNext}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <span>{toolbar.label}</span>
      </div>
    </div>
  );
}

const localizer = momentLocalizer(moment);

function SideCalendar() {
  return (
    <div className="component-2 container mx-auto p-4">
      <Calendar
        localizer={localizer}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500, margin: "0 auto" }}
        className="rounded-lg shadow"
        components={{
          toolbar: CustomToolbar,
        }}
      />
    </div>
  );
}

export default SideCalendar;
