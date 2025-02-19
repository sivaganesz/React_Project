import { Link, useParams } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";
import back from "../../assets/logout.png"
const Department = () => {
    const { id } = useParams<{ id: string }>();
    // Student Strength Per Year (Bar Chart)
    const studentData = [
        { year: "1st Year", students: 50, age: 0 },
        { year: "2nd Year", students: 45, age: 0 },
        { year: "3rd Year", students: 40, age: 0 },
        { year: "Final Year", students: 35, age: 0 },
    ];

    // Gender Ratio (Pie Chart)
    const genderData = [
        { name: "Boys", value: 90 },
        { name: "Girls", value: 60 },
    ];
    const COLORS = ["#4F46E5", "#EC4899"];

    return (
        <div className="p-8 bg-gray-50 min-h-screen">
            {/* Department Title */}
            <div className="">
                <Link to={`/studentInfo/Departments/`}><img src={back} alt="" className="w-5 h-5"/></Link>
                <h1 className="my-5 lg:mb-10 text-3xl font-bold uppercase text-center text-gray-800">{id} Technology</h1>

            </div>
            {/* Stats Section */}
            <div className="flex flex-wrap justify-center gap-10">
                <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white w-80 text-center h-28 rounded-lg shadow-lg flex flex-col justify-center">
                    <h1 className="text-lg font-semibold">Total Students</h1>
                    <span className="text-3xl font-bold">170</span>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white w-80 text-center h-28 rounded-lg shadow-lg flex flex-col justify-center">
                    <h1 className="text-lg font-semibold">Total Teachers</h1>
                    <span className="text-3xl font-bold">20</span>
                </div>
            </div>

            {/* New Status Section */}
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-gray-700">Pass Percentage</h2>
                    <span className="text-3xl font-bold text-green-600">92%</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-gray-700">Placement Rate</h2>
                    <span className="text-3xl font-bold text-blue-600">80%</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-gray-700">Ongoing Projects</h2>
                    <span className="text-3xl font-bold text-purple-600">5</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                    <h2 className="text-lg font-semibold text-gray-700">Workshops Held</h2>
                    <span className="text-3xl font-bold text-yellow-600">12</span>
                </div>
            </div>

            {/* Charts Section */}
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Bar Chart: Student Strength Per Year */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Student Strength Per Year</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart
                            data={studentData}
                            margin={window.innerWidth < 640 ? { left: -20, right: 0 } : { left: 0, right: 0 }}
                        >

                            <XAxis
                                dataKey="year"
                                // stroke="#4F46E5"
                                tickSize={window.innerWidth < 640 ? 8 : 12} // Reduce tick size on mobile
                                textAnchor={window.innerWidth < 640 ? "" : "middle"}
                            />
                            <YAxis stroke="#4F46E5" />
                            <Tooltip />
                            <Bar
                                dataKey="students"
                                fill="#6366F1"
                                barSize={window.innerWidth < 640 ? 30 : 50} // Adjust bar width
                                radius={[5, 5, 0, 0]}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>

                {/* Pie Chart: Gender Ratio */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-xl font-semibold text-center mb-4 text-gray-700">Gender Ratio</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={genderData} dataKey="value" cx="50%" cy="50%"
                                outerRadius={100} innerRadius={50} label stroke="white"
                            >
                                {genderData.map((_, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Department;
