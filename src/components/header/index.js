import { changeLanguage } from "i18next";
import { useEffect, useState } from "react";

const LANGUAGE = "language";

const Header = () => {
  const [selectedLangue, setLanguage] = useState("fr");

  const handleLanguageChange = (event) => {
    const language = event.target.value;
    changeLanguage(language);
    localStorage.setItem(LANGUAGE, language);

    setLanguage(language);
  };

  useEffect(() => {
    const language = localStorage[LANGUAGE];
    if (language) {
      changeLanguage(language);
      setLanguage(language);
    }
  }, []);

  return (
    <div>
      <image src="./log" />
      <select value={selectedLangue} onChange={handleLanguageChange}>
        <option value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
};

export default Header;
