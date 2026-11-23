import { Link } from "react-router-dom";
import { categorias } from "../data/products";
import Logo from "./Logo";

export default function Footer() {
    return (
        <footer className="border-t border-border bg-muted/30">
            <div className="container mx-auto max-w-305 px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
                    <div className="max-w-sm">
                        <Logo
                            className="w-40 h-auto object-contain"
                            aria-label="Ir para a página inicial"
                        />
                        <p className="mt-4 text-sm leading-6 text-muted-foreground">
                            Compre, venda e encontre produtos incríveis em um só lugar.
                            A SimpleShop aproxima compradores e vendedores de forma simples e segura.
                        </p>
                    </div>

                    <nav aria-label="Mapa do site">
                        <h2 className="mb-4 text-sm font-semibold text-foreground">Navegue</h2>
                        <ul className="space-y-3 text-sm">
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/inicio">Início</Link></li>
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/pesquisa">Produtos</Link></li>
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/carrinho">Meu carrinho</Link></li>
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/meus-anuncios">Meus anúncios</Link></li>
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/vender">Anunciar produto</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Categorias">
                        <h2 className="mb-4 text-sm font-semibold text-foreground">Categorias</h2>
                        <ul className="grid gap-3 text-sm md:grid-cols-1">
                            {categorias.map((categoria) => (
                                <li key={categoria}>
                                    <Link
                                        className="text-muted-foreground transition-colors hover:text-primary"
                                        to={`/pesquisa?q=${encodeURIComponent(categoria)}`}
                                    >
                                        {categoria}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <h2 className="mb-4 text-sm font-semibold text-foreground">Conta e ajuda</h2>
                        <ul className="space-y-3 text-sm">
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/">Entrar ou cadastrar</Link></li>
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/meus-anuncios">Gerenciar anúncios</Link></li>
                            <li><Link className="text-muted-foreground transition-colors hover:text-primary" to="/carrinho">Acompanhar compra</Link></li>
                            <li><a className="text-muted-foreground transition-colors hover:text-primary" href="mailto:contato@simpleshop.com">Central de contato</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
                    <p>Trabalho desenvolvido por André Salvalaggio, Caio Radtke e João Cardoso.</p>
                    <p>© {new Date().getFullYear()} SimpleShop. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    );
}