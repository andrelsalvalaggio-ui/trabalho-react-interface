
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "../../ui/button.tsx";
import { Label } from "../../ui/label.tsx";
import { Input } from "../../ui/input.tsx";
import { Header } from "../../components/Header.tsx";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card.tsx";
import PaginaInicial from "../Inicio/page.tsx";
import google from "../../assets/google.svg";
import { useEffect, useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { WavesBG } from "../../components/Wave.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<PaginaInicial />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLogado(true)
    navigate("/inicio");
  }

  const [isLogado, setIsLogado] = useState(() => {
      const saved = localStorage.getItem('isLogado');
      return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
      localStorage.setItem('isLogado', JSON.stringify(isLogado));
  }, [isLogado]);

  return (
    <>
      <Header />

      <div className="flex h-[80vh] w-full max-h-screen items-center justify-center overflow-hidden">

        <div className={`fixed w-[2250px] 2xl:w-[120%] opacity-50 top-0 -z-1`}>
            <WavesBG/>
        </div>

        <Card className="w-120">
          <CardHeader>
            <CardTitle>Entrar</CardTitle>

            <CardDescription>
              Insira seu usuário/email abaixo para acessar sua conta
            </CardDescription>

            <CardAction>
              <Button variant="link" className={"cursor-pointer"}>Criar Conta</Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form id="login-form" onSubmit={handleLogin}>
              <div className="flex flex-col gap-6">

                <div className="grid gap-2">
                  <Label htmlFor="email-spacing">
                    Usuário/Email
                  </Label>

                  <Input
                    id="email-spacing"
                    type="text"
                    placeholder="Usuário ou email"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-spacing">
                      Senha
                    </Label>

                    <a
                      href="#"
                      className="ml-auto inline-block text-primary text-sm underline-offset-4"
                    >
                      Dificuldade no acesso?
                    </a>
                  </div>

                  <div className="relative">
                    <Input
                      id="password-spacing"
                      type={mostrarSenha ? "text" : "password"}
                      required
                      className="pr-10"
                    />

                    <button
                      type="button"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={
                        mostrarSenha
                          ? "Esconder senha"
                          : "Mostrar senha"
                      }
                    >
                      {mostrarSenha ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="lembrar-senha"
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer"
                  />

                  <Label
                    htmlFor="lembrar-senha"
                    className="cursor-pointer font-normal"
                  >
                    Lembrar senha
                  </Label>
                </div>

              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button
              type="submit"
              form="login-form"
              className="w-full"
            >
              Continuar
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
            >
              <img
                src={google}
                alt="Google"
                className="h-4 w-4"
              />
              Entrar com o Google
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;
