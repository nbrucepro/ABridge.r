import React from "react";
import { useTranslation } from "react-i18next";

const LocaleSwitcher = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="locale-switcher">
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        className="cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-secondary focus:border-secondary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-secondary dark:focus:border-secondary"
      >
        <option className="cursor-pointer hover:bg-secondary" value="en">
          {t("english")}
        </option>
        <option className="cursor-pointer hover:bg-secondary" value="fr">
          {t("french")}
        </option>
      </select>
    </div>
  );
};

export default LocaleSwitcher;
