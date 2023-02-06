import LocalStorage from "../../../../utils/LocalStorage";

export const setLanguage = () => {
  const ls = new LocalStorage("froggy");
  const language = ls.get("language") || "en";
  const langNode = document.querySelector(
    ".controls-language"
  ) as HTMLDivElement;
  langNode.textContent = language;
};

export const toggleLanguage = () => {
  const ls = new LocalStorage("froggy");
  let language = ls.get("language") || "en";
  language = language === "en" ? "ru" : "en";
  ls.set("language", language);

  const langNode = document.querySelector(
    ".controls-language"
  ) as HTMLDivElement;
  langNode.textContent = language;
};
