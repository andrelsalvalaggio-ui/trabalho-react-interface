import { useNavigate } from "react-router-dom";
import logoDark from "../assets/simpleShopDark.svg";
import logoWhite from "../assets/simpleShopWhite.svg";
import { useTheme } from "../contexts/ThemeContext";

export default function Logo({link = true, ...props}: React.ComponentProps<"img"> & { link?: boolean }) {
    const navigate = useNavigate();
    const { darkMode } = useTheme();

    return (
        <img
            src={darkMode ? logoDark : logoWhite}
            alt="Logo SimpleShop"
            onClick={() => navigate(link ? "/inicio" : "/")}
            {...props}
        />
    )
}