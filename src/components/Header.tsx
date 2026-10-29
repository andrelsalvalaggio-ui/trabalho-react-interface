import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput, } from "../ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, MoonIcon, SearchIcon, ShoppingCartIcon, SunIcon, } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export function Header() {
  const navigate = useNavigate();
  const [isLogado, setIsLogado] = useState(() => {
      const saved = localStorage.getItem('isLogado');
      return saved ? JSON.parse(saved) : null;
  });

  const [darkMode, setDarkMode] = useState(() => {
      const saved = localStorage.getItem('darkMode');
      return saved !== "false";
  });

  useEffect(() => {
      localStorage.setItem('isLogado', JSON.stringify(isLogado));
  }, [isLogado]);

  useEffect(() => {
      localStorage.setItem('darkMode', JSON.stringify(darkMode));
      document.documentElement.classList.toggle("dark", darkMode);
      document.documentElement.classList.toggle("light", !darkMode);
  }, [darkMode]);

  return (
    <header className="flex justify-center bg-accent backdrop-blur-xs w-full border-b border-border z-100">
      <div className="flex w-305 justify-between items-center gap-x-5 px-8 py-6">
        <div className="flex w-full items-center gap-4">

          <Logo className="cursor-pointer w-25 -mt-4 -mb-5" />

          <DropdownMenu>

            <Button onClick={() => navigate("/inicio")} variant="link" className="text-magenta underline cursor-pointer hover:text-primary hover:bg-none">
              Início
            </Button>

            <DropdownMenuTrigger
              render={<Button variant="link" className="text-secondary-foreground hover:text-primary cursor-pointer" />}
            >
              Categorias
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

          <Button variant="link" className="text-secondary-foreground cursor-pointer hover:text-primary hover:bg-none">
            Ofertas
          </Button>
          <Button variant="link" className="text-secondary-foreground cursor-pointer hover:text-primary hover:bg-none">
            Vender
          </Button>

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
              <Button variant="ghost" size= "icon" className="cursor-pointer" aria-label="Notificações">
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
                      setDarkMode(!darkMode)
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