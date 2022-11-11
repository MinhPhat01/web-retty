import useToggle from '../../hooks/useToggle';
import SeatList from './SeatList';
import SeatSelected from './SeatSelected';

const Seat = () => {
    const { value, handleToggle, setValue } = useToggle()
    
    return (
        <div className='px-[55px] py-4 mt-5 bg-white '>
            <div className='flex items-center justify-between'>
                <div>
                    <div className='text-textColor text-[16px] ]'>Please select a <span className='font-bold text-[20px]'>seat</span></div>
                </div>
                <button onClick={handleToggle} className='text-[#3c8fdd]'>Change</button>
            </div>
            {value ? <SeatList  setValue={setValue} /> : <SeatSelected />}
        </div>
    );
};

export default Seat;