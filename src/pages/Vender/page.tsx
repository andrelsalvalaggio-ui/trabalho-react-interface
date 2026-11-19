
import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  ImagePlus,
  Package,
  BadgeCheck,
  Trash2,
  Plus,
} from "lucide-react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../ui/card";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Textarea } from "../../ui/textarea";
import { useNavigate } from "react-router-dom";

interface Detail {
  titulo: string;
  descricao: string;
}

export default function Vender() {
  const navigate = useNavigate();

  const [imagem, setImagem] = useState<string | null>(null);
  const [nome, setNome] = useState("");
  const [marca, setMarca] = useState("");
  const [descricao, setDescricao] = useState("");
  const [preco, setPreco] = useState("");
  const [precoAntigo, setPrecoAntigo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [estoque, setEstoque] = useState("1");

  const [detalhes, setDetalhes] = useState<Detail[]>([
    { titulo: "", descricao: "" },
    { titulo: "", descricao: "" },
  ]);

  const [erro, setErro] = useState(false);

  function handleImagem(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (file) {
      setImagem(URL.createObjectURL(file));
    }
  }

  function atualizarDetalhe(
    index: number,
    campo: keyof Detail,
    valor: string
  ) {
    setDetalhes((atual) =>
      atual.map((item, i) =>
        i === index ? { ...item, [campo]: valor } : item
      )
    );
  }

  function adicionarDetalhe() {
    setDetalhes((atual) => [
      ...atual,
      { titulo: "", descricao: "" },
    ]);
  }

  function removerDetalhe(index: number) {
    setDetalhes((atual) => atual.filter((_, i) => i !== index));
  }

  function publicarProduto(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!nome.trim() || !descricao.trim() || !preco.trim() || !imagem) {
      setErro(true);
      return;
    }

    const produto = {
      title: nome,
      marca,
      description: descricao,
      price: preco,
      oldPrice: precoAntigo,
      image: imagem,
      avaliacao: 0,
      discount: "",
      categoria,
      estoque: Number(estoque),
      details: {
        Titulo1: detalhes[0]?.titulo,
        Desc1: detalhes[0]?.descricao,
        Titulo2: detalhes[1]?.titulo,
        Desc2: detalhes[1]?.descricao,
        Titulo3: detalhes[2]?.titulo,
        Desc3: detalhes[2]?.descricao,
        Titulo4: detalhes[3]?.titulo,
        Desc4: detalhes[3]?.descricao,
      },
    };

    localStorage.setItem("selectedProduct", JSON.stringify(produto));
    localStorage.setItem("meuAnuncio", JSON.stringify(produto));

    navigate("/produto");
  }

  return (
    <>
      <Header />

      <main className="mx-auto min-h-[85vh] w-full max-w-305 px-6 py-8 sm:py-12">
        <nav className="mb-8 text-sm text-muted-foreground">
          <button
            type="button"
            onClick={() => navigate("/inicio")}
            className="transition-colors hover:text-primary"
          >
            Início
          </button>
          <span className="mx-2">/</span>
          <span className="text-foreground">Vender</span>
        </nav>

        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Anunciar produto
          </h1>
          <p className="mt-3 text-muted-foreground">
            Preencha as informações abaixo para cadastrar seu produto.
          </p>
        </div>

        <form onSubmit={publicarProduto}>
          <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">

            {/* Imagem do produto */}
            <div className="flex flex-col gap-4">
              <div className="relative flex min-h-90 items-center justify-center overflow-hidden rounded-2xl border border-border bg-card p-8 sm:min-h-120">
                {imagem ? (
                  <img
                    src={imagem}
                    alt="Pré-visualização do produto"
                    className="max-h-105 w-full object-contain"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-4 text-center">
                    <div className="rounded-full bg-primary/10 p-5">
                      <ImagePlus className="size-10 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Adicione uma foto</p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Escolha uma imagem para seu produto
                      </p>
                    </div>
                  </div>
                )}

                {imagem && (
                  <button
                    type="button"
                    onClick={() => setImagem(null)}
                    className="absolute right-4 top-4 rounded-full bg-background p-2 text-destructive shadow"
                    aria-label="Remover imagem"
                  >
                    <Trash2 className="size-4" />
                  </button>
                )}
              </div>

              <Label
                htmlFor="imagem-produto"
                className="flex h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-border bg-background text-sm font-medium transition-colors hover:bg-muted"
              >
                <ImagePlus className="size-4" />
                {imagem ? "Trocar imagem" : "Selecionar imagem"}
              </Label>

              <Input
                id="imagem-produto"
                type="file"
                accept="image/*"
                onChange={handleImagem}
                className="hidden"
              />

              {erro && !imagem && (
                <p className="text-sm text-red-500">
                  Selecione uma imagem para o produto.
                </p>
              )}
            </div>

            {/* Informações principais */}
            <div className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label htmlFor="nome">Nome do produto</Label>
                <Input
                  id="nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  placeholder="Ex.: Headset Gamer Pulse X"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="marca">Marca</Label>
                <Input
                  id="marca"
                  value={marca}
                  onChange={(e) => setMarca(e.target.value)}
                  placeholder="Ex.: HyperX"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="descricao">Descrição</Label>
                <Textarea
                  id="descricao"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                  placeholder="Descreva as características do produto..."
                  rows={5}
                  required
                />
              </div>

              <div className="border-y border-border py-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="preco">Preço de venda (R$)</Label>
                    <Input
                      id="preco"
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={preco}
                      onChange={(e) => setPreco(e.target.value)}
                      placeholder="119,90"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="preco-antigo">
                      Preço anterior (opcional)
                    </Label>
                    <Input
                      id="preco-antigo"
                      type="number"
                      min="0"
                      step="0.01"
                      value={precoAntigo}
                      onChange={(e) => setPrecoAntigo(e.target.value)}
                      placeholder="159,90"
                    />
                  </div>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="categoria">Categoria</Label>
                <select
                  id="categoria"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                  className="h-10 rounded-md border border-input bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Selecione uma categoria</option>
                  <option value="Periféricos">Periféricos</option>
                  <option value="Hardware">Hardware</option>
                  <option value="Monitores">Monitores</option>
                  <option value="Áudio">Áudio</option>
                  <option value="Acessórios">Acessórios</option>
                </select>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="estoque">Quantidade em estoque</Label>
                <Input
                  id="estoque"
                  type="number"
                  min="1"
                  value={estoque}
                  onChange={(e) => setEstoque(e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Detalhes adicionais */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-xl">
                Detalhes do produto
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Adicione informações técnicas e características específicas.
              </p>
            </CardHeader>

            <CardContent className="grid gap-5">
              {detalhes.map((detalhe, index) => (
                <div
                  key={index}
                  className="grid gap-3 border-b border-border pb-5 sm:grid-cols-[1fr_1.5fr_auto]"
                >
                  <div className="grid gap-2">
                    <Label>Título</Label>
                    <Input
                      value={detalhe.titulo}
                      onChange={(e) =>
                        atualizarDetalhe(index, "titulo", e.target.value)
                      }
                      placeholder="Ex.: Conectividade"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Descrição</Label>
                    <Input
                      value={detalhe.descricao}
                      onChange={(e) =>
                        atualizarDetalhe(index, "descricao", e.target.value)
                      }
                      placeholder="Ex.: USB, Bluetooth..."
                    />
                  </div>

                  <div className="flex items-end">
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removerDetalhe(index)}
                      aria-label="Remover detalhe"
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <Button
                type="button"
                variant="outline"
                className="w-fit"
                onClick={adicionarDetalhe}
              >
                <Plus className="size-4" />
                Adicionar detalhe
              </Button>
            </CardContent>
          </Card>

          {erro && (
            <p className="mt-5 text-sm text-red-500">
              Preencha os campos obrigatórios e selecione uma imagem.
            </p>
          )}

          <div className="mt-8 flex flex-col justify-end gap-3 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={() => navigate("/inicio")}
            >
              Cancelar
            </Button>

            <Button type="submit" size="lg" className="sm:min-w-52">
              <Package className="size-4" />
              Publicar anúncio
            </Button>
          </div>
        </form>
      </main>

      <Footer />
    </>
  );
}
