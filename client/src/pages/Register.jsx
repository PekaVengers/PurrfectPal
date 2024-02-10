import isStrongPassword from "../utils/isStrongPassword";
import { Form, redirect, useActionData } from "react-router-dom";
import Input from "../components/register/Input";
import Label from "../components/register/Label";
import SectionHeading from "../components/SectionHeading";
import { ToastContainer, toast } from "react-toastify";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import axiosInstance from "../utils/apiConfig";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import verifyAadhaar from "../utils/verifyAadhar";
import Loader from "../components/Loader";
import Cursor from "../components/Cursor";

// eslint-disable-next-line no-unused-vars, react-refresh/only-export-components
export async function action({ request }) {
  const formData = await request.formData();
  const password = formData.get("password");
  const confirm_password = formData.get("confirm_password");
  // if (!isStrongPassword(password)) {
  //   return {
  //     "password": ["Please provide a strong password"]
  //   }
  // } else
  if (password !== confirm_password) {
    return {
      confirm_password: [
        "The confirm password field does not match the password field",
      ],
    };
  } else {
    try {
      await axiosInstance.post("/api/users/", formData);
      console.log("The user is created");

      return redirect("/login");
    } catch (error) {
      console.log(error);
      return error.response.data;
    }
  }
  return null;
}

export default function Register() {
  const [loader, setLoader] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const online = useOnline();
  if (!online) {
    return <Offline />;
  }
  const actionData = useActionData();

  const handleAadhaarVerify = () => {
    setLoader(true);
    const aadhaarNum = document.getElementById("aadhaar").value;
    console.log(aadhaarNum);
    const verified = verifyAadhaar(aadhaarNum);
    if (verified) {
      setIsVerified(true);
    } else {
      setIsVerified(false);
    }
    setLoader(false);
  };

  return (
    <>
      <Cursor />
      {loader && <Loader />}
      <div className="w-full min-h-screen bg-[#919177] flex flex-col justify-center items-center md:gap-[1rem] pt-[4rem] vsm:pt-[8rem] pb-[2rem] vsm:pb-[3.5rem] md:pb-[5rem]">
        <SectionHeading heading="Register" />
        <Form
          method="post"
          className="w-[90%] vsm:w-[75%] gsm:w-[65%] max-w-md mx-auto px-[1.5rem] vsm:px-[2rem] md:px-[3rem] py-[1.5rem] md:py-[2rem] shadow-md rounded-[1rem] bg-[#DFE8FD] text-[#565637] font-semibold font-primary"
        >
          <Label htmlFor={"name"} text="Name" />
          <Input required={true} type={"text"} name="name" id="name" />
          {actionData?.name &&
            actionData?.name.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          <Label htmlFor={"email"} text="Email" />
          <Input required={true} type={"email"} name="username" id="email" />
          {actionData?.username &&
            actionData?.username.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          <Label htmlFor={"phoneNo"} text="Phone Number" />
          <Input required={true} type={"tel"} name="phone" id="phoneNo" />
          {actionData?.phone &&
            actionData?.phone.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          <Label htmlFor={"location"} text="Location" />
          <Input required={true} type={"text"} name="location" id="location" />
          {actionData?.location &&
            actionData?.location.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          <Label htmlFor={"password"} text="Password" />
          <Input
            required={true}
            type={"password"}
            name="password"
            id="password"
          />
          {actionData?.password &&
            actionData?.password.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          <Label htmlFor={"confirm_password"} text="Confirm Password" />
          <Input
            type={"password"}
            name="confirm_password"
            id="confirm_password"
          />
          {actionData?.confirm_password &&
            actionData?.confirm_password.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          {actionData?.non_field_errors &&
            actionData?.non_field_errors.map((error, i) => (
              <div className="text-red-500" key={i}>
                {error}
              </div>
            ))}

          <Label htmlFor={"aadhaar"} text="Aadhar Number" />
          <div className="aadhaar flex gap-2 justify-center items-center mb-4">
            <Input
              type={"number"}
              name="aadhaar"
              id="aadhaar"
              pattern="\d{12}"
              maxLength={12}
              styles="mb-0"
            />
            {isVerified ? (
              <FaCheckCircle />
            ) : (
              <button
                className="uppercase bg-[#565637] text-white px-[0.5rem] rounded-[0.5rem]"
                onClick={handleAadhaarVerify}
              >
                Verify
              </button>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 md:mt-0 md:p-2 bg-[#565637] text-[#EEF3FF] text-[1.1rem] md:text-[1.5rem] rounded-md hover:text-[#FEFFC0] hover:bg-[#0B0019] uppercase font-semibold md:mt-4"
            disabled={!isVerified}
          >
            Register
          </button>
        </Form>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
