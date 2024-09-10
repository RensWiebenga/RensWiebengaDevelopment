// Importing images explicitly
import vaccinatieImage from "../../../../assets/Projects/VaccinatieApp/VaccinationAppLaptopSmall.jpg";
import embassyImage from "../../../../assets/Projects/FindMyEmbassy/FindMyEmbassyLaptopPhoneSmall.jpg";
import startdossierImage from "../../../../assets/Projects/Startdossier/StartdossierLaptopSmall.jpg";
import thirtySecondSImage from "../../../../assets/Projects/32nds/32ndsLaptopPhoneSmall.jpg";
import emodulewijzerImage from "../../../../assets/Projects/EModulewijzer/EModulewijzerLaptopPhoneSmall.jpg";
import dnaPoliImage from "../../../../assets/Projects/DNAPoli/DNAPoliLaptopSmall.jpg";
import campaignImage from "../../../../assets/Projects/Campaign/CampaignLaptopSmall.jpg";
import loopbaanEnqueteImage from "../../../../assets/Projects/LoopbaanEnquete/LoopbaanEnqueteLaptopSmall.jpg";
import gameRealmImage from "../../../../assets/Projects/GameRealm/GameRealmLaptopSmall.jpg";
import memesImage from "../../../../assets/Projects/IWantOneOfThoseMemes/IWantOneOfThoseMemesLaptopSmall.jpg";

// Update the data array with the imported images
export const data = [
  {
    image: vaccinatieImage,
    title: "Vaccination Application",
    description:
      "This application was initially created to invite and vaccinate UMC and WKZ employees for COVID-19 vaccines. It has since been expanded to support a variety of vaccinations for employees, students, and patients.",
    longDescription: [
      "The Vaccination Application was developed in response to the COVID-19 pandemic to efficiently manage and schedule vaccinations for hospital staff. Over time, it has evolved into a more comprehensive tool, allowing the management of other vaccination programs within the hospital.",
      "The app supports multiple vaccination schedules, provides real-time data tracking, and offers an intuitive interface for both patients and medical personnel.",
    ],
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
    year: "2020",
    role: "Lead developer",
  },
  {
    image: embassyImage,
    title: "Find My Embassy",
    description:
      "This progressive web application allows people to find the nearest embassy in case of an emergency. It also displays emergency contacts such as the police, fire departments, and ambulance services.",
    longDescription: [
      "Find My Embassy is a life-saving web application designed to help travelers and expatriates locate the nearest embassy or consulate in case of an emergency. The app also provides essential local emergency contacts, such as police, fire departments, and ambulances, ensuring users can access critical information quickly.",
      "The inspiration for building this hobby project came from a personal experience where we struggled to find the contact information for the Dutch embassy while overseas. This challenge highlighted the need for a reliable tool that would make such information easily accessible to anyone, regardless of their location or nationality.",
      "One of the core features of Find My Embassy is that it empowers users to fight corruption. By providing quick access to embassy contacts, users can demonstrate their willingness to escalate instances of corruption or misconduct to their embassy, creating a deterrent effect.",
      "Built as a Progressive Web App (PWA), Find My Embassy ensures offline functionality, allowing users to access information even in areas with limited connectivity. Importantly, the app is not limited to Dutch nationals—it works for travelers of any nationality and can be used in any country, making it a versatile tool for global travelers.",
    ],
    languages: [
      "Python",
      "HTML",
      "LESS",
      "PWA",
      "BeautifulSoup",
      "Git",
      "Bootstrap",
    ],
    link: "https://findmyembassy.azurewebsites.net/",
    year: "2017",
    role: "Owner and creator",
  },
  {
    image: startdossierImage,
    title: "Startdossier P&O",
    description:
      "This application is designed to assist managers in finding employees and guiding them through the onboarding process. It streamlines human resource activities and simplifies the hiring journey.",
    longDescription: [
      "Startdossier P&O is a tool designed to streamline the hiring and onboarding process for managers within organizations. It offers features that assist in locating potential hires, managing documentation, and guiding new employees through the company's onboarding process efficiently.",
      "One of the key benefits of Startdossier P&O is its ability to simplify the onboarding process across multiple stakeholders, including team leaders, Human Resources, and the potential candidates themselves. By creating a centralized system, the tool ensures smooth coordination between all parties involved, reducing miscommunication and improving the overall experience.",
      "The app integrates seamlessly with HR management systems, ensuring compliance with company policies and enhancing the efficiency of onboarding procedures. It helps maintain consistency in hiring practices and reduces administrative overhead for team leaders and HR departments alike.",
    ],
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
    year: "2023",
    role: "Lead developer",
  },
  {
    image: thirtySecondSImage,
    title: "Thirty SecondS",
    description:
      "This application simplifies the game Thirty Seconds, allowing users to play wherever they are. It's designed for quick, easy access and enjoyment.",
    longDescription: [
      "Thirty SecondS is a casual gaming web app that allows users to enjoy the popular trivia game 'Thirty Seconds' wherever and whenever they want. This project was developed as a personal hobby, inspired by the desire to play the game on the go, without needing a physical board or setup. Whether at home, on the road, or with friends, the app makes the game easily accessible from any location.",
      "The app features a simple, intuitive interface that lets players quickly join a game and start playing within seconds. It supports multiple rounds and automatic scorekeeping, ensuring a seamless gaming experience. Players can focus on having fun without worrying about tracking scores or managing game logistics.",
      "Designed to capture the fast-paced, energetic nature of the original board game, Thirty SecondS delivers a fun and dynamic experience for trivia lovers and casual gamers alike.",
    ],
    languages: ["HTML", "jQuery", "JavaScript", "LESS", "Git"],
    link: "http://32nds.nl/bord.html",
    year: "2016",
    role: "Owner and creator",
  },
  {
    image: emodulewijzerImage,
    title: "E-modulewijzer",
    description:
      "This application is designed to estimate the cost of producing an e-learning module for medical students. It simplifies budgeting and project planning for educational materials.",
    longDescription: [
      "E-modulewijzer is a tool aimed at educators and administrators in medical schools to help estimate the cost of creating e-learning modules. The app allows users to input different parameters such as content length, interactivity level, and multimedia usage to generate a cost estimate.",
      "It provides detailed breakdowns of production costs, making it easier to plan and allocate resources efficiently. It’s an essential tool for educational institutions that regularly develop online learning content.",
    ],
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
    year: "2014",
    role: "Single Full Stack Developer",
  },
  {
    image: dnaPoliImage,
    title: "DNA Poli",
    description:
      "This application helps patients with hereditary ailments invite their family members to undergo DNA testing. It streamlines genetic testing and familial outreach.",
    longDescription: [
      "DNA Poli is a specialized healthcare app developed to assist patients with hereditary conditions by simplifying the process of inviting family members for DNA testing. The app provides a user-friendly platform where patients can send personalized invitations to their relatives, helping to ensure that genetic risks are communicated effectively across families. This makes it easier for individuals to involve their loved ones in crucial health decisions.",
      "In addition to sending invitations, DNA Poli allows patients to schedule appointments and track testing results directly within the app. This streamlined approach eliminates the hassle of traditional paperwork and phone calls, making the process more efficient and accessible. Patients can follow the progress of their family members' tests and receive updates in real-time, fostering better communication and proactive healthcare management.",
      "To ensure privacy and accuracy, DNA Poli integrates seamlessly with hospital systems, securely managing patient data and genetic information. The app adheres to strict medical data standards, safeguarding patient confidentiality while providing healthcare providers with the tools needed to coordinate genetic testing efficiently. By doing so, DNA Poli supports both patients and healthcare professionals in managing hereditary health risks more effectively.",
    ],
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
    year: "2024",
    role: "Lead developer",
  },
  {
    image: campaignImage,
    title: "UMC and WKZ Campaigns",
    description:
      "This application enables Marketing and Communications to create and manage campaigns. One notable feature is the timeline, which allows care paths for patients to be planned and displayed.",
    longDescription: [
      "UMC and WKZ Campaigns is a specialized tool created for marketing and communications teams, enabling them to efficiently manage and create impactful campaigns. One of the app's standout features is its timeline capability, which allows medical professionals to visually map out patient care paths, making it easier to communicate complex medical journeys.",
      "In addition to its core features, UMC and WKZ Campaigns integrates seamlessly with existing marketing tools, enhancing productivity and offering detailed analytics to track campaign performance. The app simplifies the process of creating educational campaigns that empower patients, helping them understand their treatment options and care plans more effectively.",
    ],
    languages: [
      "Kontent.AI headless CMS",
      "React",
      "Razor pages",
      "MVC",
      "Azure DevOps",
    ],
    link: "https://www.umcutrecht.nl/nl/info/mr-linac",
    year: "2023",
    role: "Single Full Stack Developer",
  },
  {
    image: loopbaanEnqueteImage,
    title: "Career Survey",
    description:
      "This application enables departments to follow employees' perceptions of their career development. It tracks career growth and satisfaction within organizations.",
    longDescription: [
      "Career Survey is a powerful tool designed to assist HR departments and managers in understanding employee perceptions regarding their career development. The app provides a user-friendly platform where employees can complete surveys about their career satisfaction, growth opportunities, and future aspirations. This feedback helps organizations tailor their career development programs and strategies, ultimately fostering a more engaged and motivated workforce.",
      "With its customizable surveys and robust reporting capabilities, Career Survey generates detailed insights into career satisfaction trends within the organization. These insights enable businesses to make data-driven decisions about employee retention and career growth initiatives, ensuring that they support employees' ambitions while meeting organizational goals.",
    ],
    languages: [
      "HTML",
      "LESS",
      "jQuery",
      "JavaScript",
      "Azure DevOps",
      "Bootstrap",
    ],
    link: "https://loopbaanenquete.azurewebsites.net/",
    year: "2014",
    role: "Single Full Stack Developer",
  },
  {
    image: gameRealmImage,
    title: "GameRealm",
    description:
      "GameRealm is a platform for gamers and indie game developers. It allows gamers to find popular games and developers to showcase their work.",
    longDescription: [
      "GameRealm is a hobby project developed to create a dedicated online platform for both gamers and indie game developers. It allows gamers to discover the latest and most popular games, while providing developers with a space to showcase their creations to a wider audience.",
      "The platform is community-driven and features social tools such as discussion forums and a rating system to highlight top games. GameRealm fosters a strong connection between gamers and developers, making it a valuable resource for discovering and sharing indie game projects.",
    ],
    languages: ["HTML", "LESS", "jQuery", "JavaScript", "PHP", "SQL"],
    link: "",
    year: "2012",
    role: "Lead developer",
  },
  {
    image: memesImage,
    title: "I Want One of Those Memes",
    description:
      "I Want One of Those Memes is a side project and business venture created to sell meme merchandise. It is a fun and engaging platform for meme enthusiasts.",
    longDescription: [
      "I Want One of Those Memes is an e-commerce platform built as a side project to capitalize on the growing popularity of internet meme culture. The platform offers a variety of merchandise, including t-shirts, mugs, and more, all featuring trending and humorous memes. The goal was to create a lighthearted shopping experience for meme enthusiasts who want to bring their favorite internet jokes into their daily lives.",
      "The platform integrates with online stores and print-on-demand services, ensuring quick fulfillment and reliable global shipping. Whether you're a casual meme lover or a die-hard fan, I Want One of Those Memes offers a fun and efficient way to shop for unique, meme-themed products.",
    ],
    languages: ["HTML", "LESS", "jQuery", "JavaScript", "SpreadShirt"],
    link: "",
    year: "2012",
    role: "Owner and creator",
  },
];
