import { format } from "date-fns";
import { createContext, useContext, useState } from "react";

type ContextType = {
    titleCourse: string,
    setTitleCourse: (t: string) => void,
    imgCourse: string
    setImgCourse: (t: string) => void,
    priceCourse: number
    setPriceCrouse: (t: number) => void,
    titleSeat: string,
    setTitleSeat: (t: string) => void,
    imgSeat: string
    setImgSeat: (t: string) => void,
    amountPeople: string,
    setAmountPeople: (t: string) => void
    timeBooking: string,
    setTimeBooking: (t: string) => void
    weekName: string,
    setWeekName: (t: string) => void
    fullDay: string,
    setFullDay: (t: string) => void
    nowDay: number
    setNowDay: (s: number) => void
}
const defaultState = {
    titleCourse: "",
    setTitleCourse: () => { },
    imgCourse: "",
    setImgCourse: () => { },
    priceCourse: 0,
    setPriceCrouse: () => { },
    titleSeat: "",
    setTitleSeat: () => { },
    imgSeat: "",
    setImgSeat: () => { },
    amountPeople: "",
    setAmountPeople: () => { },
    timeBooking: "",
    setTimeBooking: () => { },
    weekName: "",
    setWeekName: () => { },
    fullDay: "",
    setFullDay: () => { },
    nowDay: 0,
    setNowDay: () => { }
}

type PropsContext = {
    children: React.ReactNode
}

const RettyContext = createContext<ContextType>(defaultState)

function RettyProvider(props: PropsContext) {
    const [titleCourse, setTitleCourse] = useState("")
    const [imgCourse, setImgCourse] = useState("")
    const [priceCourse, setPriceCrouse] = useState(0)
    const [titleSeat, setTitleSeat] = useState("")
    const [imgSeat, setImgSeat] = useState("")
    const [amountPeople, setAmountPeople] = useState("")
    const [timeBooking, setTimeBooking] = useState("")
    const [weekName, setWeekName] = useState("")
    const currentDate = new Date()
    const infoDay = format(currentDate, "dd LLLL yyyy")
    const today = format(currentDate, ("dd"))
    const [fullDay, setFullDay] = useState(infoDay)
    const [nowDay, setNowDay] = useState(Number(today))
    const values = {
        titleCourse,
        setTitleCourse,
        imgCourse,
        setImgCourse,
        priceCourse,
        setPriceCrouse,
        titleSeat,
        setTitleSeat,
        imgSeat,
        setImgSeat,
        amountPeople,
        setAmountPeople,
        timeBooking,
        setTimeBooking,
        weekName,
        setWeekName,
        fullDay,
        setFullDay,
        nowDay,
        setNowDay
    }
    
    return <RettyContext.Provider value={values} {...props}></RettyContext.Provider>
}

function useRetty() {
    const context = useContext(RettyContext);
    if (typeof context === "undefined")
        throw new Error("useRetty must be used within RettyProvider")

    return context
}

export { RettyProvider, useRetty }