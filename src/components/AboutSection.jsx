import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Benim <span className="text-primary"> Hakkımda</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Tutkulu Yazılım Geliştiricisi & Teknoloji Meraklısı
            </h3>

            <p className="text-muted-foreground">
              Bilişim sistemleri mühendisliği öğrencisi olarak, full-stack geliştirme, veri bilimi ve veritabanı yönetimi alanlarında kendimi sürekli geliştiriyorum. Modern teknolojilerle işlevsel, erişilebilir ve kullanıcı odaklı çözümler üretmeye odaklanıyorum.
            </p>

            <p className="text-muted-foreground">
              Karmaşık problemleri sade ve etkili yöntemlerle çözmekten büyük keyif alıyorum. Sürekli öğrenmeye olan ilgim sayesinde, yazılım dünyasındaki gelişmeleri yakından takip ediyor ve kendimi her gün bir adım ileri taşımaya çalışıyorum.
            </p>
            <p className="text-muted-foreground">
              Benim hakkımda daha fazla bilgi için lütfen aşağıdan cv'yi indiriniz...
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                İletişime Geç
              </a>

              <a
                href="/FurkanSoyluCV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                CV İndir
              </a>

            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Geliştirme</h4>
                  <p className="text-muted-foreground">
                    Modern framework'ler kullanarak duyarlı web siteleri ve web uygulamaları geliştiriyorum.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Veri Analizi & Yönetimi</h4>
                  <p className="text-muted-foreground">
                    Verileri analiz ediyor, anlamlı içgörüler çıkarıyor ve etkili veri yönetim çözümleri geliştiriyorum.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Yazılım Geliştirme Süreçleri</h4>
                  <p className="text-muted-foreground">
                    Planlamadan geliştirmeye kadar yazılım projelerinin tüm aşamalarında aktif rol alıyor, çevik yöntemlerle etkili çözümler üretiyorum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
