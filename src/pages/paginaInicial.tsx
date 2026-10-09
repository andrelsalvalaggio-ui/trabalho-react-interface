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

            <main className="w-full">
                <div className="mx-auto mt-10 w-fit">
                    <h2 className="mb-6 text-xl font-semibold">
                        Baseado nas suas atividades recentes
                    </h2>

                    <div className="relative w-305">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                slidesToScroll: 1,
                            }}
                        >
                            <CarouselContent className="-ml-6 py-2">
                                <CarouselItem className="basis-61 pl-6">
                                    <ShopCard 
                                        title="Fone Bluetooth" 
                                        description="Fone sem fio com estojo de carregamento"
                                        image={fone}
                                        price="89,90" 
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <ShopCard
                                        title="Mouse Sem Fio"
                                        description="Mouse ergonômico com conexão USB"
                                        image={mouse}
                                        price="59,90"
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <ShopCard
                                        title="Teclado Mecânico"
                                        description="Teclado mecânico compacto RGB"
                                        image={teclado}
                                        price="189,90"
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <ShopCard
                                        title="Webcam Full HD"
                                        description="Webcam com resolução Full HD"
                                        image={webcam}
                                        price="119,90"
                                    />
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <ShopCard
                                        title="Suporte para Notebook"
                                        description="Suporte ajustável para notebook"
                                        image={suporte}
                                        price="79,90"
                                    />
                                </CarouselItem>
                                <CarouselItem className="basis-1/5 pl-6">
                                    <ShopCard
                                        title="Suporte para Notebook"
                                        description="Suporte ajustável para notebook"
                                        image={suporte}
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
            </main>
        </>
    );
}

export default PaginaInicial;