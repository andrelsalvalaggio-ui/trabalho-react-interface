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

                    <div className="relative w-[1220px]">
                        <Carousel
                            setApi={setApi}
                            opts={{
                                align: "start",
                                slidesToScroll: 1,
                            }}
                        >
                            <CarouselContent className="-ml-6 py-2">
                                <CarouselItem className="basis-[244px] pl-6">
                                    <Card className="w-[220px]">
                                        <CardHeader>
                                            <CardTitle>Fone Bluetooth</CardTitle>
                                            <CardDescription>
                                                Fone sem fio com estojo de carregamento
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <img
                                                src={fone}
                                                alt="Fone Bluetooth"
                                                className="mx-auto h-56 w-56 object-contain"
                                            />
                                        </CardContent>

                                        <CardFooter>
                                            <p>R$ 89,90</p>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <Card className="w-[220px]">
                                        <CardHeader>
                                            <CardTitle>Mouse Sem Fio</CardTitle>
                                            <CardDescription>
                                                Mouse ergonômico com conexão USB
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <img
                                                src={mouse}
                                                alt="Mouse Sem Fio"
                                                className="mx-auto h-56 w-56 object-contain"
                                            />
                                        </CardContent>

                                        <CardFooter>
                                            <p>R$ 59,90</p>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <Card className="w-[220px]">
                                        <CardHeader>
                                            <CardTitle>Teclado Mecânico</CardTitle>
                                            <CardDescription>
                                                Teclado mecânico compacto RGB
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <img
                                                src={teclado}
                                                alt="Teclado Mecânico"
                                                className="mx-auto h-56 w-56 object-contain"
                                            />
                                        </CardContent>

                                        <CardFooter>
                                            <p>R$ 189,90</p>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <Card className="w-[220px]">
                                        <CardHeader>
                                            <CardTitle>Webcam Full HD</CardTitle>
                                            <CardDescription>
                                                Webcam com resolução Full HD
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <img
                                                src={webcam}
                                                alt="Webcam Full HD"
                                                className="mx-auto h-56 w-56 object-contain"
                                            />
                                        </CardContent>

                                        <CardFooter>
                                            <p>R$ 119,90</p>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>

                                <CarouselItem className="basis-1/5 pl-6">
                                    <Card className="w-[220px]">
                                        <CardHeader>
                                            <CardTitle>Suporte para Notebook</CardTitle>
                                            <CardDescription>
                                                Suporte ajustável para notebook
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <img
                                                src={suporte}
                                                alt="Suporte para Notebook"
                                                className="mx-auto h-56 w-56 object-contain"
                                            />
                                        </CardContent>

                                        <CardFooter>
                                            <p>R$ 79,90</p>
                                        </CardFooter>
                                    </Card>
                                </CarouselItem>
                                <CarouselItem className="basis-1/5 pl-6">
                                    <Card className="w-[220px]">
                                        <CardHeader>
                                            <CardTitle>Headset Gamer</CardTitle>
                                            <CardDescription>
                                                Headset com microfone e som estéreo
                                            </CardDescription>
                                        </CardHeader>

                                        <CardContent>
                                            <img
                                                src={fonegamer}
                                                alt="Headset Gamer"
                                                className="mx-auto h-56 w-56 object-contain"
                                            />
                                        </CardContent>

                                        <CardFooter>
                                            <p>R$ 159,90</p>
                                        </CardFooter>
                                    </Card>
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