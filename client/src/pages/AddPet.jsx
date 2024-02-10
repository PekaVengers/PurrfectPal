import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import { petBreeds } from "../constants/config";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../components/Loader";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import { useActionData, Form, redirect } from "react-router-dom";
import apiRequest from "../utils/apiRequest";
import Cursor from "../components/Cursor";

export async function action({ request }) {
  const formData = await request.formData();
  try {
    const res = await apiRequest("/api/pets/", "POST", formData);
    return redirect(`/profile`);
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
  return null;
}

export default function AddPet() {
  const actionData = useActionData();
  const online = useOnline();

  const [formOne, setFormOne] = useState(true);
  const [loader, setLoader] = useState(false);

  const [curType, setCurType] = useState("Cat");
  const petTypes = ["Cat", "Dog", "Rabbit"];

  const toggleForm = () => {
    setFormOne(!formOne);
  };

  if (!online) {
    return <Offline />;
  }

  return (
    <>
    <Cursor/>
      {loader && <Loader />}
      <div className="w-full min-h-screen bg-[#919177] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
        <SectionHeading heading="Add Pet" styles="text-[4rem]" />
        <Form
          id="formOne"
          encType="multipart/form-data"
          method="POST"
          className="w-[90%] vsm:w-[85%] max-w-md mx-auto px-[1rem] gsm:px-[1.5rem] msm:px-[2rem] md:px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#565637] text-[#0B0019] font-semibold font-primary"
        >
          <input
            required
            type="text"
            name="name"
            placeholder="Name"
            className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
          />
          <div className="relative mb-4">
            <input
              required
              name="profile_img"
              type="file"
              accept="image/*"
              id="file"
              className="block w-full text-sm text-[#0B0019] file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#fefefe] outline-none text-[#DFE8FD] file:text-[#0B0019]"
              placeholder="Upload a image"
            />
          </div>
          <div>
            <select
              className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
              name="category"
            >
              {petTypes.map((petType) => (
                <option key={petType} value={petType}>
                  {petType}
                </option>
              ))}
            </select>
          </div>

          <div>
            <select
              name="breed"
              className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
            >
              {curType ? (
                petBreeds[curType].map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))
              ) : (
                <option>Select a Type First</option>
              )}
            </select>
          </div>

          <div>
            <select
              className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
              name="gender"
            >
              <option value="Female">Female</option>
              <option value="Male">Male</option>
            </select>
          </div>

          <div>
            <input
              required
              title="Please enter a 4-digit year."
              className="mb-4 w-full p-2 rounded-md outline-none bg-[#fefefe] outline-none text-[#0B0019]"
              type="number"
              name="birth_year"
              placeholder="Year of Birth"
              pattern="\d{4}"
              min={2000}
              max={new Date().getFullYear()}
            />
          </div>

          <div>
            <textarea
              className="w-full bg-[#fefefe] outline-none rounded-md p-2 mb-2"
              placeholder="Precautions [Optional]"
              name="precautions"
            ></textarea>
          </div>

          <div>
            <textarea
              className="w-full bg-[#fefefe] outline-none rounded-md p-2 mb-2"
              placeholder="Interests [Optional]"
              name="interests"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[#fefefe] text-[#0B0019] rounded-[5rem] hover:text-[#080909] uppercase font-semibold hover:bg-[#f8aa26]"
          >{`Submit`}</button>
        </Form>
      </div>
      <ToastContainer position="top-center" />
    </>
  );
}
