import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { InicioCarousel } from "./components/InicioCarousel";
import { InicioBannerCarousel } from "./components/InicioBannerCarousel";
import { ShopCard } from "../../components/ShopCard";
import { ShopItems } from "./components/ShopItems";
import fonegamer from "../../assets/fonegamer.webp";
import teclado from "../../assets/teclado.webp";
import fone from "../../assets/fonebluetooth.webp"
import Footer from "../../components/Footer";
import { useTheme } from "../../contexts/ThemeContext";

function PaginaInicial() {
    const { darkMode } = useTheme();
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

                <section className="p-15 px-6 min-w-10 w-fit max-w-305">
                    <h2 className="text-3xl font-bold sm:text-3xl mb-6">
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
                    <div className="relative z-10 mx-auto w-full max-w-305 px-6 pt-20 pb-20">
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

                <section id="ofertas-do-dia" className="w-full max-w-305 px-6 pt-16 pb-10">
                    <h2 className="text-3xl font-bold sm:text-3xl mb-6">
                        Ofertas do Dia
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <ShopCard
                            className="w-full!"
                            marca="JBL"
                            title="Fone Bluetooth"
                            description="Fone sem fio com estojo de carregamento"
                            image={fone}
                            oldPrice="89,90"
                            price="69,90"
                            discount="22% OFF"
                            avaliacao={4.7}
                            details={{
                                Titulo1: "Conexão",
                                Desc1: "Bluetooth 5.3",
                                Titulo2: "Bateria",
                                Desc2: "Até 24 horas com o estojo",
                                Titulo3: "Resistência",
                                Desc3: "Proteção contra respingos IPX4",
                                Titulo4: "Estojo",
                                Desc4: "Carregamento portátil com indicador LED",
                            }}
                        />

                        <ShopCard
                            className="w-full!"
                            marca="Redragon"
                            title="Teclado Mecânico"
                            description="Teclado mecânico compacto RGB"
                            image={teclado}
                            oldPrice="189,90"
                            price="149,90"
                            discount="21% OFF"
                            avaliacao={4.8}
                            details={{
                                Titulo1: "Formato",
                                Desc1: "Compacto, com 87 teclas",
                                Titulo2: "Iluminação",
                                Desc2: "RGB com efeitos personalizáveis",
                                Titulo3: "Conexão",
                                Desc3: "USB com cabo reforçado",
                                Titulo4: "Switches",
                                Desc4: "Mecânicos com resposta tátil",
                            }}
                        />

                        <ShopCard
                            className="w-full!"
                            marca="HyperX"
                            title="Headset Gamer"
                            description="Headset com microfone e som estéreo"
                            image={fonegamer}
                            oldPrice="159,90"
                            price="119,90"
                            discount="25% OFF"
                            avaliacao={4.9}
                            details={{
                                Titulo1: "Áudio",
                                Desc1: "Som estéreo com graves reforçados",
                                Titulo2: "Microfone",
                                Desc2: "Articulado com redução de ruído",
                                Titulo3: "Conforto",
                                Desc3: "Almofadas macias e ajustáveis",
                                Titulo4: "Compatibilidade",
                                Desc4: "PC, consoles e dispositivos móveis",
                            }}
                        />
                    </div>
                </section>


            </main>

            <Footer />
        </>
    );
}

export default PaginaInicial;