import { useForm } from "react-hook-form";
import FormGroup from "../common/FormGroup";
import Input from "./Input";
import Label from "./Label";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../button/Button";
import ButtonSubmitForm from "../button/ButtonSubmitForm";
import "yup-phone-lite";
import { useRetty } from "../../context/rettyContext";
import { format } from "date-fns";

type FormProps = {
    handleShowHomePage: () => void
    handleShowBookDone: () => void
}
const Form = ({ handleShowHomePage, handleShowBookDone }: FormProps) => {
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        name: yup.string().required("Please enter your name"),
        email: yup.string().email("Please enter valid email address").required("Please enter your email address"),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid')
    })
    const { control, handleSubmit, formState: { errors, isValid } } = useForm({
        mode: "onChange",
        resolver: yupResolver(schema)
    })
    const {
        setImgCourse,
        setAmountPeople,
        setFullDay,
        setImgSeat,
        setPriceCrouse,
        setTimeBooking,
        setTitleCourse,
        setTitleSeat,
        setWeekName
    } = useRetty()
    const currentDate = new Date()
    const infoDay = format(currentDate, "dd LLLL yyyy")
    const handleSubmitForm = (values: {}) => {
        if (!isValid) return;
        console.log(values);
        setImgCourse("")
        setAmountPeople("")
        setFullDay(infoDay)
        setImgSeat("")
        setPriceCrouse(0)
        setTimeBooking("")
        setTitleCourse("")
        setTitleSeat("")
        setWeekName("")
        handleShowBookDone()
    }
    const blockEInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    }
    const handleEvent = (event: React.KeyboardEvent<HTMLInputElement>) => {
        blockEInput(event)
    }

    return (
        <>
            <div className='px-[55px] pt-8 pb-4 mt-5 bg-white overflow-hidden'>
                <form onSubmit={handleSubmit(handleSubmitForm)}>
                    <FormGroup>
                        <Label htmlFor="name" sub="(Please input in Katakana)">name</Label>
                        <Input
                            control={control}
                            name="name"
                            placeholder="Please enter your name"
                            type="name"
                            error={errors.name?.message}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phone" sub="(Enter 11 digits without hyphens)">cell phone</Label>
                        <Input
                            onKeyPress={handleEvent}
                            control={control}
                            name="phone"
                            placeholder="Please enter your phone number"
                            type="number"
                            error={errors.phone?.message}
                        ></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="email">email address</Label>
                        <Input
                            control={control}
                            name="email"
                            placeholder="Please enter your email address"
                            type="email"
                            error={errors.email?.message}
                        ></Input>
                    </FormGroup>
                    <div className="flex flex-col mb-4">
                        <h2 className="text-[#ff5916] text-[14px]">Please be careful not to enter the wrong email address</h2>
                        <p className="text-[14px]">You may not receive the contact email due to the reception refusal settings. Please make settings so that you can receive email</p>
                        <p className="text-[14px]">s from</p>
                        <p className="text-[14px]">reserve@retty.me .</p>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-[#4B5264] text-[16px]">Is this your first visit? <span className="text-[#ffab39] text-sm font-normal">Any</span></h2>
                        <div className="flex mt-5 border border-gray-300 rounded-md h-[60px] items-center px-2">
                            <div className="w-[445px] radio">
                                <input type="radio" defaultChecked={true} id="yes" name="firstVisit" />
                                <div className="check"></div>
                                <label className="label" htmlFor="yes">Yes</label>
                            </div>
                            <div className="border-gray-300 w-[1px] h-full border-r-2"></div>
                            <div className="w-[405px] radio">
                                <input type="radio" id="no" name="firstVisit" />
                                <div className="check"></div>
                                <label className="label" htmlFor="no">No</label>
                            </div>
                        </div>
                    </div>
                    <div className="mt-[10px] flex gap-x-5 items-center justify-center relative ">
                        <Button onClick={handleShowHomePage} className="!bg-white h-[76px] border border-gray-300">{<span className="text-[#8c8c93] text-[16px]">Return to the previous screen</span>}</Button>
                        <ButtonSubmitForm type="submit">
                            {
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-sm">I agree to them terms and privacy policy</span>
                                    <span className="text-[16px]">Confirm with this reservation content</span>
                                </div>
                            }
                        </ButtonSubmitForm>
                    </div>
                </form >
            </div>
        </>
    );
};

export default Form;