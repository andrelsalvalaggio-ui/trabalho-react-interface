
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
import Produto from "../Produto/page.tsx";
import Vender from "../Vender/page.tsx";
import google from "../../assets/google.svg";
import { useEffect, useState, type FormEvent } from "react";
import { Eye, EyeOff } from "lucide-react";
import { WavesBG } from "../../components/Wave.tsx";
import Pesquisa from "../Pesquisa/page.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<PaginaInicial />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
      </Routes>
    </BrowserRouter>
  );
}

function Login() {
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();
  const [erroEmail, setErroEmail] = useState(false);
  const [erroSenha, setErroSenha] = useState(false);

  const [isLogado, setIsLogado] = useState(() => {
    const saved = localStorage.getItem('isLogado');
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem('isLogado', JSON.stringify(isLogado));
  }, [isLogado]);

  const handleLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email")?.toString().trim();
    const senha = formData.get("senha")?.toString().trim();

    setErroEmail(!email);
    setErroSenha(!senha);

    if (!email || !senha) return;

    setIsLogado(true);
    navigate("/inicio");
  };

  return (
    <>
      <Header />

      <div className="flex h-[80vh] w-full max-h-screen items-center justify-center overflow-hidden">

        <div className={`fixed w-[2850px] 2xl:w-[120%] opacity-50 top-0 -z-1`}>
          <WavesBG />
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
            <form id="login-form" onSubmit={handleLogin} noValidate>
              <div className="flex flex-col gap-6">

                <div className="grid gap-2">
                  <Label htmlFor="email-spacing">
                    Usuário/Email
                  </Label>

                  <Input
                    id="email-spacing"
                    name="email"
                    type="text"
                    placeholder={erroEmail ? "Este campo é obrigatório" : "Digite seu usuário ou e-mail"}
                    className={`${erroEmail ? "border-red-500 placeholder:text-red-500 animate-shake" : ""}`}
                    onChange={() => setErroEmail(false)}
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-spacing">
                      Senha
                    </Label>
                  </div>

                  <div className="relative">
                    <Input
                      id="password-spacing"
                      name="senha"
                      type={mostrarSenha ? "text" : "password"}
                      placeholder={erroSenha ? "Este campo é obrigatório" : "Digite sua senha"}
                      className={`pr-10 ${erroSenha
                          ? "border-red-500 placeholder:text-red-500 animate-shake"
                          : ""
                        }`}
                      onChange={() => setErroSenha(false)}
                    />

                    <button
                      type="button"
                      onClick={() => setMostrarSenha(!mostrarSenha)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      aria-label={mostrarSenha ? "Esconder senha" : "Mostrar senha"}
                    >
                      {mostrarSenha ? (
                        <EyeOff className="h-4 w-4" />
                      ) : (
                        <Eye className="h-4 w-4" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      className="ml-auto text-primary text-sm underline-offset-4 hover:underline"
                    >
                      Dificuldade no acesso?
                    </a>
                  </div>
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
