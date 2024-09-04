import { useState } from "react";
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Card,
  Text,
  Button,
  useMantineTheme,
  rem,
  Image,
  Pill,
  Group,
  Modal,
  Stack,
  Title,
  Flex,
} from "@mantine/core";
import classes from "./CardsCarousel.module.css";
import { data } from "./Data";
import { Link } from "react-router-dom";

interface CardProps {
  image: string;
  title: string;
  description: string;
  languages: string[];
  onViewDetails: () => void; // Pass a function to handle "View details"
}

function CardFunction({
  image,
  title,
  description,
  languages,
  onViewDetails,
}: CardProps) {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} alt={title} />
      </Card.Section>

      <Group mt="md" mb="xs" justify="center">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" h={100} c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group mt="md" mb="xs" gap={10} h={50} align="start">
        {languages.map((language) => (
          <Pill
            key={language}
            size="sm"
            style={{
              backgroundColor: "var(--mantine-color-gray-2)",
              color: "var(--mantine-color-gray-7)",
            }}
          >
            {language}
          </Pill>
        ))}
      </Group>

      {/* Button to trigger modal */}
      <Button
        color="blue"
        fullWidth
        mt="md"
        radius="xl"
        fw={700}
        onClick={onViewDetails}
      >
        View details
      </Button>
    </Card>
  );
}

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const isBelowMd = useMediaQuery(`(max-width: ${theme.breakpoints.md})`); // Detect screen width below md

  // State to manage modal visibility and the currently selected card
  const [opened, setOpened] = useState(false);
  const [selectedCard, setSelectedCard] = useState<any>(null); // Store the selected card's data

  // Function to open the modal and set the selected card
  const handleViewDetails = (card: any) => {
    setSelectedCard(card);
    setOpened(true);
  };

  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardFunction {...item} onViewDetails={() => handleViewDetails(item)} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Carousel
        slideSize={{ base: "100%", sm: "50%" }}
        slideGap={{ base: rem(2), sm: "xl" }}
        align="center"
        slidesToScroll={mobile ? 1 : 2}
        loop
        controlSize={40}
        classNames={{
          control: classes.control,
        }}
      >
        {slides}
      </Carousel>

      {/* Modal to display selected card details */}
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title={<Title>{selectedCard?.title}</Title>}
        size="auto"
        padding="xl"
      >
        {selectedCard && (
          <Flex maw={900} justify="center" direction="column">
            <Flex direction="column" wrap="wrap">
              <Group justify="center">
                <Image
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  maw={600}
                />
              </Group>
              <Group mt="lg">
                <Flex
                  justify="space-between"
                  direction={isBelowMd ? "column" : "row"} // Switch between column and row
                  gap={isBelowMd ? 20 : 50} // Adjust gap based on screen size
                  w="100%"
                >
                  <Stack w={isBelowMd ? "100%" : "65%"}>
                    {" "}
                    {/* Full width on smaller screens */}
                    <Title fz={20} lh={0} mb={0} mt={20} fw={600}>
                      Description
                    </Title>
                    <Text>{selectedCard.description}</Text>
                  </Stack>

                  <Flex
                    w={isBelowMd ? "100%" : "35%"}
                    gap="xl"
                    justify={isBelowMd ? "space-between" : "flex-start"} // Center on mobile
                    mt={isBelowMd ? 0 : "20px"} // Adjust top margin for mobile
                  >
                    <Stack>
                      <Title fz={20} lh={0} mb={0} fw={600}>
                        Built in
                      </Title>
                      <Text>{selectedCard.year}</Text>
                    </Stack>

                    {selectedCard.link && (
                      <Stack gap={15}>
                        <Title fz={20} lh={0} mb={0} fw={600}>
                          Link
                        </Title>
                        <Link to={selectedCard.link} target="_blank">
                          {selectedCard.title}
                        </Link>
                      </Stack>
                    )}
                  </Flex>
                </Flex>
              </Group>

              <Group mt="xl" mb="md" justify="center">
                {selectedCard.languages.map((language: string) => (
                  <Pill
                    key={language}
                    size="lg"
                    style={{
                      backgroundColor: "var(--mantine-color-gray-2)",
                      color: "var(--mantine-color-gray-7)",
                    }}
                  >
                    {language}
                  </Pill>
                ))}
              </Group>
            </Flex>
          </Flex>
        )}
      </Modal>
    </>
  );
}
