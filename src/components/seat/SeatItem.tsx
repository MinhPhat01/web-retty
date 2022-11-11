import { useRetty } from "../../context/rettyContext";
import IconArrowDown from "../icons/IconArrowDown";
import { v4 } from "uuid"
import { Fragment } from "react";

type SeatProps = {
    setValue: (s: boolean) => void,
    listSeatToday: [{
        title: string,
        thumbnail: string
    }]
}

const SeatItem = ({ setValue, listSeatToday }: SeatProps) => {
    const { setImgSeat, setTitleSeat } = useRetty()
    const handleGetSeat = (title = "", img = "") => () => {
        setTitleSeat(title)
        setImgSeat(img)
        setValue(false)
    }
    
    return (
        <Fragment key={v4()}>
            {
                listSeatToday.map((seat) => {
                    return (
                        <div
                            key={v4()}
                            className='flex items-center mt-5 mb-3 pt-4 gap-x-5 border-t-[2px] border-[#eaeaeb]'>
                            <div className='w-[100px] h-[100px]'><img className='object-center w-full h-full' src={seat.thumbnail} alt="" /></div>
                            <div className='w-[600px]'>
                                <div className="flex mb-2 text-sm font-bold gap-x-2 text-colorPrimary">
                                    <div className="px-4 py-[2px] border rounded-md border-colorPrimary">2 hours</div>
                                    <div className="px-4 py-[2px] border rounded-md border-colorPrimary"> all you can drink</div>
                                </div>
                                <h2 className='text-[#2e2e3a] text-[16px] font-bold leading-5'>
                                    {seat.title}
                                </h2>
                                <p className='text-[18px] text-[#d70025] font-bold'>Charge fee: None</p>
                                <div className="flex items-center gap-x-1 text-[#2d88da] cursor-pointer mt-1 text-sm select-none">
                                    View course details
                                    <IconArrowDown />
                                </div>

                            </div>
                            <button
                                onClick={handleGetSeat(seat.title, seat.thumbnail)}
                                className="px-8 border border-gray-400 py-[6px] rounded-md font-bold hover:opacity-80 transition-opacity select-none">Choice</button>
                        </div>
                    )
                })
            }
        </Fragment>
    );
};

export default SeatItem;