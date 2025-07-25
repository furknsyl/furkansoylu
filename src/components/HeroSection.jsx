import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Merhaba, Ben </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Furkan
            </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Soylu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Kendine güvenen, sürekli öğrenmeye açık ve yenilikçi çözümler üretmeye odaklı bir full stack geliştiriciyim. Amacım, teknolojiyle değer katan işler ortaya koymak ve yazılım dünyasında fark yaratmak.
          </p>


          <div className="pt-4 flex justify-center opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button inline-flex items-center">
              Geliştirdiğim Projeler İçin Tıklayınız
            </a>
          </div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Kaydır </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
