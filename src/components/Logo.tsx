import { useNavigate } from "react-router-dom";
import logoDark from "../assets/simpleShopDark.svg";
import logoWhite from "../assets/simpleShopWhite.svg";
import { useEffect, useState } from "react";

export default function Logo({...props}: React.ComponentProps<"img">) {
    const navigate = useNavigate();

    const [darkMode] = useState(() => {
        const saved = localStorage.getItem('darkMode');
        return saved !== "false";
    });
    
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(darkMode));
        document.documentElement.classList.toggle("dark", darkMode);
        document.documentElement.classList.toggle("light", !darkMode);
    }, [darkMode]);

    return (
        <img
            src={darkMode ? logoDark : logoWhite}
            alt="Logo SimpleShop"
            onClick={() => navigate("/inicio")}
            {...props}
        />
    )
}