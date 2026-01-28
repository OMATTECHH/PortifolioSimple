import { useEffect, useRef, useState } from "react";

export function useAutoHideHeader(delay = 200) {
    
    const [visible, setVisible] = useState(true)
    const timeoutRef = useRef(null);

    useEffect(() => {

        const onscroll = () => {

            setVisible(false)
    
            if(timeoutRef.current){
                clearTimeout(timeoutRef.current)
            }
    
            timeoutRef.current = setTimeout(() => {
                setVisible(true)
            }, delay);
        }

        window.addEventListener("scroll", onscroll)

        return() => {
            window.removeEventListener("scroll", onscroll)
            if(timeoutRef.current){
                clearTimeout(timeoutRef.current)
            }
        }
    },[delay])

    return {visible}
}