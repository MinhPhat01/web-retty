import React from 'react';

type OptionProps = {
    onClick?: () => void
    children: React.ReactNode
    setShow: (isShow: boolean) => void
}

const Option = (props: OptionProps) => {
    const { onClick, children, setShow } = props
    const handleClick = () => () => {
        onClick && onClick();
        setShow(false);
    }

    return (
        <div
            className="flex items-center justify-between px-5 py-4 text-[16px] transition-all cursor-pointer text-textColor hover:bg-gray-200 font-medium"
            onClick={handleClick()}
        >
            {children}
        </div>
    );
};

export default Option;