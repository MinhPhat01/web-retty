const MainEmpty = () => {
    return (
        <div className='px-[55px] py-4 mt-5 bg-white'>
            <div className="text-textColor text-[16px]  mb-5"><span className="font-bold text-[20px]">Please </span>
                select the <span className="font-bold text-[20px]">number of visitors and the expected date
                    <span className="text-[16px] font-normal"> of</span> visit</span>
            </div>
            <div className='py-4 border-t border-gray-300 text-textColor text-[16px]'>
                If you select a course, you can select the number of people who can make a reservation, the date and time
            </div>
        </div>
    );
};

export default MainEmpty;