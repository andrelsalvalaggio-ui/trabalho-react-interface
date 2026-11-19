import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";

interface Anuncio {
  id?: string;
  title: string;
  marca?: string;
  description?: string;
  price: string | number;
  image: string;
}

function carregarAnuncios(): Anuncio[] {
  try {
    const saved = JSON.parse(localStorage.getItem("anuncios") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (error) {
    console.error("Não foi possível carregar os anúncios salvos.", error);
    return [];
  }
}

export default function MeusAnuncios() {
  const navigate = useNavigate();
  const [anuncios] = useState<Anuncio[]>(carregarAnuncios);

  function abrirAnuncio(anuncio: Anuncio) {
    localStorage.setItem("selectedProduct", JSON.stringify(anuncio));
    localStorage.setItem("meuAnuncio", JSON.stringify(anuncio));
    navigate("/produto");
  }

  return (
    <>
      <Header />
      <main className="mx-auto min-h-[85vh] w-full max-w-305 px-4 py-8 sm:px-6 sm:py-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Meus anúncios</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Produtos que você publicou nesta loja.
            </p>
          </div>
          <Button onClick={() => navigate("/vender")}>Anunciar produto</Button>
        </div>

        {anuncios.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {anuncios.map((anuncio, index) => (
              <Card
                key={anuncio.id || `${anuncio.title}-${index}`}
                className="cursor-pointer overflow-hidden transition-transform hover:-translate-y-1"
                onClick={() => abrirAnuncio(anuncio)}
              >
                <div className="flex h-48 items-center justify-center bg-muted/30 p-4">
                  <img
                    src={anuncio.image}
                    alt={anuncio.title}
                    className="h-full w-full object-contain"
                  />
                </div>
                <CardContent className="flex flex-col gap-2 p-4">
                  <h2 className="line-clamp-2 font-semibold">{anuncio.title}</h2>
                  {anuncio.marca && (
                    <p className="text-sm text-muted-foreground">{anuncio.marca}</p>
                  )}
                  {anuncio.description && (
                    <p className="line-clamp-2 text-sm text-muted-foreground">{anuncio.description}</p>
                  )}
                  <p className="text-lg font-bold">R$ {anuncio.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-xl border border-dashed p-8 text-center sm:p-12">
            <h2 className="text-lg font-semibold">Você ainda não publicou anúncios</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Seus produtos anunciados aparecerão aqui.
            </p>
            <Button className="mt-5" onClick={() => navigate("/vender")}>
              Anunciar produto
            </Button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
