
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../../../ui/carousel";
import { ShopCard } from "../../../components/ShopCard";
import { getProducts } from "../../../data/products";

export function InicioCarousel() {
    const produtos = getProducts().filter((produto) => produto.sections?.includes("recent"));

    return (
        <div className="relative">
            <Carousel
                opts={{
                    align: "start",
                    slidesToScroll: 1,
                }}
                className="w-full min-w-0 max-w-305"
            >
                <CarouselContent className="flex -ml-6 p-2">
                    {produtos.map((produto) => (
                        <CarouselItem
                            key={produto.id}
                            className="basis-[84%] pl-6 sm:basis-1/2 md:basis-1/3 lg:basis-1/3 xl:basis-1/4"
                        >
                            <ShopCard {...produto} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious size="icon-lg" className="left-2 bg-background/85 shadow sm:-left-12" />
                <CarouselNext size="icon-lg" className="right-2 bg-background/85 shadow sm:-right-12" />
            </Carousel>
        </div>
    );
}
