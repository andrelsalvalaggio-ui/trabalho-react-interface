import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput, } from "../ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, MoonIcon, SearchIcon, ShoppingCartIcon, StarIcon, SunIcon, } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { MenuLink } from "./MenuLink";
import { useTheme } from "../contexts/ThemeContext";
import {Popover,PopoverContent,PopoverTrigger,} from "../ui/popover";

export function Header() {
  const navigate = useNavigate();

  const { darkMode, toggleDarkMode } = useTheme();

  const [isLogado, setIsLogado] = useState(() => {
    const saved = localStorage.getItem('isLogado');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('isLogado', JSON.stringify(isLogado));
  }, [isLogado]);

  return (
    <header className="flex justify-center bg-accent backdrop-blur-xs w-full border-b border-border z-100">
      <div className="flex w-305 justify-between items-center gap-x-5 px-8 py-6">
        <div className="flex w-full items-center gap-4">

          <Logo className="cursor-pointer w-25 -mt-4 -mb-5" />

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

        <div className="flex w-full justify-center">
          <InputGroup>
            <InputGroupInput placeholder="Buscar..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex items-center w-fit justify-end gap-2">
          {isLogado ?
            <>
              <Button variant="ghost" size="icon" className="cursor-pointer" aria-label="Carrinho">
                <ShoppingCartIcon />
              </Button>
              <Button variant="ghost" size="icon" className="cursor-pointer" aria-label="Notificações">
                <BellIcon></BellIcon>
              </Button>

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
                      <BadgeCheckIcon />
                      Conta
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Dados Financeiros
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() =>
                      toggleDarkMode()
                    }>
                      {darkMode == true ?
                        <>
                          <SunIcon />
                          <span>Modo Claro</span>
                        </>
                        :
                        <>
                          <MoonIcon />
                          <span>Modo Escuro</span>
                        </>
                      }
                    </DropdownMenuItem>

                    <Popover>
                      <PopoverTrigger className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm cursor-pointer hover:bg-accent">
                        <StarIcon className="h-4 w-4" />
                        Favoritos
                      </PopoverTrigger>

                      <PopoverContent align="end" className="w-80">
                        <div className="flex flex-col gap-3">
                          <h3 className="font-semibold">Meus favoritos</h3>

                          {/* Produtos favoritados aqui */}

                          <p className="text-sm text-muted-foreground">
                            Você ainda não possui favoritos.
                          </p>
                        </div>
                      </PopoverContent>
                    </Popover>

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