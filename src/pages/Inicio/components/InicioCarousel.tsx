import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi, } from "../../../ui/carousel";
import { ShopCard } from "../../../components/ShopCard";
import fone from "../../../assets/fonebluetooth.png";
import mouse from "../../../assets/mouse.png";
import teclado from "../../../assets/teclado.png";
import webcam from "../../../assets/webcam.png";
import suporte from "../../../assets/suporte.png";
import fonegamer from "../../../assets/fonegamer.png";

export function InicioCarousel() {
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
        <div className="relative">
            <Carousel
                setApi={setApi}
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="min-w-10 w-fit max-w-305"
            >
                <CarouselContent className="flex -ml-6 p-2">
                    <CarouselItem className=" basis-full sm:basis-1/2 pl-6 md:basis-1/3  lg:basis-1/3 xl:basis-1/4">
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
                <CarouselPrevious size="icon-lg" />
                <CarouselNext size="icon-lg" />
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
    )
}