import classNames from "classnames";
import {
    add,
    differenceInDays,
    endOfMonth,
    format,
    setDate,
    startOfMonth,
    sub,
} from "date-fns";
import { useCallback, useEffect, useState } from "react";
import { weeks } from "../../constants/weeks";
import { useRetty } from "../../context/rettyContext";
import IconArrowLeft from "../icons/IconArrowLeft";
import IconArrowRight from "../icons/IconArrowRight";
import IconCircle from "../icons/IconCircle";
import IconSquare from "../icons/IconSquare";
import Cell from "./Cell";

type CalendarProps = {
    selectedDate?: Date;
    onChange: (date: Date) => void
}

const Calendar = ({ selectedDate = new Date(), onChange }: CalendarProps) => {
    const startDayOfMonth = startOfMonth(selectedDate);
    const endDayOfMonth = endOfMonth(selectedDate);
    const numDaysOfMonth = differenceInDays(endDayOfMonth, startDayOfMonth) + 1;
    const prefixDays = startDayOfMonth.getDay();
    const suffixDays = 6 - endDayOfMonth.getDay();
    const prevMonth = () => onChange(sub(selectedDate, { months: 1 }));
    const nextMonth = () => onChange(add(selectedDate, { months: 1 }));
    const { setWeekName, setFullDay } = useRetty()
    const handleClickDate = (index: number) => () => {
        const date = setDate(selectedDate, index);
        onChange(date);
        date.getDay();
        const dayOfWeekName = date.toLocaleString(
            'default', { weekday: 'long' }
        );
        const infoDay = format(date, "dd LLLL yyyy")
        setWeekName(dayOfWeekName)
        setFullDay(infoDay)
    };
    const daysInMonth = useCallback((month: number, year: number) => {
        return new Date(year, month, 0).getDate();
    }, [])
    const [sundays, setSundays] = useState<number[]>([])
    useEffect(() => {
        const getDayOfMonth = daysInMonth(selectedDate.getMonth(), selectedDate.getFullYear());
        const newArr = []
        for (let i = 1; i <= getDayOfMonth + 1; i++) {
            let newDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i)
            if (newDate.getDay() === 0) {
                newArr.push(i)
            }
        }
        setSundays(newArr)
    }, [daysInMonth, selectedDate])

    return (
        <div className="w-full px-4 pb-4 mt-[-10px]">
            <div className="flex items-center justify-around mb-3">
                <button onClick={prevMonth} className="ml-[-32px]">
                    <IconArrowLeft />
                </button>
                <div className="w-[200px] flex items-center justify-center font-bold text-[18px] text-[#8c8c93]">{format(selectedDate, "LLLL yyyy")}</div>
                <button onClick={nextMonth} className="mr-[-35px]">
                    <IconArrowRight />
                </button>
            </div>
            <div className="p-2 bg-white">
                <div className="flex items-center ml-[14px] mb-4 pt-4 gap-x-[20px]">
                    {weeks.map((week, index) => (
                        week === "Sun" ? <div key={index} className="text-[#d0011c] font-medium">{week}</div> : <div key={index} className="text-[#62626c] font-medium">{week}</div>
                    ))}
                </div>
                <div className="grid items-center justify-center grid-cols-7 text-center">
                    {Array.from({ length: prefixDays }).map((_, index) => {
                        const date = 31 - prefixDays + index
                        const date2 = 32 - prefixDays + index
                        return (
                            <Cell disable key={index}>{numDaysOfMonth === 31 ? date : date2}</Cell>
                        )
                    })}
                    {Array.from({ length: numDaysOfMonth, }).map((_, index) => {
                        const date = index + 1;
                        const isCurrentDate = date === selectedDate.getDate();

                        return (
                            <Cell
                                date={date}
                                key={date}
                                isActive={isCurrentDate}
                                onClick={handleClickDate(date)}
                            >
                                <span className={classNames("", {
                                    "text-red-500 font-bold": sundays.includes(date)
                                })}
                                >
                                    {date}
                                </span>
                            </Cell>
                        )
                    })}
                    {Array.from({ length: suffixDays }).map((_, index) => {
                        const date = index + 1
                        return (
                            <Cell disable key={index}>{date}</Cell>
                        )
                    })}
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center text-sm gap-x-4 text-[#6c6c75] font-medium">
                    <div className="flex items-center gap-x-1"><IconCircle /> Immediate reservation OK</div>
                    <div className="flex items-center gap-x-1"><IconSquare /> Request reservation</div>
                </div>
                <div className="text-[#fb923c] text-sm font-medium ml-2 mt-2">TEL <span className="text-[#6c6c75] font-medium">Telephone reservation</span></div>
                <div className="text-xs text-[#6c6c75] mt-2">Request reservations will be confirmed by contacting the shop.</div>
            </div>
        </div >
    );
};

export default Calendar;