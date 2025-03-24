import { FC } from "react";
import { formTypes } from "../types";
import Navbar from "./Navbar";

const Form: FC<formTypes> = () => {
  return <div className=" h-[100vh] w-full">
    <Navbar />
  </div>;
};

export default Form;
