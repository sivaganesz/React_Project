import React, { useState } from 'react';
import Button from '../Button-components/Button';
import InputFields from '../Button-components/InputFields';
import { Link } from "react-router-dom";

interface RegisterProps {
  username: string;
  email: string;
  mobilephone: string;
  password: string;
  gender: string
}

const Register = () => {

  const [formData, setFormData] = useState<RegisterProps>({
    username: "",
    email: "",
    mobilephone: "",
    password: "",
    gender: ""
  })

  const ChangeHandleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value : value
    }))
  }
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      mobilephone: "",
      password: "",
      gender: ""
    })
  }

  return (
    <div className="flex justify-center items-center min-h-screen p-5 sm:p-0">
      <div className="w-80 sm:w-100 border rounded-lg p-6 shadow-md">
        <h1 className="text-center text-3xl font-semibold mb-4">Register</h1>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <InputFields type="text" name="username" placeholder="Enter your Name" onchange={ChangeHandleInput} required value={formData.username} />
          <InputFields type="email" name="email" placeholder="Enter your Email" onchange={ChangeHandleInput} required value={formData.email} />
          <InputFields type="tel" name="mobilephone" placeholder="Enter your Mobile No." onchange={ChangeHandleInput} required value={formData.mobilephone} />
          <InputFields type="password" name="password" placeholder="Enter your Password" onchange={ChangeHandleInput} required value={formData.password} />
          <InputFields type='radio' name='gender' placeholder='Select Gender' onchange={ChangeHandleInput}
            options={[
              { label: "Male", value: "male" },
              { label: "Female", value: "female" },
            ]} required />
          <Button type='sumbit' className="w-full bg-black text-white py-2 rounded-lg hover:scale-105 transition-all duration-200" buttonName="Sign Up" />
        </form>

        <Link to="/">
          <p className="text-center mt-3 text-gray-600 hover:scale-105 transition-all duration-150 cursor-pointer">
            Already have an Account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
