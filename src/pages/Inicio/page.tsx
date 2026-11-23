import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { InicioCarousel } from "./components/InicioCarousel";
import { InicioBannerCarousel } from "./components/InicioBannerCarousel";
import { ShopCard } from "../../components/ShopCard";
import { ShopItems } from "./components/ShopItems";
import Footer from "../../components/Footer";
import { useTheme } from "../../contexts/ThemeContext";
import { getProducts } from "../../data/products";

function PaginaInicial() {
    const { darkMode } = useTheme();
    const ofertas = getProducts().filter((produto) => produto.sections?.includes("offers"));
    const [isLogado] = useState(() => {
        const saved = localStorage.getItem('isLogado');
        return saved ? JSON.parse(saved) : null;
    });

    useEffect(() => {
        localStorage.setItem('isLogado', JSON.stringify(isLogado));
    }, [isLogado]);

    return (
        <>
            <Header />

            <main className="w-full flex flex-col items-center">
                <section className="w-full">
                    <InicioBannerCarousel />
                </section>

                <section className="w-full max-w-305 px-4 py-10 sm:px-6 sm:py-15">
                    <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                        Baseado nas suas atividades recentes
                    </h2>

                    <InicioCarousel />
                </section>

                <section
                    id="produtos-em-destaque"
                    className={`relative isolate w-full overflow-hidden mt-5 mb-5
                    ${darkMode ? "bg-[url(assets/stacked-waves-haikei.svg)]" : "bg-[url(assets/stacked-waves-haikei-white.svg)]"} 
                    bg-cover bg-no-repeat `}
                >
                    <div className="relative z-10 mx-auto w-full max-w-305 px-4 pt-12 pb-12 sm:px-6 sm:pt-20 sm:pb-20">
                        <div className="mb-8">
                            <h2 className={`text-3xl font-bold sm:text-3xl `}>
                                Produtos em destaque
                            </h2>
                            <p className="mt-3 max-w-xl text-sm sm:text-base ">
                                Tecnologia e acessórios escolhidos a mão para acompanhar você.
                            </p>
                        </div>

                        <ShopItems />
                    </div>
                </section>

                <section id="ofertas-do-dia" className="w-full max-w-305 px-4 pt-12 pb-10 sm:px-6 sm:pt-16">
                    <h2 className="mb-6 text-2xl font-bold sm:text-3xl">
                        Ofertas do Dia
                    </h2>

                    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
                        {ofertas.map((produto) => (
                            <ShopCard
                                key={produto.id}
                                {...produto}
                                price={produto.offerPrice ?? produto.price}
                                className="w-full!"
                            />
                        ))}
                    </div>
                </section>


            </main>

            <Footer />
        </>
    );
}

export default PaginaInicial;