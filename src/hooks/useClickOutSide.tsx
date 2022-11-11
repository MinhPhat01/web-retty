import { useEffect, useRef, useState } from "react";

export default function useClickOutside() {
    const [show, setShow] = useState(false);
    const nodeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleCLickOutSide = (e: Event) => {
            if (
                nodeRef.current &&
                !nodeRef.current.contains(e.target as Node)
            ) {
                setShow(false);
            }
        }
        document.addEventListener("click", handleCLickOutSide);
        return () => {
            document.removeEventListener("click", handleCLickOutSide);
        };
    }, []);
    return {
        show,
        setShow,
        nodeRef,
    };
}