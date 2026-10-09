import { Button } from "../ui/button";

export function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="flex w-full items-center justify-between px-8 py-6">
        <div>
          <h1>LifeShop</h1>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="ghost">Início</Button>

          <Button variant="ghost">Contato</Button>

          <Button variant="ghost">Sobre nós</Button>

        </div>
      </div>
    </header>
  );
}