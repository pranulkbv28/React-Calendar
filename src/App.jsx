import "./App.css";
import CalendarSide from "./components/calendarSide/CalendarSide";
import MyCalendar from "./pages/calendar/Calendar";
function App() {
  return (
    <div className="">
      <div className="w-full h-full flex gap-0">
        <CalendarSide />
        <MyCalendar />
      </div>
    </div>
  );
}

export default App;
