import { Card, Image, Text } from "@mantine/core";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  link: string;
}

export default function ProductCard({
  image,
  title,
  description,
  link,
}: ProductCardProps) {
  return (
    <Card shadow="sm" padding="xl" component="a" href={link} target="_blank">
      <Card.Section>
        <Image src={image} h={160} alt={title} />
      </Card.Section>

      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>

      <Text mt="xs" c="dimmed" size="sm">
        {description}
      </Text>
    </Card>
  );
}
