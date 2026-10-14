import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { InicioCarousel } from "./components/InicioCarousel";
import { ShopCard } from "../../components/ShopCard";
import { ShopItems } from "./components/ShopItems";
import fonegamer from "../../assets/fonegamer.png";
import teclado from "../../assets/teclado.png";
import fone from "../../assets/fonebluetooth.png"

function PaginaInicial() {

    return (
        <>
            <Header isLogado={true} />

            <main className="w-full flex flex-col items-center">
                <section className="p-15 min-w-10 w-fit max-w-305">
                    <h2 className="mb-6 text-xl font-semibold">
                        Baseado nas suas atividades recentes
                    </h2>

                    <InicioCarousel />
                </section>

                <section className="w-full max-w-305 px-6 mt-16 mb-10">
                    <h2 className="mb-6 text-xl font-semibold">
                        Produtos em destaque
                    </h2>

                    <ShopItems />
                </section>


                <section className="w-full max-w-305 px-6 mt-16 mb-10">
                        <h2 className="mb-6 text-xl font-semibold">
                        Ofertas do Dia
                        </h2>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <ShopCard
                                className="w-full!"
                                title="Fone Bluetooth"
                                description="Fone sem fio com estojo de carregamento"
                                image={fone}
                                oldPrice="89,90"
                                price="69,90"
                                discount="22% OFF"
                            />

                            <ShopCard
                                className="w-full!"
                                title="Teclado Mecânico"
                                description="Teclado mecânico compacto RGB"
                                image={teclado}
                                oldPrice="189,90"
                                price="149,90"
                                discount="21% OFF"
                            />

                            <ShopCard
                                className="!w-full"
                                title="Headset Gamer"
                                description="Headset com microfone e som estéreo"
                                image={fonegamer}
                                oldPrice="159,90"
                                price="119,90"
                                discount="25% OFF"
                            />
                        </div>

                    </section>
            </main>
        </>
    );
}

export default PaginaInicial;