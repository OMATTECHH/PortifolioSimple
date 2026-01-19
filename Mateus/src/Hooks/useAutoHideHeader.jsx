import { useEffect, useRef, useState } from "react";

export function useAutoHideHeader(delay = 200) {
    
    const [visible, setVisible] = useState(true);
    const timeoutRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            // 👻 Esconde enquanto está rolando
            setVisible(false);

            // 🧹 Limpa o timer anterior
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }

            // ⏱️ Quando parar de rolar, mostra de novo
            timeoutRef.current = setTimeout(() => {
                setVisible(true);
            }, delay);
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [delay]);

    return visible;
}
