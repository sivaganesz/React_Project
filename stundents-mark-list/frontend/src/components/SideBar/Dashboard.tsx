import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const cgpaData = [
  { year: "First Year", cgpa: 10, sem1: 7.9, sem2: 8.2 },
  { year: "Second Year", cgpa: 10, sem1: 8.3, sem2: 8.4 },
  { year: "Pre-Final Year", cgpa: 10, sem1: 8.2, sem2: 7.9 },
  { year: "Final Year", cgpa: 10, sem1: 8.1, sem2: 8.0 },
];

const Dashboard = () => {
  return (
    <>
      <div className="pt-10 px-3">
        {/* Profile Section */}

        <div className="grid grid-cols-1 md:grid-cols-5 gap-y-2 sm:gap-3">

          <div className="col-span-1 border p-4 shadow-md rounded-lg flex justify-center items-center">
            <img
              src={"https://th.bing.com/th/id/OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw?rs=1&pid=ImgDetMain"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover bg-amber-300"
            />
          </div>

          <div className="col-span-3 border text-center p-4 shadow-md rounded-lg">
            <h1 className="text-2xl font-semibold py-2">SIVAMUTHU NARAYANA SABARIGANESH A</h1>
            <h1 className="text-md">
              <span className="font-semibold">Department:</span> INFORMATION TECHNOLOGY
            </h1>
            <div className="flex-none sm:flex justify-center gap-4 mt-2">
              <h1 className="text-md">
                <span className="font-semibold">Course:</span> B.Tech
              </h1>
              <h1 className="text-md">
                <span className="font-semibold">Academic Year:</span> 2024 - 2025
              </h1>
            </div>
          </div>

          <div className="col-span-1 border p-4 shadow-md rounded-lg text-center">
            <h1 className="text-lg font-medium">
              Year <span className="block text-xl font-semibold">4</span>
            </h1>
            <h1 className="text-lg font-medium mt-2">
              Semester <span className="block text-xl font-semibold">8</span>
            </h1>
          </div>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">

          <div className="border col-span-1 p-6 shadow-md rounded-lg">
            <h1 className="text-center font-semibold text-xl underline underline-offset-4 pb-4">
              Personal Information
            </h1>
            <div className="flex justify-center">
              <div className="space-y-3 w-full">
                {[
                  { label: "Roll No", value: "920421UIT024" },
                  { label: "Name", value: "SIVAMUTHU NARAYANA SABARIGANESH A" },
                  { label: "Gender", value: "Male" },
                  { label: "Date of Birth", value: "2004-01-08" },
                  { label: "Address", value: "30/36 B CHETTIYAR EAST STREET" },
                  { label: "City", value: "SATHANKULAM" },
                  { label: "Pincode", value: "628 704" },
                  { label: "District", value: "THOOTHUKUDI" },
                ].map(({ label, value }, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:items-center">
                    <span className="font-semibold w-36 ">{label}</span>
                    <span className="text-gray-700 w-full max-2xl">: {value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Bar Chart Container */}
          <div className="border col-span-1 p-6 shadow-md rounded-lg">
            <h1 className="text-center font-semibold text-xl underline underline-offset-4 pb-4">
              CGPA Progression
            </h1>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={cgpaData}>
                <XAxis dataKey="year" stroke="#8884d8" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sem1" fill="#82ca9d" name="Semester 1" />
                <Bar dataKey="sem2" fill="#8884d8" name="Semester 2" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
