import { useRetty } from '../../context/rettyContext';
import Button from '../button/Button';
import Course from '../course/Course';
import Seat from '../seat/Seat';
import SeatEmpty from '../seat/SeatEmpty';
import Main from '../section2/Main';
import MainEmpty from '../section2/MainEmpty';

type MainRettyProps = {
    hideHomePage: boolean
    handleShowConfirm: () => void
    handleShowBookDone: () => void
}

const MainRetty = ({ hideHomePage, handleShowConfirm, handleShowBookDone }: MainRettyProps) => {
    const { titleCourse, timeBooking, titleSeat } = useRetty()
    
    return (
        <>
            {hideHomePage && <div className='max-w-[900px] mx-auto mt-[100px] mb-[50px]'>
                <div className='p-6 bg-white shadow-md '>
                    <h2 className='text-[24px] font-semibold'>Private room dining Rakuzo-RAKUZO-Sapporo station square store</h2>
                </div>
                <div className='grid grid-cols-3 gap-x-[5px] mt-5 select-none text-[16px] cursor-pointer'>
                    <div
                        className='flex items-center justify-center font-bold text-white process-1 active'>
                        <div className='ml-[-82px]'>Reservation details selection</div>
                    </div>
                    <div
                        onClick={handleShowConfirm}
                        className='flex items-center justify-center font-bold text-white process-2'>
                        <div className='ml-[-108px]'>Confirmation of reservation details</div>
                    </div>
                    <div
                        onClick={handleShowBookDone}
                        className='flex items-center justify-center font-bold text-white process-3'>
                        <div className='ml-[-110px]'>booking is done</div>
                    </div>
                </div>
                <Course />
                {titleCourse ?
                    <Main /> :
                    <MainEmpty />
                }
                {timeBooking ? <Seat /> : <SeatEmpty />}
                {
                    titleSeat ?
                        <Button className="w-[400px]" onClick={handleShowConfirm} children="Proceed to enter reservation information" />
                        :
                        <Button className="w-[400px] !bg-gray-300" disable children="Proceed to enter reservation information" />
                }

            </div>}
        </>
    );
};

export default MainRetty;