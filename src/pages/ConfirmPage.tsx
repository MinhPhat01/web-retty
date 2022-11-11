import ConfirmCourse from "../components/confirmPage/ConfirmCourse";
import ConfirmSeat from "../components/confirmPage/ConfirmSeat";
import ConfirmTime from "../components/confirmPage/ConfirmTime";
import InfoPayPay from "../components/infoPayPay/InfoPayPay";
import { useEffect } from "react"
import Form from "../components/form/Form";

type ConfirmPageProps = {
    hideConfirm: boolean
    handleShowBookDone: () => void
    handleShowHomePage: () => void
}

const ConfirmPage = ({ hideConfirm, handleShowBookDone, handleShowHomePage }: ConfirmPageProps) => {
    useEffect(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [])

    return (
        <>
            {hideConfirm && <div
                className="max-w-[900px] mx-auto mt-[100px] mb-8">
                <div className='p-6 bg-white shadow-md '>
                    <h2 className='text-[24px] font-semibold'>Private room dining Rakuzo-RAKUZO-Sapporo station square store</h2>
                </div>
                <div className='grid grid-cols-3 gap-x-[5px] mt-5 select-none text-[16px] cursor-pointer'>
                    <div
                        onClick={handleShowHomePage}
                        className='flex items-center justify-center font-bold text-white process-1'>
                        <div className='ml-[-82px]'>Reservation details selection</div>
                    </div>
                    <div className='flex items-center justify-center font-bold text-white process-2 active'>
                        <div className='ml-[-108px]'>Confirmation of reservation details</div>
                    </div>
                    <div
                        onClick={handleShowBookDone}
                        className='flex items-center justify-center font-bold text-white process-3'>
                        <div className='ml-[-110px]'>booking is done</div>
                    </div>
                </div>
                <div className="px-[55px] py-4 mt-5 bg-white">
                    <p className="text-sm">Please check the reservation details</p>
                    <div className="p-4 bg-[#fff9e7] mt-4 flex items-center justify-center flex-col">
                        <h2 className='text-[18px]'>Private room dining Rakuzo-RAKUZO-Sapporo station square store</h2>
                        <ConfirmTime />
                    </div>
                    <div className="flex flex-col py-4 mt-4 border-t border-gray-300 gap-y-2">
                        <span className="text-[#2e2e3a] font-bold">Reservation format</span>
                        <span className="font-bold text-[#ff5615]">Book immediately</span>
                        <span className="text-sm">* The reservation format is immediate reservation. The reservation will be confirmed when the reservation is completed on the WEB</span>
                    </div>
                    <ConfirmCourse />
                    <ConfirmSeat />
                </div>
                <InfoPayPay />
                <Form handleShowHomePage={handleShowHomePage} handleShowBookDone={handleShowBookDone} />
            </div>}
        </>
    );
};

export default ConfirmPage;