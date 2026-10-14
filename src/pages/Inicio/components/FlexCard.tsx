export function FlexCard({...props}: React.ComponentProps<"div">) {
    return (
        <div 
            className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 pr-4"
            {...props}
        />
    )
}