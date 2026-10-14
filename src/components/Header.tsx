import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger, } from "../ui/dropdown-menu";
import { InputGroup, InputGroupAddon, InputGroupInput, } from "../ui/input-group";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useNavigate } from "react-router-dom";
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, SearchIcon, ShoppingCartIcon, } from "lucide-react";
import logo from "../assets/simpleShop.svg"

interface HeaderProps {
  isLogado: boolean
}

export function Header({
  isLogado
}: HeaderProps) {
  const navigate = useNavigate();
  return (
    <header className="flex justify-center w-full border-b border-gray-200">
      <div className="flex w-305 justify-between items-center gap-x-5 px-8 py-6">
        <div className="flex w-full items-center gap-4">
          <img 
            src={logo}
            onClick={() => navigate("/inicio")} 
            className="cursor-pointer w-25 -mt-4 -mb-5"
          />

          <DropdownMenu>

            <Button onClick={() => navigate("/inicio")} variant="link" className="text-gray-700 hover:text-primary hover:bg-none">
              Início
            </Button>

            <DropdownMenuTrigger
              className="text-cyan-900"
              render={<Button variant="link" className="text-gray-700 hover:text-primary" />}
            >
              Categorias
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-80">
              <DropdownMenuGroup>
                <DropdownMenuItem className="p-2">Tecnologia</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Acessórios</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Roupas</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Calçados</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Casa e Decoração</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Beleza e Cuidados</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Esportes e Lazer</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Eletrodomésticos</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Brinquedos e Jogos</DropdownMenuItem>
                <DropdownMenuItem className="p-2">Outros</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="link" className="text-gray-700 hover:text-primary hover:bg-none">
            Ofertas
          </Button>
          <Button variant="link" className="text-gray-700 hover:text-primary hover:bg-none">
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
              <Button variant="ghost" size="icon">
                <ShoppingCartIcon />
              </Button>
              <Button variant="ghost" size= "icon">
                <BellIcon></BellIcon>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
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
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <BadgeCheckIcon />
                      Conta
                    </DropdownMenuItem>

                    <DropdownMenuItem>
                      <CreditCardIcon />
                      Dados Financeiros
                    </DropdownMenuItem>
                  </DropdownMenuGroup>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem onClick={() => navigate("/")}>
                    <LogOutIcon />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          :
            <Button variant="outline"> Entrar </Button>
          }
        </div>
      </div>
    </header>
  );
}