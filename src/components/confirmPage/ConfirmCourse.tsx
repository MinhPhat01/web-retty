import { useRetty } from "../../context/rettyContext";

const ConfirmCourse = () => {
    const { titleCourse, priceCourse, imgCourse } = useRetty()
    
    return (
        <div className='mt-3 mb-3 pt-4 border-t-[2px] border-[#eaeaeb]'>
            <h2 className="mb-2 font-bold text-[18px]">Booked course</h2>
            <div className='flex gap-x-5'>
                <div className='w-[100px] h-[100px]'><img className='object-center w-full h-full' src={imgCourse || "./no-image.png"} alt="" /></div>
                <div className='w-[800px]'>
                    <div className="flex mb-2 text-sm font-bold gap-x-2 text-colorPrimary">
                        <div className="px-4 py-[2px] border rounded-md border-colorPrimary">2 hours</div>
                        <div className="px-4 py-[2px] border rounded-md border-colorPrimary"> all you can drink</div>
                    </div>
                    <h2 className='text-[#2e2e3a] text-[16px] font-bold leading-5'>
                        {titleCourse || 'No title'}
                    </h2>
                    <p className='text-[18px] text-[#d70025] font-bold'>{priceCourse ? `${priceCourse} yen (tax included) ` : "0 yen (tax included)"}</p>
                </div>
            </div>
        </div>
    );
};

export default ConfirmCourse;