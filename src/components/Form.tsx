import { FC } from "react";
import { formTypes } from "../types";
import Navbar from "./Navbar";
import FormInput from "./FormInput";
import Data  from "./Data";
const Form: FC<formTypes> = () => {
  return (
    <div className=" h-full w-full bg-[#D1D5DB]">
      <Navbar />
      <FormInput />
      <Data />

    </div>
  );
};

export default Form;
