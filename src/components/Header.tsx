import { Button } from "../ui/button";

export function Header() {
  return (
    <>
        <div className="w-full">
            <div className="flex p-6 ps-8 justify-between items-center max-w-6xl border-b border-b-gray-200">
                <div>
                    <h1>NomeSite</h1>
                </div>
                <div>
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
                </div>
            </div>
        </div>
    </>
  )
}