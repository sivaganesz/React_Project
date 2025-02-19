import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Menubar from "../../assets/menubar.png";
import Dashboard from "../../assets/dashboard.png";
import Students from "../../assets/students.png";
import Departments from "../../assets/departmet.png";
import Exams from "../../assets/exam.png";
import Courses from "../../assets/courses.png";
import SemesterMarkResult from '../../InternalMarks.json';

const menuItems = [
  { icon: Dashboard, name: "Dashboard", path: "." },
  { icon: Students, name: "Internal Marks", path: ".", hasDropDown: true },
  { icon: Departments, name: "Departments", path: "Departments" },
  { icon: Exams, name: "Exams", path: "Exams" },
  { icon: Courses, name: "setting", path: "Courses" },
];

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeDropDown, setActiveDropDown] = useState<string | null>(null);
  const [mobileSemesterOpen, setMobileSemesterOpen] = useState(false);

  const toggleDropDown = (name: string) => {
    setActiveDropDown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`${isOpen ? "w-[5rem] sm:w-[20rem]" : "w-20"} 
        sticky top-0 h-screen transition-all duration-500 rounded-r border bg-blue-950 overflow-y-auto`}
      >
        <div className="mt-4 flex justify-end pr-4.5">
          <img
            src={Menubar}
            alt="Menu"
            className="w-6 h-6 cursor-pointer hover:scale-105 "
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>

        <div className="mt-10 flex flex-col gap-3 px-4 ml-2">
          {menuItems.map(({ icon, name, path, hasDropDown }, index) => (
            <div key={index}>
              <Link to={path}>
                <div
                  className="flex items-center gap-4 py-3 text-white hover:scale-105 transition-all"
                  onClick={() => {
                    if (hasDropDown) {
                      if (window.innerWidth < 768) {
                        setMobileSemesterOpen(!mobileSemesterOpen);
                      } else {
                        toggleDropDown(name);
                      }
                    }
                  }}
                >
                  <img src={icon} alt={name} className="w-7 h-7" />
                  {isOpen && <span className="hidden sm:block">{name}</span>}
                </div>
              </Link>

              {/* Semester Dropdown - Desktop */}
              {hasDropDown && activeDropDown === name && isOpen && window.innerWidth >= 768 && (
                <div className="ml-10 flex flex-col text-gray-300 gap-3">
                  {SemesterMarkResult.map((_, index) => (
                    <NavLink
                      key={index}
                      to={`/studentInfo/Students/semester/${index + 1}`}
                      className={({ isActive }) =>
                        `hover:scale-105 hover:ml-2 transition-all hidden sm:block duration-200 py-2 ${isActive ? "text-amber-400" : ""}`
                      }
                    >
                      Semester {index + 1}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Semester Slide-In */}
      {mobileSemesterOpen && (
        <div className="fixed inset-x-0 inset-0 mt-18 ml-16 backdrop-blur-lg bg-opacity-50 flex justify-center items-center z-1">
          <div className="bg-white p-5 rounded-lg w-auto h-auto shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Select Semester</h2>
            <div className="flex flex-col text-gray-700">
              {SemesterMarkResult.map((_, index) => (
                <NavLink
                  key={index} to={`/studentInfo/Students/semester/${index + 1}`} 
                  className="py-2 hover:text-blue-600" onClick={() => setMobileSemesterOpen(false)}
                >
                  Semester {index + 1}
                </NavLink>
              ))}
            </div>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg" onClick={() => setMobileSemesterOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}

      <div className="w-full transition-all duration-500">
        <Outlet />
      </div>
    </div>
  );
};

export default SideBar;
