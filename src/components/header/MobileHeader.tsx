import { useEffect, useState } from "react";
import {
  BadgeCheckIcon,
  BellIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  CreditCardIcon,
  LogOutIcon,
  MenuIcon,
  MoonIcon,
  SearchIcon,
  ShoppingCartIcon,
  StarIcon,
  SunIcon,
  XIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { Button } from "../../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../../ui/input-group";
import Logo from "../Logo";
import type { HeaderProps } from "./types";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/CartContext";
import { categorias } from "../../data/products";

export function MobileHeader({
  isLogado,
  setIsLogado,
  pesquisa,
  setPesquisa,
  onSearch,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);
  const [categoriasAbertas, setCategoriasAbertas] = useState(false);
  const [venderAberto, setVenderAberto] = useState(false);
  const { cart } = useCart();

  useEffect(() => {
    if (!menuAberto) return;

    document.body.style.overflow = "hidden";
    const fecharComEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuAberto(false);
    };
    document.addEventListener("keydown", fecharComEscape);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", fecharComEscape);
    };
  }, [menuAberto]);

  return (
    <>
      <header className="flex w-full justify-center border-b border-border bg-accent backdrop-blur-xs lg:hidden">
        <div className="flex w-full max-w-305 flex-wrap items-center justify-between gap-x-3 gap-y-3 px-4 py-3 sm:px-6">
          <div className="flex w-full items-center justify-between">
            <Logo className="w-[110px] shrink-0 cursor-pointer object-contain sm:w-[160px]" />
            <div className="flex items-center gap-1">
              <Button
                render={<Link to="/carrinho" />}
                variant="ghost"
                size="icon"
                className="relative cursor-pointer"
                aria-label={`Abrir carrinho (${cart.length} itens)`}
              >
                <ShoppingCartIcon className="size-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
                    {cart.length}
                  </span>
                )}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                aria-expanded={menuAberto}
                aria-controls="mobile-navigation"
                onClick={() => setMenuAberto((aberto) => !aberto)}
              >
                {menuAberto ? <XIcon className="size-5" /> : <MenuIcon className="size-5" />}
              </Button>
            </div>
          </div>
          <form onSubmit={onSearch} className="w-full">
            <InputGroup className="h-11 px-1">
              <InputGroupInput
                placeholder="Buscar produtos..."
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[1000] lg:hidden ${menuAberto ? "visible" : "invisible pointer-events-none"}`}
        aria-hidden={!menuAberto}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/55 transition-opacity duration-300 ${menuAberto ? "opacity-100" : "opacity-0"}`}
          aria-label="Fechar menu"
          tabIndex={menuAberto ? 0 : -1}
          onClick={() => setMenuAberto(false)}
        />
        <aside
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={`absolute inset-y-0 left-0 flex w-[min(21rem,88vw)] flex-col overflow-y-auto border-r border-border bg-background p-5 shadow-2xl transition-transform duration-300 ease-out ${menuAberto ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
            <Logo
              className="w-[140px] shrink-0 cursor-pointer object-contain"
            />
            <Button variant="ghost" size="icon" aria-label="Fechar menu" onClick={() => setMenuAberto(false)}>
              <XIcon className="size-5" />
            </Button>
          </div>

          <nav className="flex flex-col gap-1">
            <Button render={<Link to="/" />} variant="ghost" className="justify-start">
              Início
            </Button>
            <Button render={<Link to="/carrinho" />} variant="ghost" className="justify-start">
              Carrinho
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between"
              aria-expanded={categoriasAbertas}
              onClick={() => setCategoriasAbertas((abertas) => !abertas)}
            >
              Categorias
              {categoriasAbertas ? <ChevronDownIcon className="size-4" /> : <ChevronRightIcon className="size-4" />}
            </Button>
            {categoriasAbertas && (
              <div className="ml-4 flex flex-col gap-1 border-l border-border pl-2">
                {categorias.map((categoria) => (
                  <Button
                    key={categoria}
                    render={<Link to={`/pesquisa?q=${encodeURIComponent(categoria)}`} />}
                    variant="ghost"
                    className="justify-start text-muted-foreground"
                  >
                    {categoria}
                  </Button>
                ))}
              </div>
            )}
            <div className="my-3 border-t border-border" />
            <Button render={<Link to="/#ofertas-do-dia" />} variant="ghost" className="justify-start">
              Ofertas
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-between"
              aria-expanded={venderAberto}
              onClick={() => setVenderAberto((aberto) => !aberto)}
            >
              Vender
              {venderAberto ? <ChevronDownIcon className="size-4" /> : <ChevronRightIcon className="size-4" />}
            </Button>
            {venderAberto && (
              <div className="ml-4 flex flex-col gap-1 border-l border-border pl-2">
                <Button render={<Link to="/vender" />} variant="ghost" className="justify-start text-muted-foreground">
                  Anunciar produto
                </Button>
                <Button render={<Link to="/meus-anuncios" />} variant="ghost" className="justify-start text-muted-foreground">
                  Meus anúncios
                </Button>
              </div>
            )}
          </nav>

          <div className="mt-5 border-t border-border pt-4">
            <p className="mb-3 px-3 text-xs font-semibold tracking-wide text-muted-foreground uppercase">
              Conta e preferências
            </p>
            <div className="flex flex-col gap-1.5">
              <Button
                variant="ghost"
                className="h-10 w-full justify-start gap-3 px-3"
                onClick={toggleDarkMode}
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
                {darkMode ? "Usar tema claro" : "Usar tema escuro"}
              </Button>
              {isLogado ? (
                <>
                  <Button
                    variant="ghost"
                    className="h-10 w-full justify-start gap-3 px-3"
                    aria-label="Notificações"
                  >
                    <BellIcon />
                    Notificações
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger
                      render={
                        <Button variant="ghost" className="h-10 w-full justify-start gap-3 px-3">
                          <Avatar className="size-6">
                            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                            <AvatarFallback>LR</AvatarFallback>
                          </Avatar>
                          Minha conta
                        </Button>
                      }
                    />
                    <DropdownMenuContent align="start" className="min-w-50">
                      <DropdownMenuGroup className="*:cursor-pointer">
                        <DropdownMenuItem><StarIcon />Favoritos</DropdownMenuItem>
                        <DropdownMenuItem><BadgeCheckIcon />Conta</DropdownMenuItem>
                        <DropdownMenuItem><CreditCardIcon />Dados Financeiros</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={() => { setIsLogado(false); setMenuAberto(false); }}>
                          <LogOutIcon />Sair
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <Button render={<Link to="/login" />} variant="ghost" className="h-10 w-full justify-start gap-3 px-3">
                  Entrar
                </Button>
              )}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
