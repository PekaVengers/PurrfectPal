import { useState } from "react";
import SectionHeading from "../components/SectionHeading";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import { Form, redirect, useParams } from "react-router-dom";
import apiRequest from "../utils/apiRequest";
import Cursor from "../components/Cursor";

export async function action({ params, request }) {
  const { id } = params;
  const formData = await request.formData();
  try {
    const res = await apiRequest(`/api/pets/adopt/${id}/`, "POST", formData);
    return redirect(`/profile`);
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
}

export default function OpenAdopt() {
  const [startDate, setStartDate] = useState("2024-01-01");
  const [endDate, setEndDate] = useState("");
  const online = useOnline();
  const { id } = useParams();
  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  if (!online) {
    return <Offline />;
  }

  return (
    <>
    <Cursor/>
      <div className="w-full min-h-screen bg-[#919177] flex flex-col justify-center items-center gap-[1rem] pt-[8rem] pb-[5rem]">
        <SectionHeading heading="Add Pet" styles="text-[4rem]" />
        <Form
          id="formOne"
          encType="multipart/form-data"
          method="POST"
          className="w-[90%] vsm:w-[85%] max-w-md mx-auto px-[1rem] gsm:px-[1.5rem] msm:px-[2rem] md:px-[3rem] py-[2rem] shadow-md rounded-[1rem] bg-[#565637] text-[#0B0019] font-semibold font-primary"
        >
          <input type="hidden" name="pet" value={id} />
          <div>
            <label htmlFor="startDate" className="text-[#fefefe]">
              From
            </label>
            <input
              name="start_date"
              type="date"
              max={endDate}
              onChange={handleStartDateChange}
              value={startDate}
              className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
            />
          </div>

          <div>
            <label htmlFor="endDate" className="text-[#fefefe]">
              To
            </label>
            <input
              name="end_date"
              type="date"
              onChange={handleEndDateChange}
              value={endDate}
              min={startDate}
              className="mb-4 w-full p-2 rounded-md outline-none  bg-[#fefefe] outline-none text-[#0B0019]"
            />
          </div>

          <div>
            <textarea
              className="w-full bg-[#fefefe] outline-none rounded-md p-2 mb-2"
              placeholder="Owner's Message"
              name="owner_message"
            ></textarea>
          </div>

          <div>
            <input type="number" name="amount" placeholder="Initial Bid[in INR]"
              className="w-full bg-[#fefefe] outline-none rounded-md p-2 mb-4"
            />
          </div>

          <button
            type="submit"
            className="w-full p-2 bg-[#fefefe] text-[#0B0019] rounded-[5rem] hover:text-[#080909] uppercase font-semibold hover:bg-[#f8aa26]"
          >{`Submit`}</button>
        </Form>
      </div>
    </>
  );
}
