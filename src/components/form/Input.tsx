import { Control, FieldError, FieldErrorsImpl, FieldValues, Merge, useController } from "react-hook-form";
import IconCheck from "../icons/IconCheck";
import IconXCircle from "../icons/IconXCircle";

type InputProps = {
    control: Control<FieldValues>,
    name: string,
    type?: string,
    children?: React.ReactNode,
    placeholder: string,
    error?: string | FieldError | Merge<FieldError, FieldErrorsImpl<any>>,
    onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void
}

const Input = (props: InputProps) => {
    const { control, name, type, error = "", onKeyPress, placeholder } = props
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });

    return (
        <div className="relative">
            <input
                onKeyPress={onKeyPress}
                id={name}
                autoComplete="off"
                type={type}
                className={`w-full py-4 px-3 text-sm bg-white border text-[rgba(0,_0,_0,_0.8)] rounded transition-all placeholder:text-[12px]
                ${error ? "border-red-500" : "border-gray-300"}`}
                placeholder={placeholder}
                {...field}
            />
            {error ? <IconXCircle /> : <IconCheck />}

            {error && (
                <span className="mt-2 text-sm text-red-500 pointer-events-none">
                    {error as string}
                </span>
            )}
        </div>
    );
};

export default Input;