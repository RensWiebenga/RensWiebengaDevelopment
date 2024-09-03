import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";
import {
  Card,
  Text,
  Button,
  useMantineTheme,
  rem,
  Image,
  Badge,
  Group,
} from "@mantine/core";
import classes from "./CardsCarousel.module.css";

interface CardProps {
  image: string;
  title: string;
  description: string;
  languages: string[];
}

function CardFunction({ image, title, description, languages }: CardProps) {
  return (
    <Card padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image src={image} height={300} alt={title} />
      </Card.Section>

      <Group mt="md" mb="xs" justify="center">
        <Text fw={500}>{title}</Text>
      </Group>

      <Text size="sm" h={100} c="dimmed" lineClamp={4}>
        {description}
      </Text>

      <Group mt="md" mb="xs" gap={10} h={50} align="start">
        {languages.map((language) => (
          <Badge key={language} color="primary" variant="outline">
            {language}
          </Badge>
        ))}
      </Group>

      <Button color="blue" fullWidth mt="md" radius="xl">
        View details
      </Button>
    </Card>
  );
}

const data = [
  {
    image: "/src/assets/Projects/VaccinatieApp/VaccinationAppLaptopSmall.jpg",
    title: "Vaccination application",
    description:
      "This application has been initially built to invite and vaccinate UMC and WKZ employees to the covid vaccines. In the meantime it has been expanded to allow for a myriad of vaccinations for employees, students and patients.",
    languages: [
      ".Net C#",
      "REST API",
      "PowerShell",
      "Entity Framework",
      "React",
      "TypeScript",
      "Mantine",
      "Azure DevOps",
    ],
    link: "",
  },

  {
    image:
      "/src/assets/Projects/FindMyEmbassy/FindMyEmbassyLaptopPhoneSmall.jpg",
    title: "Find My Embassy",
    description:
      "This progressive web application allows people to find the nearest embassy in case of an emergency. It also shows emergency contacts like police, fire departments and ambulances.",
    languages: [
      "Python",
      "HTML",
      "LESS",
      "PWA",
      "BeautifulSoup",
      "Git",
      "Bootstrap",
    ],
    link: "https://findmyembassy.azurewebsites.Net/",
  },
  {
    image: "/src/assets/Projects/Startdossier/StartdossierLaptopSmall.jpg",
    title: "Startdossier P&O",
    description:
      "This application is designed to help managers to find employees and guide them through the onboarding process.",
    languages: [
      ".Net C#",
      "REST API",
      "PowerShell",
      "Entity Framework",
      "React",
      "TypeScript",
      "Mantine",
      "Azure DevOps",
    ],
    link: "",
  },
  {
    image: "/src/assets/Projects/32nds/32ndsLaptopPhoneSmall.jpg",
    title: "Thirty SecondS",
    description:
      "A small hobby project to make it easier for people to play the game Thirty Seconds where ever they are.",
    languages: ["HTML", "jQuery", "JavaScript", "LESS", "Git"],
    link: "http://32nds.nl/bord.html",
  },
  {
    image:
      "/src/assets/Projects/Emodulewijzer/E-ModulewijzerLaptopPhoneSmall.jpg",
    title: "E-modulewijzer",
    description:
      "This application is designed to help assess the price of the production of a e-learning module for medical students.",
    languages: [
      "PHP",
      "jQuery",
      "JavaScript",
      "Bootstrap",
      "SQL",
      "LESS",
      "Articulate Storyline",
      "Git",
    ],
    link: "",
  },
  {
    image: "/src/assets/Projects/DNAPoli/DNAPoliLaptopSmall.jpg",
    title: "DNA Poli",
    description:
      "Application designed to help patients with certain heritary ailments to invite their family members to get a dna-test.",
    languages: [
      ".Net C#",
      "MVC",
      "Entity Framework",
      "Razor pages",
      "SCSS",
      "JavaScript",
      "jQuery",
      "Azure DevOps",
    ],
    link: "https://dna-poli.nl/",
  },
  {
    image: "/src/assets/Projects/Campaign/CampaignLaptopSmall.jpg",
    title: "UMC and WKZ Campaigns",
    description:
      "This application allows Marketing and Communication to create and manage campaigns. One of the specifiec features being displayed here is the timeline which allows for a care path of patients to be stipulated and presented.",
    languages: [
      "Kontent.AI headless CMS",
      "React",
      "Razor pages",
      "MVC",
      "Azure DevOps",
    ],
    link: "https://www.umcutrecht.nl/nl/info/mr-linac",
  },
  {
    image:
      "/src/assets/Projects/LoopbaanEnquete/LoopbaanEnqueteLaptopSmall.jpg",
    title: "Career Survey",
    description:
      "This application departments to accurately follow the perception of career development of employees. ",
    languages: [
      "HTML",
      "LESS",
      "jQuery",
      "JavaScript",
      "Azure DevOps",
      "Bootstrap",
    ],
    link: "https://loopbaanenquete.azurewebsites.Net/",
  },
  {
    image: "/src/assets/Projects/GameRealm/GameRealmLaptopSmall.jpg",
    title: "GameRealm",
    description:
      "Gamerealm is a platform created for gamers and indy game developers. Gamerealm functions as a platform for gamers to find the most popular games on the web while it allows developers to display their work publicly.",
    languages: ["HTML", "LESS", "jQuery", "JavaScript", "PHP", "SQL"],
    link: "",
  },
  {
    image:
      "/src/assets/Projects/IWantOneOfThoseMemes/IWantOneOfThoseMemesLaptopSmall.jpg",
    title: "I want one of those memes",
    description:
      "The webshop I want one of those memes is a side-project of mine. It is a business venture created to sell meme-merchandise.",
    languages: ["HTML", "LESS", "jQuery", "JavaScript", "SpreadShirt"],
    link: "",
  },
];

export function CardsCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <CardFunction {...item} />
    </Carousel.Slide>
  ));

  return (
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
  );
}
