import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

const Breadcrumb = ({ pageName }) => {
  return (
    <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
      <nav>
        <ol className="flex items-center gap-2">
          <li>
            <Link className="font-medium text-primary" to="/">
              Workspaces
            </Link>
          </li>
          <span>
            {" "}
            <IoIosArrowForward className="text-primary" />
          </span>
          <li>
            <Link className="font-medium text-primary" to="/">
              Creative
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
        <h6 className="font-bold text-black dark:text-white">From 23 April</h6>
        <h6 className="text-primary dark:text-white text-sm">Updated 12 min ago</h6>
      </div>
    </div>
  );
};

export default Breadcrumb;
