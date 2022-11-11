import { useRetty } from "../../context/rettyContext";
import IconCircle from "../icons/IconCircle";
import classNames from "classnames";
import IconDisable from "../icons/IconDisable";

type CellProps = {
    className?: string,
    isActive?: boolean,
    onClick?: () => void
    children?: React.ReactNode
    date?: number,
    disable?: boolean
}

const Cell = ({ onClick, children, className, isActive, date, disable }: CellProps) => {
    const { nowDay } = useRetty()

    return (
        <button
            disabled={disable}
            onClick={onClick}
            className={classNames("h-[60px] flex items-center justify-center select-none transition-colors flex-col cursor-pointer hover:bg-yellow-100", {
                "text-blue-500 font-bold bg-orange-100": isActive,
                "bg-green-500 !text-yellow-500 font-bold": nowDay === date,
                "hover:bg-transparent text-[#d5d5d8] select-none cursor-default": disable
            })}
        >
            {children}
            {disable ? <IconDisable /> : <IconCircle />}
        </button >
    );
};

export default Cell;