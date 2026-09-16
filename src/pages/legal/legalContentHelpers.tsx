import React from "react";

export type Lang = "tr" | "en";

export const formatDate = (iso: string, lang: Lang) =>
  new Date(iso).toLocaleDateString(lang === "tr" ? "tr-TR" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export const Mail: React.FC<{ email: string; subject?: string }> = ({
  email,
  subject,
}) => (
  <a
    className="text-primary hover:underline"
    href={`mailto:${email}${subject ? `?subject=${encodeURIComponent(subject)}` : ""}`}
  >
    {email}
  </a>
);
