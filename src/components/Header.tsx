import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput, } from "../ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, SearchIcon, ShoppingCartIcon, } from "lucide-react";
import logo from "../assets/simpleShop.svg"
import { useEffect, useState } from "react";

interface HeaderProps {
  isLogado: boolean
}

export function Header() {
  const navigate = useNavigate();
  const [isLogado, setIsLogado] = useState(() => {
      const saved = localStorage.getItem('isLogado');
      return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
      localStorage.setItem('isLogado', JSON.stringify(isLogado));
  }, [isLogado]);

  return (
    <header className="flex justify-center bg-[#ffffff60] backdrop-blur-xs w-full border-b border-gray-200 z-100">
      <div className="flex w-305 justify-between items-center gap-x-5 px-8 py-6">
        <div className="flex w-full items-center gap-4">
          <img 
            src={logo}
            onClick={() => navigate("/inicio")} 
            className="cursor-pointer w-25 -mt-4 -mb-5"
          />

          <DropdownMenu>

            <Button onClick={() => navigate("/inicio")} variant="link" className="text-cyan-900 underline cursor-pointer hover:text-primary hover:bg-none">
              Início
            </Button>

            <DropdownMenuTrigger
              render={<Button variant="link" className="text-gray-700 hover:text-primary cursor-pointer" />}
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

          <Button variant="link" className="text-gray-700 cursor-pointer hover:text-primary hover:bg-none">
            Ofertas
          </Button>
          <Button variant="link" className="text-gray-700 cursor-pointer hover:text-primary hover:bg-none">
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
              <Button variant="ghost" size="icon" className="cursor-pointer">
                <ShoppingCartIcon />
              </Button>
              <Button variant="ghost" size= "icon" className="cursor-pointer">
                <BellIcon></BellIcon>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
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
            <Button variant="outline" onClick={() => setIsLogado(true)}>
              Entrar
            </Button>
          }
        </div>
      </div>
    </header>
  );
}