import IconArrowDownOfSelect from "../icons/IconArrowDownOfSelect"
import IconArrowUpOfSelect from "../icons/IconArrowUpOfSelect"

type SelectProps = {
    placeholder: string
    className?: string
    icon: React.ReactNode
    handleSetShow?: () => void
    show?: boolean
}

const Select = ({ placeholder = "", className = "", icon, handleSetShow, show }: SelectProps) => {
    return (
        <div
            className={`flex items-center justify-between py-3 px-5 bg-white border border-gray-400 rounded-lg cursor-pointer text-sm text-[#B2B3BD] select-none ${className}`}
            onClick={handleSetShow}>
            <span className='text-gray-700'>{icon}</span>
            <span className='text-[18px] font-bold text-textColor'>{placeholder}</span>
            <span>
                {show ? <IconArrowDownOfSelect /> : <IconArrowUpOfSelect />}
            </span>
        </div >
    );
};

export default Select;