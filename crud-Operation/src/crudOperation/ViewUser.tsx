import React from "react";
import { XCircle } from "lucide-react";

interface FieldsAttribute {
  name: string;
  email: string;
  phonenumber: string;
  image: string;
}

interface ViewProps {
  userValue: FieldsAttribute;
  closeModal: () => void; // Function to close modal
}

const ViewUser: React.FC<ViewProps> = ({ userValue, closeModal }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-30 backdrop-blur-xs">

      <div className="relative bg-white shadow-lg shadow-black/30 rounded-xl p-6 w-96">

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-500 transition"
        >
          <XCircle size={24} />
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          User Details
        </h2>

        <div className="space-y-4">
          <div className="flex justify-center">
            <img src={userValue.image} className="rounded-full w-16 h-16" alt="User Avatar" />
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Name:</label>
            <input
              type="text"
              value={userValue.name}
              readOnly
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Email:</label>
            <input
              type="text"
              value={userValue.email}
              readOnly
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>

          <div>
            <label className="text-gray-600 font-semibold">Phone Number:</label>
            <input
              type="text"
              value={userValue.phonenumber}
              readOnly
              className="w-full mt-1 border-gray-300 rounded-lg p-2 bg-gray-100"
            />
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="mt-5 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewUser;
