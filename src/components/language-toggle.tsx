"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <Button
      variant="ghost"
      type="button"
      size="icon"
      className="size-12 font-bold text-xs"
      onClick={toggleLanguage}
    >
      {language === "en" ? "EN" : "PT"}
      <span className="sr-only">{t.toggle_language_label}</span>
    </Button>
  );
}
