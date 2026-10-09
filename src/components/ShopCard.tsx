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
    <Card className="w-55">
      <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
              {description}
          </CardDescription>
      </CardHeader>

      <CardContent>
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