import { useEffect, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { DesktopHeader } from "./DesktopHeader";
import { MobileHeader } from "./MobileHeader";

export function Header() {
  const navigate = useNavigate();
  const { darkMode, toggleDarkMode } = useTheme();
  const [pesquisa, setPesquisa] = useState("");
  const [isLogado, setIsLogado] = useState(() => {
    const saved = localStorage.getItem("isLogado");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLogado", JSON.stringify(isLogado));
  }, [isLogado]);

  function pesquisarProduto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const termo = pesquisa.trim();
    if (!termo) return;

    navigate(`/pesquisa?q=${encodeURIComponent(termo)}`);
  }

  function navegarPara(path: string) {
    navigate(path);
  }

  const props = {
    isLogado,
    setIsLogado,
    pesquisa,
    setPesquisa,
    onSearch: pesquisarProduto,
    onNavigate: navegarPara,
    darkMode,
    toggleDarkMode,
  };

  return (
    <>
      <DesktopHeader {...props} />
      <MobileHeader {...props} />
    </>
  );
}
