import { useEffect, useState } from "react";
import { Button } from "../../../ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "../../../ui/carousel";

const banners = [
    {
        eyebrow: "Ofertas especiais",
        title: "Tecnologia que acompanha você",
        description:
            "Encontre acessórios para deixar sua rotina mais prática, conectada e do seu jeito.",
        action: "Ver ofertas",
        href: "#ofertas-do-dia",
        background: "from-violet-950 via-purple-800 to-fuchsia-700",
    },
    {
        eyebrow: "Destaques da semana",
        title: "Seu próximo setup começa aqui",
        description:
            "Explore teclados, headsets e periféricos selecionados para transformar seu espaço.",
        action: "Explorar produtos",
        href: "#produtos-em-destaque",
        background: "from-slate-950 via-indigo-900 to-violet-700",
    },
    {
        eyebrow: "Novidades para você",
        title: "Boas escolhas, melhores momentos",
        description:
            "Descubra produtos para trabalhar, estudar, jogar e aproveitar cada momento.",
        action: "Conferir novidades",
        href: "#produtos-em-destaque",
        background: "from-fuchsia-950 via-purple-900 to-indigo-700",
    },
];

export function InicioBannerCarousel() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        const updateCurrent = () => setCurrent(api.selectedScrollSnap());
        updateCurrent();
        api.on("select", updateCurrent);

        return () => {
            api.off("select", updateCurrent);
        };
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            opts={{ loop: true }}
            aria-label="Banners promocionais"
            className="w-full"
        >
            <CarouselContent className="ml-0">
                {banners.map((banner) => (
                    <CarouselItem key={banner.title} className="pl-0">
                        <article
                            className={`relative isolate flex min-h-80 items-center overflow-hidden border-white/10 bg-linear-to-br ${banner.background} px-6 py-10 text-white sm:min-h-80 sm:px-10 sm:py-12`}
                        >
                            <div
                                aria-hidden="true"
                                className="absolute -right-12 -top-20 -z-10 size-72 rounded-full border-36 border-white/10 sm:right-12 sm:size-96"
                            />
                            <div
                                aria-hidden="true"
                                className="absolute -bottom-28 right-20 -z-10 size-56 rounded-full bg-white/10 blur-2xl sm:right-56"
                            />

                            <div className="mx-auto w-full max-w-305">
                                <div className="max-w-2xl">
                                    <p className="mb-2 text-xs font-semibold tracking-widest text-white/75 uppercase">
                                        {banner.eyebrow}
                                    </p>
                                    <h2 className="text-3xl leading-tight font-bold sm:text-4xl">
                                        {banner.title}
                                    </h2>
                                    <p className="mt-3 max-w-xl text-sm text-white/80 sm:text-base">
                                        {banner.description}
                                    </p>
                                    <Button
                                        render={<a href={banner.href} />}
                                        className="mt-5 h-9 rounded-full bg-white px-5 text-purple-950 hover:bg-white/90"
                                    >
                                        {banner.action}
                                    </Button>
                                </div>
                            </div>
                        </article>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious
                size="icon-lg"
                variant="ghost"
                aria-label="Banner anterior"
                className="left-3 sm:left-2 text-white"
            />
            <CarouselNext
                variant="ghost"
                size="icon-lg"
                aria-label="Próximo banner"
                className="right-3 sm:right-2 text-white "
            />

            <div className="absolute right-0 bottom-5 left-0 flex justify-center gap-2">
                {banners.map((banner, index) => (
                    <button
                        key={banner.title}
                        type="button"
                        aria-label={`Ir para o banner ${index + 1}`}
                        aria-current={current === index ? "true" : undefined}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2.5 rounded-full transition-all ${
                            current === index
                                ? "w-7 bg-white"
                                : "w-2.5 bg-white/50 hover:bg-white/80"
                        }`}
                    />
                ))}
            </div>
        </Carousel>
    );
}
