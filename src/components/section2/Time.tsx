import classNames from "classnames";
import { useRetty } from "../../context/rettyContext";
import IconCircle from "../icons/IconCircle";
import IconSquare from "../icons/IconSquare";

type TimeProps = {
    time: string,
    empty: boolean,
    timeIsActive: string,
    setTimeIsActive: (s: string) => void
}

const Time = ({ time, empty, timeIsActive, setTimeIsActive }: TimeProps) => {
    const { setTimeBooking } = useRetty()
    const handleGetTime = (time: string) => () => {
        setTimeBooking(time)
        setTimeIsActive(time)
    }
    
    return (
        <button
            disabled={!empty}
            onClick={handleGetTime(time)}
            className={classNames("bg-white w-[70px] h-[65px] flex flex-col items-center justify-center rounded-md transition-colors border border-gray-300 select-none flex-1", {
                "cursor-pointer hover:bg-yellow-50": empty,
                "bg-yellow-50": timeIsActive === time
            })}>
            <div className='mb-1 text-xs font-medium text-textColor'>{time}</div>
            {empty ? <IconCircle /> : <IconSquare />}
        </button>
    );
};
export default Time;