"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LanguageCode } from "@/types";
import { uiTranslations } from "@/utils/i18n";

const LANGUAGE_STORAGE_KEY = "portfolio.lang.v1";

interface LanguageContextValue {
  language: LanguageCode;
  setLanguage: (value: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<LanguageCode>("en");

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (storedLanguage === "en" || storedLanguage === "es") {
      setLanguageState(storedLanguage);
    }
  }, []);

  const setLanguage = useCallback((value: LanguageCode) => {
    setLanguageState(value);
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, value);
  }, []);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
    }),
    [language, setLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return {
    ...context,
    t: uiTranslations[context.language],
  };
}
