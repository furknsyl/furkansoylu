import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

export const LanguageToggle = ({ className }) => {
  const { i18n } = useTranslation();
  const isEnglish = i18n.language === "en";

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? "tr" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className={cn(
        "p-2 rounded-full transition-colors duration-300 focus:outline-none flex items-center gap-1",
        className
      )}
      aria-label="Toggle language"
    >
      <Globe className="h-5 w-5 text-primary" />
      <span className="text-xs font-semibold text-foreground">
        {isEnglish ? "EN" : "TR"}
      </span>
    </button>
  );
};