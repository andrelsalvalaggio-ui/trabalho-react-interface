
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../ui/card";
import { getProducts, type ManagedProduct } from "../../data/products";

function formatarPreco(preco: string | number): string {
    const valor = Number(String(preco).replace(",", "."));
    return Number.isFinite(valor)
        ? valor.toFixed(2).replace(".", ",")
        : String(preco);
}

export default function Pesquisa() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const termo = searchParams.get("q") || "";

    const produtos = useMemo(() => getProducts(), []);

    const resultados = produtos.filter((produto) => {
        const pesquisa = termo.trim().toLowerCase();

        if (!pesquisa) return false;

        return [
            produto.title,
            produto.marca,
            produto.description,
            produto.categoria,
        ].some((campo) => campo?.toLowerCase().includes(pesquisa));
    });

    function abrirProduto(produto: ManagedProduct) {
        localStorage.setItem("selectedProduct", JSON.stringify(produto));
        localStorage.setItem("meuAnuncio", JSON.stringify(produto));
        navigate("/produto");
    }

    return (
        <>
            <Header />

            <main className="mx-auto min-h-[85vh] w-full max-w-305 px-6 py-10">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
                    Resultados da pesquisa
                </h1>

                <p className="mt-2 text-muted-foreground">
                    Resultados para:{" "}
                    <span className="font-medium text-foreground">
                        "{termo}"
                    </span>
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                    {resultados.length}{" "}
                    {resultados.length === 1
                        ? "produto encontrado"
                        : "produtos encontrados"}
                </p>

                {resultados.length > 0 ? (
                    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {resultados.map((produto) => (
                            <Card
                                key={produto.id}
                                className="cursor-pointer overflow-hidden transition-transform hover:-translate-y-1"
                                onClick={() => abrirProduto(produto)}
                            >
                                <div className="flex h-56 items-center justify-center bg-muted/30 p-4">
                                    <img
                                        src={produto.image}
                                        alt={produto.title}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                <CardContent className="flex flex-col gap-2 p-4">
                                    <h2 className="line-clamp-2 font-medium">
                                        {produto.title}
                                    </h2>

                                    {produto.marca && (
                                        <p className="text-sm text-muted-foreground">
                                            {produto.marca}
                                        </p>
                                    )}

                                    <p className="text-xl font-bold text-primary">
                                        R$ {formatarPreco(produto.price)}
                                    </p>

                                    {produto.categoria && (
                                        <p className="text-xs text-muted-foreground">
                                            {produto.categoria}
                                        </p>
                                    )}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                ) : (
                    <div className="mt-12 flex flex-col items-center justify-center rounded-xl border border-dashed p-12 text-center">
                        <h2 className="text-lg font-semibold">
                            Nenhum produto encontrado
                        </h2>

                        <p className="mt-2 text-sm text-muted-foreground">
                            Não encontramos produtos para "{termo}".
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                            Verifique o termo digitado ou tente outra pesquisa.
                        </p>
                    </div>
                )}
            </main>

            <Footer />
        </>
    );
}
