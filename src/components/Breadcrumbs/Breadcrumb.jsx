import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslation } from "react-i18next";

const Breadcrumb = ({ pageName }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium text-primary" to="/">
              {t("workspaces")}
            </Link>
          </li>
          <span>
            {" "}
            <IoIosArrowForward className="text-primary" />
          </span>
          <li>
            <Link className="font-medium text-primary" to="/">
              {t("creative")}
            </Link>
          </li>
          <span>
            {" "}
            <IoIosArrowForward className="text-primary" />
          </span>
          <li className="font-medium dark:text-white">{pageName}</li>
        </ol>
      </nav>
      <div className="flex sm:items-end flex-col justify-center sm:mb-0 mb-4">
        <h6 className="font-bold text-black dark:text-white">{t("from")} 23 {t("april")}</h6>
        <h6 className="text-primary dark:text-white text-sm">{t("updated")}</h6>
      </div>
    </div>
  );
};

export default Breadcrumb;
