import IconArrowRight from "../components/icons/IconArrowRight";
import { useEffect } from "react"

type BookDoneProps = {
    hideBookDone: boolean
    handleShowHomePage: () => void
    handleShowConfirm: () => void
}

const BookDone = ({ hideBookDone, handleShowHomePage, handleShowConfirm }: BookDoneProps) => {
    useEffect(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [])
    
    return (
        <>
            {hideBookDone && <div className='max-w-[900px] mx-auto mt-[100px] mb-[100px]'>
                <div className='p-6 bg-white shadow-md '>
                    <h2 className='text-[24px] font-semibold'>Private room dining Rakuzo-RAKUZO-Sapporo station square store</h2>
                </div>
                <div className='grid grid-cols-3 gap-x-[5px] mt-5 select-none text-[16px]'>
                    <div
                        onClick={handleShowHomePage}
                        className='flex items-center justify-center font-bold text-white process-1 '>
                        <div className='ml-[-120px]'>Reservation details selection</div>
                    </div>
                    <div
                        onClick={handleShowConfirm}
                        className='flex items-center justify-center font-bold text-white process-2'>
                        <div className='ml-[-108px]'>Confirmation of reservation details</div>
                    </div>
                    <div className='flex items-center justify-center font-bold text-white process-3 active'>
                        <div className='ml-[-110px]'>booking is done</div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center px-8 py-8 mt-5 bg-white">
                    <h2 className="text-[24px] text-[#333333] font-bold">Thank you for your reservation</h2>
                    <div className="flex flex-col">
                        <p className="mt-6">We have sent a reservation completion email to your contact information.</p>
                        <p>You can also check the reservation details from the reservation management page.</p>
                    </div>
                    <div className="mt-6 bg-[#fff9e7] w-[800px] p-8 flex flex-col items-center justify-center">
                        <h2 className="text-[20px] text-[#d70025] font-bold">If you finish as it is, you will not get the PayPay bonus</h2>
                        <h2 className="text-[18px] text-[#333333] font-bold mt-5">If you link with PayPay from this page</h2>
                        <div className="flex items-center gap-x-[4px] mt-2 text-[18px] font-bold">
                            At the store
                            <div className="flex items-center gap-x-[2px] text-[#d70025] font-bold text-[20px]">
                                <img className="w-[20px] h-[20px]" src="./iconPayPay.png" alt="" />
                                <span className="text-[30px]">150</span>
                                Equivalent to yen
                            </div>
                            <span className="text-[#62626c] text-sm font-normal">(PayPay bonus)</span>
                            Can be earned
                        </div>
                        <button className="bg-[#ff9f11] text-white w-[280px] h-[50px] rounded-md mt-5 font-bold hover:opacity-80 transition-opacity">PayPay integration</button>
                    </div>
                    <div className="flex flex-col mt-4 gap-y-2 ml-[42px] mr-[65px] text-sm">
                        <span>* PayPay bonus will be given about 7 days after your visit</span>
                        <span>* The amount of PayPay bonus granted may vary depending on the conditions of your reservation.
                            Please <span className="text-[#2d88da]">see here</span> for details
                        </span>
                        <span>* PayPay Bonus cannot be withdrawn or transferred. Also available at the PayPay official store</span>
                    </div>
                    <div className="flex text-[#2d88da] mt-5 mr-[435px] items-center gap-x-2">
                        <div className="flex items-center gap-x-3">Confirm the reservation details <IconArrowRight /></div>
                        <div className="flex items-center gap-x-3">To store TOP <IconArrowRight /></div>
                    </div>
                </div>
            </div>}
        </>
    );
};

export default BookDone;