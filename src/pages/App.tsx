import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Header } from "../components/Header";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import PaginaInicial from "./paginaInicial";
import google from "../assets/google.svg";


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
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="flex h-[80vh] w-full items-center justify-center">
        <Card className="w-100">
          <CardHeader>
            <CardTitle>Login</CardTitle>

            <CardDescription>
              Insira seu usuário/email abaixo para acessar sua conta
            </CardDescription>

            <CardAction>
              <Button variant="link">Criar Conta</Button>
            </CardAction>
          </CardHeader>

          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email-spacing">Usuário/Email</Label>

                  <Input
                    id="email-spacing"
                    type="email"
                    placeholder="marcsilva2/m@example.com"
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password-spacing">Senha</Label>

                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Dificuldade no acesso?
                    </a>
                  </div>

                  <Input
                    id="password-spacing"
                    type="password"
                    required
                  />
                </div>
              </div>
            </form>
          </CardContent>

          <CardFooter className="flex-col gap-2">
            <Button
              type="button"
              className="w-full"
              onClick={() => navigate("/inicio")}
            >
              Login
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-full"
              onClick={() => navigate("/inicio")}
            >
              Login Com Google
              <img src={google} alt="Google" className="h-4 w-4" />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default App;