import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/SideBar/Dashboard";
import Students from "./components/SideBar/Students";
import Departments from "./components/SideBar/Departments";
import Department from "./components/SideBar/Department"; // Corrected import
import Exams from "./components/SideBar/Exams";
import Courses from "./components/SideBar/Courses";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import RootLayout from "./components/Navigation-Bars/RootLayout";
import SemesterResult from "./components/SideBar/semesterResultPage/SemesterResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="studentInfo" element={<RootLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="Students" element={<Students />}>
            <Route path="semester/:id" element={<SemesterResult />} />
          </Route>
          <Route path="Departments" element={<Departments />} />
          <Route path="Departments/:id" element={<Department />} />

          <Route path="Exams" element={<Exams />} />
          <Route path="Courses" element={<Courses />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
