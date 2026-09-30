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
import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  SearchIcon,
} from "lucide-react";

export function Header() {
  return (
    <div className="w-full">
      <div className="flex max-w-6xl items-center justify-between border-b border-gray-200 p-6 ps-8">
        <div>
          <h1>NomeSite</h1>
        </div>

        <div className="flex items-center gap-2">
          {/* Categorias */}
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button variant="outline" />}>
              Categorias
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuGroup>
                <DropdownMenuItem>Tecnologia</DropdownMenuItem>
                <DropdownMenuItem>Acessórios</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Navegação */}
          <Button variant="ghost">
            Início
          </Button>

          <Button variant="ghost">
            Contato
          </Button>

          <Button variant="ghost">
            Sobre nós
          </Button>

          <Button variant="ghost">
            Criar Conta
          </Button>

          {/* Pesquisa */}
          <InputGroup className="w-48">
            <InputGroupInput placeholder="Buscar..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>

          {/* Avatar */}
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

            <DropdownMenuContent align="end">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <BadgeCheckIcon />
                  Account
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <CreditCardIcon />
                  Billing
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <BellIcon />
                  Notifications
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <LogOutIcon />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}