import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Restoran Sipariş Yönetim Sistemi",
    description: "Bu projeyi ASP.NET Core 8.0 ve SignalR teknolojilerini kullanarak geliştirdim. Restoran sipariş yönetimini kolaylaştırmak amacıyla tasarladığım bu sistemde, kullanıcılar QR kodlarını tarayarak menüye erişebilir, sipariş verebilir ve rezervasyon oluşturabilir. Siparişler, anlık olarak mutfağa iletilirken, tüm süreçler gerçek zamanlı yönetilebiliyor.",
    image: "/projects/project1.png",
    tags: [".Net Core", "SignalR", "Mssql"],
    demoUrl: "https://github.com/furknsyl/SignalR-ile-Restoran-Siparis-Yonetimi",
    githubUrl: "https://github.com/furknsyl/SignalR-ile-Restoran-Siparis-Yonetimi",
  },
  {
    id: 2,
    title: "Otel Kiralama Websitesi",
    description:
      "Asp.Net Core kullanarak N Tier mimaride otel kiralama sitesi geliştirdim. Asp.Net Identity ve JWT ile güvenli kullanıcı kayıt ve giriş işlemleri sağladım. Entity Framework Core ile veri yönetimini gerçekleştirdim. Swagger ve Postman ile API testlerini yaptım. Fluent Validation ile kullanıcı verilerini doğruladım ve mailing sistemiyle kullanıcı bildirimleri gönderdim.",
    image: "/projects/project2.png",
    tags: [".Net Core", "Rapid API", "Mssql"],
    demoUrl: "https://github.com/furknsyl/HotelAPI",
    githubUrl: "https://github.com/furknsyl/HotelAPI",
  },
  {
    id: 3,
    title: "AI Görüntü Oluşturucu",
    description:
      "Bu projeyi React ile kendim geliştirdim. Kullanıcıların yazdıkları metinlere göre yapay zeka destekli görseller oluşturmasını sağlamak için OpenAI’nin DALL·E API’sini entegre ettim. Basit ve kullanışlı arayüz sayesinde kullanıcılar metin girip, yapay zeka tarafından oluşturulan resimleri görebiliyor. React komponent yapısı ve API çağrılarını etkin kullandım, böylece hem yapay zeka teknolojilerini deneyimledim hem de frontend yeteneklerimi geliştirdim.",
    image: "/projects/project3.png",
    tags: ["React", "OpenAI", "DALL-E"],
    demoUrl: "https://github.com/furknsyl/ReactProjects/tree/main/ReactProjects/ai-image-generator",
    githubUrl: "https://github.com/furknsyl/ReactProjects/tree/main/ReactProjects/ai-image-generator",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Bazı <span className="text-primary"> Projelerim </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          İşte geliştirdiğim projelerden bazıları. Her biri detaylara, performansa ve kullanıcı deneyimine özen gösterilerek titizlikle hazırlandı.
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
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
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
            Daha fazlası için GitHub’ımı inceleyin <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
