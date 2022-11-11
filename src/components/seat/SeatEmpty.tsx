const SeatEmpty = () => {
    return (
        <div className='px-[55px] py-4 mt-5 bg-white'>
            <div className='text-textColor text-[16px] mb-5'>Please select a <span className='font-bold text-[20px]'>seat</span></div>
            <div className='py-4 border-t border-gray-300 text-textColor text-[16px]'>
                You can select the seats that can be reserved by selecting the number of people, the date of visit, the time, and the course
            </div>
        </div>
    );
};

export default SeatEmpty;