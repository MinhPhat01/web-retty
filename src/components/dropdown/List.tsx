type ListProps = {
    children: React.ReactNode,
    className?: string,
    show: boolean
}

const List = ({ children, className, show }: ListProps) => {
    return (
        <span >
            {show && (
                <div className={`absolute left-0 w-full bg-white shadow-md top-full z-[50] transition-all rounded-md ${className}`}>
                    {children}
                </div>
            )}
        </span >
    );
};

export default List;