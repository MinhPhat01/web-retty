type DropDownProps = {
    children: React.ReactNode
}

const Dropdown = ({ children }: DropDownProps) => {
    return (
            <div className="relative inline-block w-full">{children}</div>
    );
};

export default Dropdown;