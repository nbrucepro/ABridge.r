import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const SingleTodo = ({ onClose }) => {
  const { t } = useTranslation();
  const popup = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popup.current && !popup.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 flex justify-end h-screen z-9999 bg-opacity-50">
      <div ref={popup} className="modal bg-white w-70 rounded-lg p-8 shadow-md">
        <div className="flex justify-between">
          <h2 className="text-sm font-bold mb-4 dark:text-black">
            {t("project_overview")}
          </h2>
          <h2 className="text-sm font-bold mb-4 dark:text-black">
            {t("see_all")}
          </h2>
        </div>
        <div className="flex flex-col bg-[#F6F8FA] p-2 border-l-4 border-secondary">
          <div className="flex justify-between">
            <h2>{t("timeline")}</h2>
            <h2>{t("april")}</h2>
          </div>
          <div className="flex justify-between">
            <h2>{t("team")}</h2>
            <h2>{t("april")}</h2>
          </div>
          <div className="flex justify-between">
            <h2>{t("status")}</h2>
            <h2>{t("in_progress")}</h2>
          </div>
        </div>
        <h2 className="mt-40 font-bold font-satoshi italic">
          Others coming soon...
        </h2>
      </div>
    </div>
  );
};

export default SingleTodo;
