
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "../../ui/button.tsx";
import { Label } from "../../ui/label.tsx";
import { Input } from "../../ui/input.tsx";
import { Header } from "../../components/Header.tsx";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card.tsx";
import PaginaInicial from "../Inicio/page.tsx";
import Produto from "../Produto/page.tsx";
import Vender from "../Vender/page.tsx";
import google from "../../assets/google.svg";
import { useEffect, useState, type FormEvent } from "react";
import { Eye, EyeOff, Headphones, ShieldCheck, Truck } from "lucide-react";
import Pesquisa from "../Pesquisa/page.tsx";
import Carrinho from "../Carrinho/page.tsx";
import MeusAnuncios from "../MeusAnuncios/page.tsx";
import Logo from "../../components/Logo.tsx";
import Footer from "../../components/Footer.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/inicio" element={<PaginaInicial />} />
        <Route path="/produto" element={<Produto />} />
        <Route path="/vender" element={<Vender />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/meus-anuncios" element={<MeusAnuncios />} />
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

      <main className="relative isolate flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden px-4 py-8 sm:px-6 lg:py-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-10 -z-10 size-96 rounded-full bg-primary/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-96 rounded-full bg-secondary/10 blur-3xl"
        />

        <div className="grid w-full max-w-6xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl lg:min-h-147.5 lg:grid-cols-[1.05fr_0.95fr]">
          <section className="relative hidden flex-col justify-between overflow-hidden bg-linear-to-br from-primary-container via-purple-800 to-indigo-950 p-10 text-white lg:flex xl:p-14">
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-20 size-80 rounded-full border-40 border-white/10"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-36 -left-16 size-96 rounded-full bg-fuchsia-400/20 blur-3xl"
            />

            <div className="relative">
              <div className="w-60 mb-10">
                <Logo setDarkMode={true} link={false} />
              </div>
              <h1 className="max-w-lg text-4xl leading-tight font-bold xl:text-5xl">
                Tudo para deixar sua rotina mais simples.
              </h1>
              <p className="mt-5 max-w-md text-base leading-relaxed text-white/75">
                Acesse sua conta e encontre produtos escolhidos para acompanhar
                você em todos os momentos.
              </p>
            </div>

            <div className="relative grid gap-4 border-t border-white/15 pt-7 sm:grid-cols-3">
              <div className="flex items-center gap-3 text-sm text-white/85">
                <ShieldCheck className="size-5 shrink-0" aria-hidden="true" />
                Compra segura
              </div>
              <div className="flex items-center gap-3 text-sm text-white/85">
                <Truck className="size-5 shrink-0" aria-hidden="true" />
                Ofertas especiais
              </div>
              <div className="flex items-center gap-3 text-sm text-white/85">
                <Headphones className="size-5 shrink-0" aria-hidden="true" />
                Feito para você
              </div>
            </div>
          </section>

          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12 ">
            <Card className="w-full max-w-md gap-0 border-none! bg-transparent py-0 shadow-none ring-0">
              <CardHeader className="px-0 pb-7">
                <CardTitle className="text-3xl font-bold">Seja Bem Vindo!</CardTitle>
                <CardDescription className="text-base">
                  Entre na sua conta para continuar.
                </CardDescription>

                <CardAction className="self-center">
                  <Button variant="link" className="cursor-pointer px-0">
                    Criar conta
                  </Button>
                </CardAction>
              </CardHeader>

              <CardContent className="px-0">
                <form id="login-form" onSubmit={handleLogin} noValidate>
                  <div className="flex flex-col gap-5">
                    <div className="grid gap-2">
                      <Label htmlFor="login-email">Usuário ou e-mail</Label>
                      <Input
                        id="login-email"
                        name="email"
                        type="text"
                        autoComplete="username"
                        placeholder={erroEmail ? "Este campo é obrigatório" : "Digite seu usuário ou e-mail"}
                        className={`${erroEmail ? "border-red-500 placeholder:text-red-500 animate-shake" : ""}`}
                        onChange={() => setErroEmail(false)}
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="login-password">Senha</Label>
                      <div className="relative">
                        <Input
                          id="login-password"
                          name="senha"
                          type={mostrarSenha ? "text" : "password"}
                          autoComplete="current-password"
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
                      <a
                        href="#"
                        className="text-sm text-primary underline-offset-4 hover:underline"
                      >
                        Dificuldade no acesso?
                      </a>
                    </div>
                  </div>
                </form>
              </CardContent>

              <CardFooter className="flex-col gap-3 border-0 bg-transparent px-0 pt-6">
                <Button
                  type="submit"
                  form="login-form"
                  className="h-10 w-full"
                >
                  Continuar
                </Button>

                <div className="flex w-full items-center gap-3 py-1 text-xs text-muted-foreground">
                  <span className="h-px flex-1 bg-border" />
                  ou continue com
                  <span className="h-px flex-1 bg-border" />
                </div>

                <Button
                  type="button"
                  variant="outline"
                  className="h-10 w-full"
                >
                  <img
                    src={google}
                    alt=""
                    className="h-4 w-4"
                  />
                  Entrar com o Google
                </Button>
              </CardFooter>
            </Card>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
