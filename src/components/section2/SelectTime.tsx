import classNames from "classnames";
import { useState } from "react";
import { timeSlot } from "../../constants/timeSlot";
import IconArrowLeft from "../icons/IconArrowLeft";
import IconArrowRight from "../icons/IconArrowRight";
import Time from "./Time";

const SelectTime = () => {
    const [width, setWidth] = useState(0)
    const handleTransform = (pixel: number) => () => {
        setWidth(pixel)
    }
    const [timeIsActive, setTimeIsActive] = useState("")
    
    return (
        <div className="bg-[#f5f5f5] p-4 relative">
            <button
                onClick={handleTransform(0)}
                className={classNames("absolute top-[35px] left-[-20px] w-[30px] h-[30px] bg-[#585862] text-white rounded-full flex items-center justify-center text-[20px]", {
                "hidden": width === 0
                })}><IconArrowLeft />
            </button>
            <div className="flex overflow-hidden gap-x-[6px]">
                {
                    timeSlot.length > 0 && timeSlot.map((item) => {
                        return (
                            <div key={item.id}
                                style={{ transform: `translateX(${width}px)` }}
                                className="w-[100px] time">
                                <Time timeIsActive={timeIsActive} setTimeIsActive={setTimeIsActive} empty={item.empty} time={item.time} />
                            </div>
                        )
                    })}
            </div>
            <button
                onClick={handleTransform(-455)}
                className={classNames("absolute top-[35px] right-[-15px] w-[30px] h-[30px] bg-[#585862] text-white rounded-full flex items-center justify-center text-[20px]",
                    {
                        "hidden": width === -455
                    })}><IconArrowRight />
            </button>
        </div >
    );
};

export default SelectTime;