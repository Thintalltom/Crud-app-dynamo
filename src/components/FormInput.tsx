import add from "../assets/svg/add.svg";
import { useState } from "react";
import { useMutation,useQueryClient } from "@tanstack/react-query";
import axios from "axios";
const FormInput = () => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
  });
  const addUser = async (data: {
    username: string;
    firstname: string;
    lastname: string;
    email: string;
  }) => {
   const response = await axios.post("https://jg1y1m3s44.execute-api.us-east-1.amazonaws.com/test/users", data);
   console.log(response.data);
  }

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      alert("User added!");
      queryClient.invalidateQueries({ queryKey: ['users'] });
      setFormData({
        username: "",
        firstname: "",
        lastname: "",
        email: "",
      })
    },
    onError: (err) => {
      alert("Error adding user.");
      console.log(err);
    },
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    mutation.mutate(formData);
  
  };

  return (
    <div className="h-fit  p-[20px] ">
      <div className="border-[0.5px] flex flex-col gap-[15px]  shadow-sm p-[20px] rounded-[2px] bg-white h-[100%] ">
        <p>Add New User</p>
        <div className="lg:grid sm:gap-[20px] lg:gap-[10px] lg:grid-rows-2 h-[70%] lg:grid-flow-col sm:grid sm:grid-flow-row ">
          <div className=" flex flex-col gap-[10px]">
            <p className="text-xs">Username</p>
            <input
              type="text"
              className="border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]"
              placeholder=" Enter Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-[10px]">
            <p className="text-xs">First Name</p>
            <input
              type="text"
              className="border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]"
              placeholder=" Enter FirstName"
              name="firstname"
              value={formData.firstname}  
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-[10px]">
            <p className="text-xs">Last Name</p>
            <input
              type="text"
              className="border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]"
              placeholder=" Enter LastName"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </div>
          <div className=" flex flex-col gap-[10px]">
            <p className="text-xs">Email</p>
            <input
              type="email"
              className="border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm p-[5px]"
              placeholder=" Enter Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <button className="bg-blue-600 text-white flex gap-[5px] font-bold p-[5px] rounded shadow-sm w-fit " disabled={mutation.isPending} onClick={handleSubmit}>
          <img src={add} /> 
          {mutation.isPending ? 'Adding...' : 'Add User'}
        </button>
      </div>
    </div>
  );
};

export default FormInput;
