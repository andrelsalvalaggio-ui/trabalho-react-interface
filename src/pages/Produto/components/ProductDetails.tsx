import type { ReactHTMLElement } from "react";

interface ProductDetailProps {
    titulo: string,
    descricao: string
}
export function ProductDetail({titulo, descricao}: ProductDetailProps) {
    return (
        <div className="flex justify-between gap-4 border-b border-border pb-3">
            <span className="text-muted-foreground">{titulo}</span>
            <span className="font-medium">{descricao}</span>
        </div>
    )

}