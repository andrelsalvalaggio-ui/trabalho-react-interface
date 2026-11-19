import type { FormEvent, Dispatch, SetStateAction } from "react";

export interface HeaderProps {
  isLogado: boolean;
  setIsLogado: Dispatch<SetStateAction<boolean>>;
  pesquisa: string;
  setPesquisa: Dispatch<SetStateAction<string>>;
  onSearch: (event: FormEvent<HTMLFormElement>) => void;
  onNavigate: (path: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}
