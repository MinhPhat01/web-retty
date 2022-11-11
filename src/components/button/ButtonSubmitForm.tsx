type ButtonSubmitFormProps = {
    children: React.ReactNode,
    onClick?: () => void,
    className?: string,
    type?: 'submit' | 'reset' | 'button';
}

const ButtonSubmitForm = ({ children, onClick, className = "", type = "button" }: ButtonSubmitFormProps) => {
    return (
        <button type={type} className={`${className}bg-colorSecondary w-[400px] p-4 mt-[30px] flex items-center justify-center cursor-pointer select-none rounded-md hover:bg-opacity-80 transition-colors`}
            onClick={onClick}
        >
            <span className="flex items-center justify-center w-full font-bold text-white">{children}</span>
        </button>
    );
};

export default ButtonSubmitForm;