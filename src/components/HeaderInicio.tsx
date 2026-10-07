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
  ShoppingCartIcon,
} from "lucide-react";

export function HeaderInicio() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center px-8 py-6">
        <div className="flex items-center gap-4">
          <h1>LifeShop</h1>

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
        </div>

        <div className="flex justify-center">
          <InputGroup className="w-96">
            <InputGroupInput placeholder="Buscar..." />
            <InputGroupAddon>
              <SearchIcon />
            </InputGroupAddon>
          </InputGroup>
        </div>

        <div className="flex items-center justify-end gap-2">
          <Button variant="ghost">Início</Button>

          <Button variant="ghost">Contato</Button>

          <Button variant="ghost">Sobre nós</Button>

          <Button variant="ghost">Criar Conta</Button>

          <Button variant="ghost" size="icon">
            <ShoppingCartIcon />
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
    </header>
  );
}