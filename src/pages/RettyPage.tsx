import { Fragment, useEffect, useState } from "react"
import ConfirmPage from "./ConfirmPage";
import MainRetty from "../components/mainRetty/MainRetty";
import BookDone from "./BookDone";

const RettyPage = () => {
    useEffect(() => {
        document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    }, [])
    const [hideHomePage, setHideHomePage] = useState(true)
    const [hideConfirm, setHideConfirm] = useState(false)
    const [hideBookDone, setHideBookDone] = useState(false)
    const handleShowConfirm = () => {
        setHideHomePage(false)
        setHideConfirm(true)
        setHideBookDone(false)
    }
    const handleShowBookDone = () => {
        setHideHomePage(false)
        setHideConfirm(false)
        setHideBookDone(true)

    }
    const handleShowHomePage = () => {
        setHideHomePage(true)
        setHideConfirm(false)
        setHideBookDone(false)
    }
    
    return (
        <Fragment>
            <MainRetty hideHomePage={hideHomePage} handleShowConfirm={handleShowConfirm} handleShowBookDone={handleShowBookDone} />
            <ConfirmPage hideConfirm={hideConfirm} handleShowBookDone={handleShowBookDone} handleShowHomePage={handleShowHomePage} />
            <BookDone hideBookDone={hideBookDone} handleShowHomePage={handleShowHomePage} handleShowConfirm={handleShowConfirm} />
        </Fragment>
    );
};

export default RettyPage;