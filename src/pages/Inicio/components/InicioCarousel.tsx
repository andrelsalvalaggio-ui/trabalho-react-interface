
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
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="Logitech"
                            title="Mouse Sem Fio"
                            description="Mouse ergonômico com conexão USB"
                            image={mouse}
                            price="59,90"
                            avaliacao={4.5}
                            details={{
                                Titulo1: "Conexão",
                                Desc1: "Receptor USB sem fio",
                                Titulo2: "Alcance",
                                Desc2: "Até 10 metros",
                                Titulo3: "Formato",
                                Desc3: "Design ergonômico ambidestro",
                                Titulo4: "Alimentação",
                                Desc4: "Uma pilha com longa duração",
                            }}
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
                    </CarouselItem>

                    <CarouselItem className="basis-full sm:basis-1/2 pl-6 md:basis-1/3 lg:basis-1/3 xl:basis-1/4">
                        <ShopCard
                            marca="Logitech"
                            title="Webcam Full HD"
                            description="Webcam com resolução Full HD"
                            image={webcam}
                            price="119,90"
                            avaliacao={4.6}
                            details={{
                                Titulo1: "Resolução",
                                Desc1: "Full HD 1080p",
                                Titulo2: "Microfone",
                                Desc2: "Integrado com captação estéreo",
                                Titulo3: "Instalação",
                                Desc3: "Clipe ajustável e conexão USB",
                                Titulo4: "Privacidade",
                                Desc4: "Tampa deslizante para a lente",
                            }}
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
                            details={{
                                Titulo1: "Material",
                                Desc1: "Alumínio leve e resistente",
                                Titulo2: "Ajuste",
                                Desc2: "Altura e inclinação reguláveis",
                                Titulo3: "Compatibilidade",
                                Desc3: "Notebooks de até 15,6 polegadas",
                                Titulo4: "Ventilação",
                                Desc4: "Design aberto para ajudar na dissipação de calor",
                            }}
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
                    </CarouselItem>
                </CarouselContent>

                <CarouselPrevious size="icon-lg" />
                <CarouselNext size="icon-lg" />
            </Carousel>
        </div>
    );
}
