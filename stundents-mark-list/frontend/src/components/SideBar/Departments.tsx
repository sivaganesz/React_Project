import IT from "../../assets/departments/IT.png";
import CS from "../../assets/departments/CS.png";
import EC from "../../assets/departments/EC.png";
import Civil from "../../assets/departments/Civil.png";
import Mech from "../../assets/departments/Mech.png";
import { Link, Outlet } from "react-router-dom";

const Departments = () => {
  const departments = [
    { DepartmentName: "Information Technology", DepartmentImage: IT, path: "IT" },
    { DepartmentName: "Computer Science", DepartmentImage: CS, path: "CS" },
    { DepartmentName: "Electronics & Communication", DepartmentImage: EC, path: "EC" },
    { DepartmentName: "Mechanical Engineering", DepartmentImage: Mech, path: "Mech" }, // Fixed image mapping
    { DepartmentName: "Civil Engineering", DepartmentImage: Civil, path: "Civil" }, // Fixed image mapping
  ];

  return (
    <>
      <h1 className="my-5 lg:my-10 text-2xl font-bold uppercase text-center">Departments</h1>
      <div className="flex justify-center p-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-10 lg:gap-x-16 text-center">
          {departments.map((items, index) => (
            <Link key={index} to={`/studentInfo/Departments/${items.path}`}>
              <div className="p-4 h-36 md:h-auto bg-gray-100 rounded-lg shadow-md flex flex-col items-center hover:scale-105 transition-all duration-300">
                <h1 className="uppercase font-semibold py-3">{items.DepartmentName}</h1>
                <img src={items.DepartmentImage} alt="Department" className="w-10 h-10 mb-2" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Departments;
