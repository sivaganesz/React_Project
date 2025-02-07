import axios from "axios";
import React, { useEffect, useState } from "react";
import ViewUser from "./ViewUser";
import AddUser from "./AddUser";
import {toast} from 'react-toastify'

interface FieldsAttribute {
  id: number;
  name: string;
  email: string;
  phonenumber: string;
  image: string;
}

const Home: React.FC = () => {
  const [userData, setUser] = useState<FieldsAttribute[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [viewUser, setViewUser] = useState<FieldsAttribute | null>(null);
  const [showAddUser, setShowAddUser] = useState(false);
  const [editUserData, setEditUserData] = useState<FieldsAttribute | null>(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://localhost:8000/students");
      const updatedUsers = response.data.map((student: FieldsAttribute) => ({
        ...student,
        image: `https://i.pravatar.cc/48?img=${student.id}`,
      }));
      setUser(updatedUsers);
      // setUser(response.data)
      setIsLoading(false);

    } catch (error) {
      console.error("FetchData error -", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const viewUserDetails = (user: FieldsAttribute) => {
    setViewUser(user);
  };

  const addUserDetails = () => {
    setShowAddUser(true)
  }

  const editUserDetails = (user: FieldsAttribute) => {
    setEditUserData(user);
    setShowAddUser(true);
  };

  const addUser = async (value: FieldsAttribute) => {
    try {
      const response = await axios.post("http://localhost:8000/students", value, {
        headers: { "Content-Type": "application/json" }
      });
      const newUser = {
        ...response.data,
        image: `https://i.pravatar.cc/48?img=${response.data.id}`,
      };
      if (response) {
        toast.success("User Added Successfully")
        setUser((prev) => [...prev, newUser]);
        
      }
    } catch (error) {
      console.log("addUser Failed", error);
    }
  }

  const deleteUser = async (id?: number) => {
    try {
      const response = await axios.delete(`http://localhost:8000/students/${id}`);
      toast.success("User Delete Successfully")
      if (response) {
        setUser((prev) => prev.filter((data) => data.id !== id))
      }
    } catch (e) {
      console.log("Delete Data ", e);
      
    }
  }

  // Function to Close Modal
  const closeModal = () => {
    setViewUser(null);
    setShowAddUser(false)
    setEditUserData(null);
  };

  return (
    <div className="flex flex-col items-center py-5 m-5 max-w-7xl border mx-auto">
      <h1 className="font-bold text-3xl underline py-4">CRUD OPERATION</h1>

      {/* Add User Button */}
      <button className="bg-green-500 text-white px-4 py-2 rounded-lg self-start ml-5 sm:ml-10 hover:bg-green-600 transition"
        onClick={addUserDetails}>
        Add User
      </button>

      {/* Table Container */}
      <div className="w-full mt-5 p-5 bg-white">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-center">
            <thead className="bg-purple-200">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Phone Number</th>
                <th className="border px-4 py-2">Candidate Image</th>
                <th className="border px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((data, index) => (
                <tr key={data.id} className="hover:bg-gray-100 transition even:bg-gray-200">
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{data.name}</td>
                  <td className="border px-4 py-2">{data.email}</td>
                  <td className="border px-4 py-2">{data.phonenumber}</td>
                  <td className="border px-4 py-2">
                    <img src={data.image} alt={data.name} className="rounded-full mx-auto" />
                  </td>
                  <td className="border px-4 py-2 w-60">
                    <div className="flex justify-evenly gap-3 sm:gap-1">
                      <button
                        className="rounded bg-blue-500 text-white px-3 py-1 hover:bg-blue-600 transition"
                        onClick={() => viewUserDetails(data)}>
                        View
                      </button>
                      <button className="rounded bg-amber-500 text-white px-3 py-1 hover:bg-amber-600 transition"
                        onClick={() => editUserDetails(data)}>
                        Edit
                      </button>
                      <button className="rounded bg-red-500 text-white px-3 py-1 hover:bg-red-600 transition"
                        onClick={() => deleteUser(data.id)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {isLoading && <p>Loading ...</p>}

      {/* Popup View Modal */}
      {viewUser && <ViewUser userValue={viewUser} closeModal={closeModal} />}
      {showAddUser && <AddUser userValue={addUser} closeModal={closeModal} />}
      {editUserData && <AddUser userValue={addUser} refreshData={fetchData} closeModal={closeModal} editData={editUserData} />}


    </div>
  );
};

export default Home;
