import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiFolderMinus, FiPlus  } from "react-icons/fi";
import { FaRegFileLines } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { BiChart } from "react-icons/bi";
import { CiSettings } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import Logo from "../../assets/logo.png";
import Pic1 from "../../assets/pic6.jpg";
import Pic2 from "../../assets/pic4.jpg";
import Pic3 from "../../assets/pic5.jpg";
import Cirlced from "./Cirlced";

const Links = [
  {
    title: "creative",
    icon: <GoHome size={"1.5rem"} className="text-primary " />,
  },
  {
    title: "creative",
    icon: <MdOutlineMarkEmailUnread size={"1.5rem"} className="text-primary" />,
  },
  {
    title: "creative",
    icon: <FaRegFileLines size={"1.5rem"} className="text-primary" />,
  },
  {
    title: "creative",
    icon: <FiFolderMinus size={"1.5rem"} className="text-primary" />,
  },
  {
    title: "creative",
    icon: <BiChart size={"1.5rem"} className="text-primary" />,
  },
];

const DownLinks = [
  {
    title: "creative",
    icon: <CiSettings size={"1.5rem"} className="text-primary " />,
  },
  {
    title: "creative",
    icon: <IoPersonOutline size={"1.5rem"} className="text-primary" />,
  },
]

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);
  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-1 flex h-screen w-24 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-4.5 lg:py-3.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear relative">
        <nav className="mt-2 py-2 px-2 lg:mt-1 lg:px-6 relative">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {Links.map((navl, index) => (
                <NavLink
                  key={index}
                  to="/creative/website"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-1.5 px-1 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes(navl.title) &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <div>{navl.icon}</div>
                </NavLink>
              ))}
            </ul>
          </div>
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <Cirlced element={Pic3} type={"image"}/>
              <Cirlced element={Pic2} type={"image"}/>
              <Cirlced element={Pic1} type={"image"}/>
              <Cirlced element={<FiPlus className="text-primary "/>}/>
              </ul>
          </div>
          <div className="relative bottom-0">
            <ul className="mt-24 flex flex-col gap-1.5">
              {DownLinks.map((navl, index) => (
                <NavLink
                  key={index}
                  to="/creative/website"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-1 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes(navl.title) &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <div>{navl.icon}</div>
                </NavLink>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
