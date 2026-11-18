
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../ui/carousel";
import { ShopCard } from "../../../components/ShopCard";
import fone from "../../../assets/fonebluetooth.webp";
import mouse from "../../../assets/mouse.webp";
import teclado from "../../../assets/teclado.webp";
import webcam from "../../../assets/webcam.webp";
import suporte from "../../../assets/suporte.webp";
import fonegamer from "../../../assets/fonegamer.webp";

export function InicioCarousel() {
    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="min-w-10 w-fit max-w-305"
            >
                <CarouselContent className="flex -ml-6 p-2">
                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="JBL"
                            title="Fone Bluetooth"
                            description="Fone sem fio com estojo de carregamento"
                            image={fone}
                            price="89,90"
                            avaliacao={4.7}
                        />
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="Logitech"
                            title="Mouse Sem Fio"
                            description="Mouse ergonômico com conexão USB"
                            image={mouse}
                            price="59,90"
                            avaliacao={4.5}
                        />
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="Redragon"
                            title="Teclado Mecânico"
                            description="Teclado mecânico compacto RGB"
                            image={teclado}
                            price="189,90"
                            avaliacao={4.8}
                        />
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="Logitech"
                            title="Webcam Full HD"
                            description="Webcam com resolução Full HD"
                            image={webcam}
                            price="119,90"
                            avaliacao={4.6}
                        />
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="Baseus"
                            title="Suporte para Notebook"
                            description="Suporte ajustável para notebook"
                            image={suporte}
                            price="79,90"
                            avaliacao={4.4}
                        />
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="HyperX"
                            title="Headset Gamer"
                            description="Headset com microfone e som estéreo"
                            image={fonegamer}
                            price="79,90"
                            avaliacao={4.9}
                        />
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious size="icon-lg" />
                <CarouselNext size="icon-lg" />
            </Carousel>
        </div>
    );
}
