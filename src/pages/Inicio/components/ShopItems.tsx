
import { ShopCard } from "../../../components/ShopCard";
import { getProducts } from "../../../data/products";

export function ShopItems() {
    const produtos = getProducts()
        .filter((produto) => produto.sections?.includes("featured"))
        .slice(0, 4);

    return (
        <div className="grid w-full grid-cols-2 gap-4 lg:grid-cols-4">
            {produtos.map((produto) => (
                <ShopCard key={produto.id} {...produto} />
            ))}
        </div>
    );
}
