/* eslint-disable react/prop-types */
import DarkButton from "../../components/pets/DarkButton";
import { requestUpdateHandler } from "../../utils/profilePageHelpers";

const ReceivedRequests = ({ request }) => {
  return (
    <div className="received px-4 gsm:px-8 py-2 gsm:py-4 rounded-[2rem] flex flex-col items-center justify-center border-2 border-black mx-auto">
      <h2 className="relative text-[1.4rem] vsm:text-[1.5rem] gsm:text-[2rem] msm:text-[2rem] font-primary uppercase font-bold my-[1rem]">
        Received Request
      </h2>
      <div className="details flex flex-col ">
        <h3 className="petName uppercase font-bold font-primary text-[1.1rem] vsm:text-[1.5rem] gsm:text-[1.5rem] gsm:leading-[2.5rem]">
          To: {request?.adopter?.name}
        </h3>
        <h3 className="petName uppercase font-bold font-primary text-[1.1rem] vsm:text-[1.5rem] gsm:text-[1.5rem] gsm:leading-[2.5rem]">
          {request?.adopter?.email}
        </h3>
        <div className="buttons flex w-full justify-around mt-4 flex-col gap-2 gsm:flex-row">
          <DarkButton
            buttonText="Accept"
            styles={"bg-green-500 text-black"}
            onclick={() => requestUpdateHandler("accept")}
          />
          <DarkButton
            buttonText="Reject"
            styles={"bg-red-500"}
            onclick={() => requestUpdateHandler("reject")}
          />
        </div>
      </div>
    </div>
  );
};

export default ReceivedRequests;
