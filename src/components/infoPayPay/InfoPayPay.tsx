import IconQuestion from "../icons/IconQuestion";

const InfoPayPay = () => {
    return (
        <div className="px-[55px] py-4 mt-5 bg-white">
            <div className="flex items-center gap-x-1 text-[#62626c] font-bold">Earn PayPay Bonus<IconQuestion /></div>
            <div className="mt-3 mb-3 pt-4 border-t-[2px] border-[#eaeaeb]">
                <div className="text-[#62626c] text-[16px] flex items-center gap-x-[2px]">
                    <span className="text-[#2e2e3a] text-[18px] font-bold">In visit us</span>
                    <div className="text-[#ff0033] text-[18px] flex items-center font-bold gap-x-[2px]"><img className="w-[20px] h-[20px]" src="./iconPayPay.png" alt="" />150 equivalent yen</div>
                    <span>(PayPay bonus)</span>
                    <span className="text-[#ff0033] text-[18px] font-bold">acquisition</span>
                </div>
                <div className="flex flex-col mt-2 gap-y-[2px] text-[#62626c] text-[16px]">
                    <span>* If you have not linked with PayPay, you can link from the reservation completion screen.</span>
                    <span>* The amount of PayPay bonus granted may vary depending on the conditions of your reservation. Please <span className="text-blue-300">see here</span> for details</span>
                    <span>* The maximum PayPay bonus you can get with Retty is equivalent to 3,000 yen per month.</span>
                    <span>* PayPay Bonus cannot be withdrawn or transferred. Also available at the PayPay official store</span>
                </div>
            </div>
        </div>
    );
};

export default InfoPayPay;