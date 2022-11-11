import React from 'react';

type FormGroupProps = {
    children: React.ReactNode
}

const FormGroup = ({ children }: FormGroupProps) => {
    return (
        <div>
            <div className="flex flex-col mb-4 gap-y-2">{children}</div>
        </div>
    )
};

export default FormGroup;