type ListCalendarProps = {
    children: React.ReactNode,
    className?: string,
    show: boolean
}

const ListCalendar = ({ children, className, show }: ListCalendarProps) => {
    return (
        <>
            {show && (
                <div
                    className={`absolute left-0 w-full bg-white shadow-md top-[60px] z-[50] transition-all list-calendar border ${className}`}>
                    {children}
                </div>
            )}
        </>
    );
};

export default ListCalendar;