export function FlexCard({...props}: React.ComponentProps<"div">) {
    return (
        <div 
            className="basis-1/2 pr-2 sm:basis-1/2 sm:pr-4 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
            {...props}
        />
    )
}