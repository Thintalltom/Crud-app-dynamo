import search from "../assets/svg/search.svg";
import { useQuery } from "@tanstack/react-query";
import react, { useEffect } from "react";
import axios from "axios";

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://ou9rq6nr4b.execute-api.us-east-1.amazonaws.com/test/users"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const Data = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="h-[70vh]  p-[20px]">
      <div className="border-[0.5px] p-[20px] flex gap-[5px] flex-col shadow-sm rounded-[2px] bg-white h-[100%] ">
        <p className="font-bold ">Users List</p>
        <div className="w-full bg-zinc-100 h-fit flex p-[5px] ">
          <img src={search} alt="search" className="" />
          <input
            type="text"
            placeholder="Search users.."
            className="text-slate-500 bg-transparent w-full   p-[10px] rounded"
          />
        </div>
        {isLoading ? (
          <p className="flex justify-center items-center w-[100%] h-[100%]">
            Loading...
          </p>
        ) : isError ? (
          <p className="flex justify-center items-center w-[100%] h-[100%]">
            Oops! Error fetching data
          </p>
        ) : (
          <table className="bg-zinc-100 w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="text-sm font-light p-[10px] text-left">
                  Username
                </th>
                <th className="text-sm font-light text-left">First Name</th>
                <th className="text-sm font-light text-left">Last Name</th>
                <th className="text-sm font-light text-left">Email</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((user: any, index: number) => (
                <tr
                  key={user.id?.S || index}
                  className="border-t border-gray-300"
                >
                  <td className="p-[10px]">{user.firstname?.S}</td>
                  <td className="p-[10px]">{user.lastname?.S}</td>
                  <td className="p-[10px]">{user.email?.S}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Data;
