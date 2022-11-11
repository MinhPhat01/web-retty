import { useRetty } from "../../context/rettyContext";

const ConfirmTime = () => {
    const { amountPeople, timeBooking, fullDay, weekName } = useRetty()
    
    return (
        <div className="text-[#2e2e3a] font-bold text-[24px] flex items-center justify-center gap-x-2 mt-3">
            <div className="flex gap-x-2">
                <span>{weekName}</span>
                <span>{fullDay}</span>
            </div>
            <div>{amountPeople ? `${amountPeople} people ` : ""}</div>
            <div>{timeBooking || ""}</div>
        </div>
    );
};

export default ConfirmTime;