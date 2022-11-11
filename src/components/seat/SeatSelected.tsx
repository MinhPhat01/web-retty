import { useRetty } from "../../context/rettyContext";

const SeatSelected = () => {
    const { imgSeat, titleSeat } = useRetty()
    
    return (
        <div className='flex mt-5 mb-3 pt-4 gap-x-5 border-t-[2px] border-[#eaeaeb]'>
            <div className='w-[100px] h-[100px]'><img className='object-center w-full h-full' src={imgSeat || "./no-image.png"} alt="" /></div>
            <div className='w-[800px]'>
                <h2 className='text-[#2e2e3a] text-[16px] font-bold leading-5'>
                    {titleSeat || "No title"}
                </h2>
                <p className='text-[16px] text-textColor '>Charge fee: None</p>
            </div>
        </div>
    );
};

export default SeatSelected;