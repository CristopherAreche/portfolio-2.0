"use client";

import { useLanguage } from "@/app/language-provider";

const SkipToContentLink = () => {
  const { t } = useLanguage();

  return (
    <a href="#main-content" className="skip-to-content">
      {t.layout.skipToContent}
    </a>
  );
};

export default SkipToContentLink;
