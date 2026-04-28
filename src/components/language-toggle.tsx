"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/language-provider";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

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
      <span className="sr-only">Toggle language</span>
    </Button>
  );
}
