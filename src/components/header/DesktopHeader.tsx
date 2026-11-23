import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  MoonIcon,
  SearchIcon,
  StarIcon,
  SunIcon,
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
import { CartPopover } from "../CartPopover";
import Logo from "../Logo";
import { MenuLink, SubMenu } from "../MenuLink";
import type { HeaderProps } from "./types";
import { categorias } from "../../data/products";
import { Link } from "react-router-dom";

export function DesktopHeader({
  isLogado,
  setIsLogado,
  pesquisa,
  setPesquisa,
  onSearch,
  darkMode,
  toggleDarkMode,
}: HeaderProps) {
  return (
    <header className="hidden w-full justify-center border-b border-border bg-accent backdrop-blur-xs lg:flex">
      <div className="flex w-full max-w-305 items-center justify-between gap-x-5 px-8 py-6">
        <div className="flex shrink-0 items-center gap-4">
          <Logo className="w-[160px] shrink-0 cursor-pointer object-contain" />
          <nav className="flex items-center gap-2">
            <MenuLink path="/">Início</MenuLink>
            <DropdownMenu>
              <DropdownMenuTrigger render={<SubMenu>Categorias</SubMenu>} />
              <DropdownMenuContent className="w-80">
                <DropdownMenuGroup className="*:p-3">
                  {categorias.map((categoria) => (
                    <DropdownMenuItem
                      key={categoria}
                      render={<Link to={`/pesquisa?q=${encodeURIComponent(categoria)}`} />}
                      className="cursor-pointer"
                    >
                      {categoria}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
            <MenuLink path="/#ofertas-do-dia">Ofertas</MenuLink>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center" render={<SubMenu>Categorias</SubMenu>} />
              <DropdownMenuContent align="start" className="w-80">
                <DropdownMenuGroup className="*:p-3">
                  <DropdownMenuItem render={<Link to="/vender" />} className="cursor-pointer">
                    Anunciar produto
                  </DropdownMenuItem>
                  <DropdownMenuItem render={<Link to="/meus-anuncios" />} className="cursor-pointer">
                    Meus anúncios
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>

        <form onSubmit={onSearch} className="min-w-0 flex-1">
          <InputGroup>
            <InputGroupInput
              placeholder="Buscar..."
              value={pesquisa}
              onChange={(event) => setPesquisa(event.target.value)}
            />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </form>

        <div className="flex w-fit shrink-0 items-center justify-end gap-1 sm:gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer bg-transparent"
            aria-label="Alternar tema"
            onClick={toggleDarkMode}
          >
            {darkMode ? <SunIcon className="size-4" /> : <MoonIcon className="size-4" />}
          </Button>

          {isLogado ? (
            <>
              <Button variant="ghost" size="icon" className="cursor-pointer" aria-label="Notificações">
                <BellIcon />
              </Button>
              <CartPopover />
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="ghost" size="icon" aria-label="Usuário" className="cursor-pointer rounded-full">
                      <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                        <AvatarFallback>LR</AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />
                <DropdownMenuContent align="end" className="min-w-50">
                  <DropdownMenuGroup className="*:cursor-pointer *:p-2">
                    <DropdownMenuItem><StarIcon />Favoritos</DropdownMenuItem>
                    <DropdownMenuItem><BadgeCheckIcon />Conta</DropdownMenuItem>
                    <DropdownMenuItem><CreditCardIcon />Dados Financeiros</DropdownMenuItem>
                    <DropdownMenuSeparator className="p-0!" />
                    <DropdownMenuItem onClick={() => setIsLogado(false)}>
                      <LogOutIcon />Sair
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <Button render={<Link to="/login" />} variant="outline">Entrar</Button>
          )}
        </div>
      </div>
    </header>
  );
}
