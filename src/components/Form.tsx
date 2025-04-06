import { FC } from "react";
import { formTypes } from "../types";
import Navbar from "./Navbar";
import FormInput from "./FormInput";
import Data  from "./Data";
const Form: FC<formTypes> = () => {
  return (
    <div className=" h-full w-[100%] ">
      <Navbar />
      <FormInput />
      <Data />

    </div>
  );
};

export default Form;
