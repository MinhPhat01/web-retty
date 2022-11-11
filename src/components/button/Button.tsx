import { Link } from "react-router-dom";

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    className?: string,
    to?: string
    type?: 'submit' | 'reset' | 'button';
    disable?: boolean
}

const Button = ({ to = "", children, onClick, className = "", type = "button", disable }: ButtonProps) => {
    return (
        <Link to={to}>
            <button
                disabled={disable}
                type={type}
                className={`${className} bg-colorSecondary w-[400px] p-4 mt-[30px] mx-auto flex items-center justify-center cursor-pointer select-none rounded-md hover:bg-opacity-80 transition-colors`}
                onClick={onClick}
            >
                <span className="flex items-center justify-center w-full font-bold text-white">{children}</span>
            </button>
        </Link >
    );
};

export default Button;