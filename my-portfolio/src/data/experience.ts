import { Experience } from "../types";

export const experiences: Experience[] = [
  {
    id: 2,
    company: "Lumient",
    position: "Software Engineer",
    duration: "2022 - 2025",
    description: [
      "Built scalable ASP.NET Core apps with RESTful APIs (SQL/PostgreSQL), optimising performance to slash response times by 30%",
      "Led 5-dev Agile squad, mentoring juniors on C#/.NET Core patterns while delivering features on schedule",
      "Migrated legacy WCF services to .NET Core APIs, cutting tech debt and boosting maintainability",
      "Automated CI/CD pipelines via Azure DevOps + PowerShell, halving deployment time",
      "Dropped SQL query times 40% through indexing tweaks and query optimisation",
      "Managed Windows Server environments, including IIS configs and SSL certs for secure services",
      "Crafted responsive UIs with React, Vue.js, Next.js, TypeScript, and Tailwind/Bootstrap, lifting customer satisfaction 25%",
      "Built automated test suites (xUnit/Jest/Cypress) to hit 90% coverage, reducing prod bugs by 60%",
      "Spearheaded frontend modernisation using Next.js SSR and TS type-safety for complex workflows",
      "Collaborated with cross-functional teams to align solutions with biz objectives and UX standards",
    ],
    projects: [
      {
        image: "/images/spacelogic-c-bus.jpeg",
        alt: "Spacelogic C-bus",
        url: "https://www.se.com/au/en/work/products/product-launch/local/c-bus.jsp",
      },
      {
        image: "/images/elders_solar_panels_roof_ravenhall.jpeg",
        alt: "Elders Solar Panels Roof Ravenhall",
        url: "https://elders.com.au/our-services/news-advice/2023/elders-delivering-end-to-end-wool-handling-service/",
      },
      {
        image: "/images/SARDI_Lockup_Full_Colour_RGB.jpg",
        alt: "SARDI",
        url: "https://pir.sa.gov.au/research",
      },
      {
        image: "/images/jive_connect.jpeg",
        alt: "Jive Connect",
        url: "https://www.jiveconnect.com.au/",
      },
    ],
  },
  {
    id: 3,
    company: "Shanghai Seehoo",
    position: "Junior Developer",
    duration: "2018 - 2020",
    description: [
      "Built responsive React/TS web apps with Redux, slashing page load times by 15% for 500+ users",
      "Developed Java REST APIs (Spring Boot, JPA, Hibernate) to crunch financial data 20% faster",
      "Optimised Oracle DB queries & migrations for real-time insights & scalable biz decisions",
      "Coded C#/.NET Core services with Entity Framework, streamlining SQL Server data workflows",
      "Tuned SQL Server performance + hit 90% test coverage (JUnit/NUnit), cutting bugs by 30%",
    ],
    projects: [
      {
        image: "/images/cdb-leasing.jpg",
        alt: "Cdb Leasing",
        url: "http://www.cdb-leasing.com/English/",
      },
      {
        image: "/images/dasouche.png",
        alt: "Dasouche",
        url: "https://www.dasouche.com/en",
      },
    ],
  },
];
