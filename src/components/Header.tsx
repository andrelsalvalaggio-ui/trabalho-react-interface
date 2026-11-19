
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "../ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  MoonIcon,
  SearchIcon,StarIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import Logo from "./Logo";
import { MenuLink } from "./MenuLink";
import { useTheme } from "../contexts/ThemeContext";
import { CartPopover } from "./CartPopover";

export function Header() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();

  const [pesquisa, setPesquisa] = useState("");

  const [isLogado, setIsLogado] = useState(() => {
    const saved = localStorage.getItem("isLogado");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("isLogado", JSON.stringify(isLogado));
  }, [isLogado]);

  function pesquisarProduto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const termo = pesquisa.trim();

    if (!termo) return;

    navigate(`/pesquisa?q=${encodeURIComponent(termo)}`);
  }

  return (
    <header className="flex justify-center bg-accent backdrop-blur-xs w-full border-b border-border z-100">
      <div className="flex w-305 justify-between items-center gap-x-5 px-8 py-6">
        <div className="flex w-full items-center gap-4">

          <Logo className="cursor-pointer w-[160px] h-auto object-contain shrink-0" />

          <DropdownMenu>
            <MenuLink path="/inicio">
              Início
            </MenuLink>

            <DropdownMenuTrigger>
              <MenuLink>
                Categorias
              </MenuLink>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-80">
              <DropdownMenuGroup className="*:p-3">
                <DropdownMenuItem>Tecnologia</DropdownMenuItem>
                <DropdownMenuItem>Acessórios</DropdownMenuItem>
                <DropdownMenuItem>Roupas</DropdownMenuItem>
                <DropdownMenuItem>Calçados</DropdownMenuItem>
                <DropdownMenuItem>Casa e Decoração</DropdownMenuItem>
                <DropdownMenuItem>Beleza e Cuidados</DropdownMenuItem>
                <DropdownMenuItem>Esportes e Lazer</DropdownMenuItem>
                <DropdownMenuItem>Eletrodomésticos</DropdownMenuItem>
                <DropdownMenuItem>Brinquedos e Jogos</DropdownMenuItem>
                <DropdownMenuItem>Outros</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <MenuLink path="/ofertas">
            Ofertas
          </MenuLink>

          <MenuLink path="/vender">
            Vender
          </MenuLink>

        </div>

        {/* Pesquisa */}
        <div className="flex w-full justify-center">
          <form onSubmit={pesquisarProduto} className="w-full">
            <InputGroup>
              <InputGroupInput
                placeholder="Buscar..."
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />

              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </form>
        </div>

        <div className="flex items-center w-fit justify-end gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="cursor-pointer bg-transparent"
            aria-label="Alternar tema"
            onClick={toggleDarkMode}
          >
            {darkMode
              ? <SunIcon className="size-4" aria-hidden="true" />
              : <MoonIcon className="size-4" aria-hidden="true" />
            }
          </Button>

          {isLogado ?
            <>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                aria-label="Notificações"
              >
                <BellIcon />
              </Button>

              <CartPopover />

              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Usuário"
                      className="rounded-full cursor-pointer"
                    >
                      <Avatar>
                        <AvatarImage
                          src="https://github.com/shadcn.png"
                          alt="shadcn"
                        />
                        <AvatarFallback>LR</AvatarFallback>
                      </Avatar>
                    </Button>
                  }
                />

                <DropdownMenuContent align="end" className="min-w-50">
                  <DropdownMenuGroup className="*:cursor-pointer">
                    <DropdownMenuItem>
                      <StarIcon />
                      Favoritos
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <BadgeCheckIcon />
                      Conta
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Dados Financeiros
                    </DropdownMenuItem>
                    
                    <DropdownMenuSeparator />

                    <DropdownMenuItem onClick={() => setIsLogado(false)}>
                      <LogOutIcon />
                      Sair
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
            :
            <Button variant="outline" onClick={() => navigate("/")}>
              Entrar
            </Button>
          }
        </div>
      </div>
    </header>
  );
}
