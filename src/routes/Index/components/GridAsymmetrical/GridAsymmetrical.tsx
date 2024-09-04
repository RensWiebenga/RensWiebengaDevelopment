import { Grid, Container } from "@mantine/core";
import ProductCard from "../ProductCard/ProductCard";

const mockData = [
  {
    image: "/src/assets/Projects/Startdossier/Startdossier1.jpg",
    title: "Startdossier P&O",
    description:
      "This application is designed to help managers to find employees and guide them through the onboarding process.",
    link: "",
  },
  {
    image: "/src/assets/Projects/DNAPoli/dnapoli1.jpg",
    title: "DNA Poli",
    description:
      "Application designed to help patients with certain heritary ailments to invite their family members to get a dna-test.",
    link: "https://dna-poli.nl/",
  },
  {
    image: "/src/assets/Projects/Emodulewijzer/e-modulewijzer.jpg",
    title: "E-modulewijzer",
    description:
      "This application is designed to help assess the price of the production of a e-learning module for medical students.",
    link: "",
  },
  {
    image: "/src/assets/Projects/FindMyEmbassy/FindMyEmbassy1.jpg",
    title: "Find My Embassy",
    description:
      "This progressive web applications allows people to find the nearest embassy in case of an emergency. It also shows emergency contacts like police, fire departments and ambulances.",
    link: "https://findmyembassy.azurewebsites.net/",
  },
  {
    image: "/src/assets/Projects/32nds/32nds1.jpg",
    title: "Thirty SecondS",
    description:
      "A small hobby project to make it easier for people to play the game Thirty Seconds where ever they are.",
    link: "http://32nds.nl/bord.html",
  },
  {
    image: "/src/assets/Projects/Campaign/Campaign1.jpg",
    title: "UMC and WKZ Campaigns",
    description:
      "This application allows Marketing and Communication to create and manage campaigns. One of the specifiec features being displayed here is the timeline which allows for a care path of patients to be stipulated and presented.",
    link: "https://www.umcutrecht.nl/nl/info/mr-linac",
  },
  {
    image: "/src/assets/Projects/LoopbaanEnquete/LoopbaanEnquete1.jpg",
    title: "Career Survey",
    description:
      "This application departments to accurately follow the perception of career development of employees.",
    link: "https://loopbaanenquete.azurewebsites.net/",
  },
  // Add more products as needed
];

export function GridAsymmetrical() {
  return (
    <Container my="md">
      <Grid>
        {mockData.map((product, index) => (
          <Grid.Col
            key={index}
            span={{ base: 12, xs: index % 2 === 0 ? 4 : 8 }}
          >
            <ProductCard
              image={product.image}
              title={product.title}
              description={product.description}
              link={product.link}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}
