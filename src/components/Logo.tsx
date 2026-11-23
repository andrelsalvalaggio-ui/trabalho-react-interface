import { Link } from "react-router-dom";
import logoDark from "../assets/simpleShopDark.svg";
import logoWhite from "../assets/simpleShopWhite.svg";
import { useTheme } from "../contexts/ThemeContext";

export default function Logo({ link = true, setDarkMode, ...props }: React.ComponentProps<"img"> & { link?: boolean }  & { setDarkMode?: boolean }) {
    const { darkMode } = useTheme();
    const logoDarkMode = setDarkMode ?? darkMode;

    return (
        <Link
            to={link ? "/" : "/login"}
            aria-label={link ? "Ir para a página inicial" : "Ir para a página de login"}
            className="inline-flex"
        >
            <img
                src={logoDarkMode ? logoDark : logoWhite}
                alt="Logo SimpleShop"
                {...props}
            />
        </Link>
    )
}