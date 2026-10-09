import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface ShopCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
}

export function ShopCard({
  title,
  description,
  price,
  image,
}: ShopCardProps) {
  return (
    <Card className="w-full sm:w-58 md:w-65 lg:w-60 xl:w-55 h-full">
      <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
              {description}
          </CardDescription>
      </CardHeader>

      <CardContent className="h-full">
          <img
              src={image}
              alt={title}
              className="mx-auto h-56 w-56 object-contain"
          />
      </CardContent>

      <CardFooter>
          <p>R$ {price}</p>
      </CardFooter>
    </Card>
  );
}