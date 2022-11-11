import React from 'react';
type LabelProps = {
    children?: React.ReactNode,
    htmlFor: string,
    className?: string
    sub?: string
}

const Label = (props: LabelProps) => {
    const { children, htmlFor = "", className = "", sub = "" } = props

    return (
        <label
            className={`text-[18px] inline-block cursor-pointer font-bold text-[#4B5264] ${className}`}
            htmlFor={htmlFor}>
            {children} <span className='text-[#ff5615] font-medium text-[16px]'>Mandatory</span> <span className='text-sm font-normal'>{sub}</span>
        </label>
    );
};

export default Label;