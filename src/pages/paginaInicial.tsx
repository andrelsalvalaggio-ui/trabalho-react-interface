import { useEffect, useState } from "react";
import { HeaderInicio } from "../components/HeaderInicio";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from "../ui/carousel";
import fone from "../assets/fonebluetooth.png";
import mouse from "../assets/mouse.png";
import teclado from "../assets/teclado.png";
import webcam from "../assets/webcam.png";
import suporte from "../assets/suporte.png";
import fonegamer from "../assets/fonegamer.png";
import mousegamer from "../assets/mousegamer.png";
import { ShopCard } from "../components/ShopCard";

function PaginaInicial() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <>
            <HeaderInicio />

            <main className="w-full flex flex-col items-center">
                <div className="p-15 min-w-10 w-fit max-w-[1220px]">
                    <h2 className="mb-6 text-xl font-semibold">
                        Baseado nas suas atividades recentes
                    </h2>

                    <div className="relative">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                slidesToScroll: 1,
                            }}
                        >
                            <CarouselContent className="flex -ml-6 py-2">
                                <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3  lg:basis-1/3 xl:basis-1/4">
                                    <ShopCard 
                                        title="Fone Bluetooth" 
                                        description="Fone sem fio com estojo de carregamento"
                                        image={fone}
                                        price="89,90" 
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                                    <ShopCard
                                        title="Mouse Sem Fio"
                                        description="Mouse ergonômico com conexão USB"
                                        image={mouse}
                                        price="59,90"
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                                    <ShopCard
                                        title="Teclado Mecânico"
                                        description="Teclado mecânico compacto RGB"
                                        image={teclado}
                                        price="189,90"
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                                    <ShopCard
                                        title="Webcam Full HD"
                                        description="Webcam com resolução Full HD"
                                        image={webcam}
                                        price="119,90"
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                                    <ShopCard
                                        title="Suporte para Notebook"
                                        description="Suporte ajustável para notebook"
                                        image={suporte}
                                        price="79,90"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                                    <ShopCard
                                        title="Headset Gamer"
                                        description="Headset com microfone e som estéreo"
                                        image={fonegamer}
                                        price="79,90"
                                    />
                                </CarouselItem>

                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <div className="mt-6 flex justify-center gap-2">
                            {Array.from({ length: count }).map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => api?.scrollTo(index)}
                                    className={`h-2.5 w-2.5 rounded-full ${current === index + 1
                                            ? "bg-black"
                                            : "bg-gray-300"
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            <section className="w-full max-w-[1220px] px-6 mt-16 mb-10">
                    <h2 className="mb-6 text-xl font-semibold">
                        Produtos em destaque
                    </h2>

                    <div className="flex flex-wrap gap-4">
                        <ShopCard
                            title="Mouse Gamer Fallen"
                            description="Mouse gamer leve com sensor de alta precisão"
                            image={mousegamer}
                            price="259,90"
                        />

                        <ShopCard
                            title="Mouse Sem Fio"
                            description="Mouse ergonômico com conexão sem fio"
                            image={mouse}
                            price="159,90"
                        />
                        
                        <ShopCard
                            title="Teclado Mecânico"
                            description="Teclado mecânico compacto RGB"
                            image={teclado}
                            price="140,90"
                        />
                        
                        <ShopCard
                            title="Fone Bluetooth"
                            description="Fone sem fio com estojo de carregamento"
                            image={fone}
                            price="159,90"
                        />
                        
                        <ShopCard
                            title="Webcam Full HD"
                            description="Webcam com resolução full HD"
                            image={webcam}
                            price="159,90"
                        />

                    </div>
                </section>


                <section className="w-full max-w-[1220px] px-6 mt-16 mb-10">
                        <h2 className="mb-6 text-xl font-semibold">
                        Ofertas do Dia
                        </h2>


                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            <ShopCard
                                className="!w-full"
                                title="Fone Bluetooth"
                                description="Fone sem fio com estojo de carregamento"
                                image={fone}
                                oldPrice="89,90"
                                price="69,90"
                                discount="22% OFF"
                            />

                            <ShopCard
                                className="!w-full"
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