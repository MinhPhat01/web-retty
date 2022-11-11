import { useRetty } from "../../context/rettyContext";

const ConfirmSeat = () => {
    const { imgSeat, titleSeat } = useRetty()
    
    return (
        <div className=' mt-5 mb-3 pt-4 border-t-[2px] border-[#eaeaeb]'>
            <h2 className="mb-2 font-bold text-[18px]">Reserved seat</h2>
            <div className='flex gap-x-5'>
                <div className='w-[100px] h-[100px]'><img className='object-center w-full h-full' src={imgSeat || "./no-image.png"} alt="" /></div>
                <div className='w-[800px]'>
                    <h2 className='text-[#2e2e3a] text-[16px] font-bold leading-5'>
                        {titleSeat || "Private room / non-smoking seat"}
                    </h2>
                    <p className='text-[16px] font-normal'>Charge fee: None</p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmSeat;