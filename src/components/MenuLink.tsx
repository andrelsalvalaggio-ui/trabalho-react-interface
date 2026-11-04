import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";

export function MenuLink({path, ...props}: React.ComponentProps<"button"> & { path?: string }) {
    const navigate = useNavigate();
    const location = useLocation();
    const pathname = location.pathname; // e.g., "/dashboard"
    return (
        <Button onClick={path ? () => navigate(path) : () => navigate} variant="link" 
        className={`text-foreground cursor-pointer hover:text-primary hover:no-underline
            ${path === pathname && 'text-primary underline'}
            `}
        {...props} />
    )
}