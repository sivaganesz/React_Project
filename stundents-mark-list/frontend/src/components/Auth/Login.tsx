import { Link, useNavigate } from "react-router-dom";
import Button from "../Button-components/Button";
import InputFields from "../Button-components/InputFields";
import { useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    gender: null,
  });

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value, // Handle radio button separately
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    navigate("/studentInfo");
    // Reset form
    setFormData({
      email: "",
      password: "",
      gender: null,
    });
  };

  return (
    <div className="flex justify-center items-center mt-30 p-5 sm:p-0">
    <div className="w-80 sm:w-96 border shadow-md rounded-lg p-6">
      <h1 className="text-center text-3xl font-semibold mb-4">Login</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputFields
            type="email"
            name="email"
            placeholder="Enter your Email"
            onchange={handleInputChange}
            value={formData.email}
            required
          />
          <InputFields
            type="password"
            name="password"
            placeholder="Enter your Password"
            onchange={handleInputChange}
            value={formData.password}
            required
          />
          <InputFields
            type="radio"
            name="gender"
            placeholder="Select Gender:"
            onchange={handleInputChange}
            required
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]}/>

          <Button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg hover:scale-105 transition duration-200"
            buttonName="Login"
          />
        </form>

        <div className="mt-4 flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between text-sm text-gray-600 text-center sm:text-left">
          <span className="hover:text-blue-600 cursor-pointer transition-all">
            Forgot Password?
            </span>
          <Link to="/register" className="hover:text-blue-600 transition-all">
            Don't have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
