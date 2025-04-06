import search from "../assets/svg/search.svg";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteUser = async (id: string) => {
  try {
    const response = await axios.delete(
      `https://jg1y1m3s44.execute-api.us-east-1.amazonaws.com/test/users/${id}`
    );
    return response.data;
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
};

const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://jg1y1m3s44.execute-api.us-east-1.amazonaws.com/test/users"
    );
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
const Data = () => {
  const queryClient = useQueryClient();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });
  const mutation = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.log("Error deleting user", error);
      alert("Failed to delete user");
    },
  });

  return (
    <div className="h-[70vh]  p-[20px]">
      <div className="border-[0.5px] p-[20px] flex gap-[5px] flex-col shadow-sm rounded-[2px] bg-white h-[100%] ">
        <p className="font-bold ">Users List</p>
        
        {isLoading ? (
          <p className="flex justify-center items-center w-[100%] h-[100%]">
            Loading...
          </p>
        ) : isError ? (
          <p className="flex justify-center items-center w-[100%] h-[100%]">
            Oops! Error fetching data
          </p>
        ) : !data || data.length === 0 ? (
          <p className="flex justify-center items-center w-[100%] h-[100%] text-gray-500 font-semibold">
            No users found. Add data to get started.
          </p>
        ) : (
          <table className=" w-full">
            <thead>
              <tr className="">
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
                  <td className="p-[10px]">{user.username?.S}</td>
                  <td className="p-[10px]">{user.firstname?.S}</td>
                  <td className="p-[10px]">{user.lastname?.S}</td>
                  <td className="p-[10px]">{user.email?.S}</td>
                  <td className="p-[10px]">
                    <button
                      className="bg-red-500 text-white px-4 py-1 rounded"
                      onClick={() => {
                        console.log("Deleting user ID:", user.id?.S); // add this
                        mutation.mutate(user.id?.S);
                      }}
                    >
                      Delete
                    </button>
                  </td>
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
