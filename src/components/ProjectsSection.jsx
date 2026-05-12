import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { useTranslation } from "react-i18next";

const projects = [
  {
    id: 1,
    titleKey: "projects.project1Title",
    descKey: "projects.project1Desc",
    image: "/projects/project1.png",
    tags: [".Net Core", "SignalR", "Mssql"],
    demoUrl: "https://github.com/furknsyl/SignalR-ile-Restoran-Siparis-Yonetimi",
    githubUrl: "https://github.com/furknsyl/SignalR-ile-Restoran-Siparis-Yonetimi",
  },
  {
    id: 2,
    titleKey: "projects.project2Title",
    descKey: "projects.project2Desc",
    image: "/projects/project2.png",
    tags: [".Net Core", "Rapid API", "Mssql"],
    demoUrl: "https://github.com/furknsyl/HotelAPI",
    githubUrl: "https://github.com/furknsyl/HotelAPI",
  },
  {
    id: 3,
    titleKey: "projects.project3Title",
    descKey: "projects.project3Desc",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "DALL-E"],
    demoUrl: "https://github.com/furknsyl/ReactProjects/tree/main/ReactProjects/ai-image-generator",
    githubUrl: "https://github.com/furknsyl/ReactProjects/tree/main/ReactProjects/ai-image-generator",
  },
];

export const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {t("projects.titlePrefix")} <span className="text-primary"> {t("projects.titleHighlight")} </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          {t("projects.subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {t(project.titleKey)}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {t(project.descKey)}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/furknsyl"
          >
            {t("projects.github")} <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
