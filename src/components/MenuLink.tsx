import { Link, useLocation } from "react-router-dom";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";

export function MenuLink({ path, ...props }: React.ComponentProps<"button"> & { path?: string }) {
    const location = useLocation();
    const destination = path ?? location.pathname;
    const ativo = path === location.pathname;

    return (
        <Button
            render={<Link to={destination} />}
            variant="link"
            className={`text-foreground cursor-pointer hover:text-primary hover:no-underline ${ativo ? "text-primary underline" : ""}`}
            {...props}
        />
    );
}

export function SubMenu({ children, ...props }: React.ComponentProps<"button">) {
    return (
        <Button
            variant="ghost"
            className="-mr-2 cursor-pointer text-foreground hover:text-primary hover:no-underline"
            {...props}
        >
            {children}
            <ChevronDown size={20} />
        </Button>
    );
}
