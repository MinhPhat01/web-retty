import SelectDate from "./SelectDate";
import SelectPeople from "./SelectPeople";
import IconCircle from "../icons/IconCircle";
import IconSquare from "../icons/IconSquare";
import SelectTime from "./SelectTime";

const Main = () => {
    return (
        <div className="px-[55px] py-4 mt-5 bg-white">
            <div className="text-textColor text-[16px]"><span className="font-bold text-[20px]">Please </span>
                select the <span className="font-bold text-[20px]">number of visitors and the expected date
                    <span className="text-[16px] font-normal"> of</span> visit</span>
            </div>
            <div className="flex items-start justify-between mt-3">
                <SelectPeople />
                <SelectDate />
            </div>
            <h2 className="mt-5 text-textColor text-[20px] font-bold mb-2">Please <span className="text-[16px] font-normal">select</span> your visit time</h2>
            <SelectTime />
            <div className="mt-5">
                <div className="flex items-center font-medium gap-x-[12px] text-[#2e2e3a] text-[15px]">
                    <div className="flex items-center gap-x-1"><IconCircle /> Immediate reservation OK</div>
                    <div className="flex items-center gap-x-1"><IconSquare /> Request reservation</div>
                </div>
                <p className="text-[#2e2e3a] text-sm">Request reservations will be confirmed by contacting the shop.</p>
            </div>
        </div>
    );
};

export default Main;