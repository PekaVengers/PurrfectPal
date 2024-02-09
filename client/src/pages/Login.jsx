import SectionHeading from "../components/SectionHeading";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Label from "../components/register/Label";
import Input from "../components/register/Input";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import axiosInstance from "../utils/apiConfig";

export async function action({ params, request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const password = formData.get("password");

  const loginData = {
    'client_id': import.meta.env.VITE_CLIENT_ID,
    'client_secret': import.meta.env.VITE_CLIENT_SECRET,
    'grant_type': 'password',
    'username': email,
    'password': password,
  };

  console.log(loginData);

  try {
    const res = await axiosInstance.post('/auth/token/', loginData);
    const data = res.data;
    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);
    localStorage.setItem("loggedIn", JSON.stringify(true));
    return redirect("/profile");
  } catch (error) {
    return { "error": "Invalid email or password." };
  }
}


export default function Login() {
  const online = useOnline();
  const actionData = useActionData();
  const navigation = useNavigation();

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="w-full h-screen bg-[#919177] flex flex-col justify-center items-center">
        <SectionHeading heading="Login" />
        <Form
          method="POST"
          className="w-[90%] vsm:w-[75%] gsm:w-[65%] max-w-md mx-auto px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#DFE8FD] text-[#0B0019] font-semibold font-primary"
        >
          <Label htmlFor={"email"} text={"Email"} />
          <Input required={true} type={"email"} name={"email"} id={"email"} />
          <Label htmlFor={"password"} text={"Password"} />
          <Input required={true} type={"password"} name={"password"} id={"password"} />
          {actionData && <span className="text-red-500">Invalid username or Password</span>}
          <button
            type="submit"
            className="w-full p-2 bg-[#565637] text-[#EEF3FF] text-[1.2rem] md:text-[1.5rem] rounded-md hover:text-[#FEFFC0] hover:bg-[#0B0019] uppercase font-semibold md:mt-4"
            disabled={navigation.state === "submitting"}
          >
            {navigation.state === "submitting" ? "Logging in..." : "Login"}
          </button>
        </Form>
      </div>
    </>
  );
}
