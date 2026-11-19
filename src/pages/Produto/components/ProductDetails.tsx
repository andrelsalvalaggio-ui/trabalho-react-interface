interface ProductDetailProps {
    titulo: string,
    descricao: string
    border?: boolean
}
export function ProductDetail({titulo, descricao, border = true}: ProductDetailProps) {
    return (
        <div className={`flex justify-between gap-4 ${border ? 'border-b border-border pb-3' : 'pb-1'}`}>
            <span className="text-muted-foreground">{titulo}</span>
            <span className="font-medium">{descricao}</span>
        </div>
    )

}