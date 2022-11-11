import Calendar from "./Calendar";

type CalendarProps = {
    currentDate?: Date
    setCurrentDate: (date: Date) => void
}

const CalendarMain = ({ currentDate, setCurrentDate }: CalendarProps) => {
    return (
        <div className="flex flex-col ">
            <Calendar selectedDate={currentDate} onChange={setCurrentDate} />
        </div>
    );
};

export default CalendarMain;