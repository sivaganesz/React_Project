import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { XCircle } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";

interface registerProps {
  id: number,
  name: string,
  email: string,
  phonenumber: string,
  image: string
}
interface AddProps {
  userValue: (value: registerProps) => void;
  refreshData?: () => void;
  closeModal: () => void;
  editData?: registerProps | null;
}

const AddUser: React.FC<AddProps> = ({ userValue, refreshData, closeModal, editData }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<registerProps>();

  useEffect(() => {
    if (editData) {
      setValue("name", editData.name);
      setValue("email", editData.email);
      setValue("phonenumber", editData.phonenumber);
      setValue("image", editData.image);
    }
  }, [editData, setValue]);

  const onsubmit = async (data: registerProps) => {
    if (editData) {
      await axios.put(`http://localhost:8000/students/${editData.id}`, data);
      toast.success("User updated successfully!");

      if (refreshData) {
        refreshData();
      }
    } else {
      userValue(data);
    }
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center backdrop-blur-xs bg-opacity-30  w-full">
      <div className="relative m-10 shadow-lg shadow-black/30 rounded-xl p-6 w-[450px] bg-white">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <XCircle size={24} />
        </button>
        <h1 className="font-bold text-3xl text-center">{editData ? "Edit User" : "Add New User"}</h1>
        <form onSubmit={handleSubmit(onsubmit)} className="space-y-4 mt-4">
          {/* <input type="hidden" {...register("id")} /> */}
          <div>
            <label className="text-gray-600 font-semibold">Name:</label>
            <input
              type="text"
              {...register("name", { required: "Enter the name" })}
              placeholder="Enter Your Name"
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
            <p className="text-red-400">{errors.name?.message}</p>
          </div>
          <div>
            <label className="text-gray-600 font-semibold">Email:</label>
            <input
              type="email"
              {...register("email", { required: "Enter the email" })}
              placeholder="Enter Your Email"
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
            <p className="text-red-400">{errors.email?.message}</p>
          </div>
          <div>
            <label className="text-gray-600 font-semibold">Number:</label>
            <input
              type="text"
              {...register("phonenumber", { required: "Enter the phone number" })}
              placeholder="Enter Your Mobile Number"
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
            <p className="text-red-400">{errors.phonenumber?.message}</p>
          </div>
          <div>
            <label className="text-gray-600 font-semibold">Image URL:</label>
            <input
              type="text"
              {...register("image", { required: "Enter the image URL" })}
              placeholder="Enter Image URL"
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
            <p className="text-red-400">{errors.image?.message}</p>
          </div>
          <div className="py-4">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-800 text-white px-7 py-2 rounded block mx-auto"
            >
              {editData ? "Update User" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
