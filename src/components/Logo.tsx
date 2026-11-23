import { Link } from "react-router-dom";
import logoDark from "../assets/simpleShopDark.svg";
import logoWhite from "../assets/simpleShopWhite.svg";
import { useTheme } from "../contexts/ThemeContext";

export default function Logo({ link = true, setDarkMode = undefined, ...props }: React.ComponentProps<"img"> & { link?: boolean }  & { setDarkMode?: boolean }) {
    if (setDarkMode === undefined) {
        const { darkMode } = useTheme();
        setDarkMode = darkMode;
    }

    return (
        <Link to={link ? "/inicio" : "/"} aria-label="Ir para a página inicial" className="inline-flex">
            <img
                src={setDarkMode ? logoDark : logoWhite}
                alt="Logo SimpleShop"
                {...props}
            />
        </Link>
    )
}