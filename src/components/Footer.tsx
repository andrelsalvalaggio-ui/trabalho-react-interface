import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto max-w-305 flex flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row">
                <div className="flex items-center gap-2">
                    <Logo className="cursor-pointer w-[160px] h-auto object-contain shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground">
                    Trabalho desenvolvido por André Salvalaggio, Caio Radtke e João Cardoso.
                </p>

                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} SimpleShop. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}