/* eslint-disable react/prop-types */
import DarkButton from "../../components/pets/DarkButton";

const SentRequests = ({ request }) => {
  return (
    <div className="mx-auto sent px-4 gsm:px-8 py-2 gsm:py-4 rounded-[2rem] border-2 border-black flex flex-col items-center justify-center">
      <h2 className="relative text-[1.4rem] vsm:text-[1.5rem] gsm:text-[2rem] msm:text-[2rem] font-primary uppercase font-bold my-[1rem]">
        Sent Request
      </h2>
      <div className="details flex flex-col gsm:gap-2">
        <h3 className="petName uppercase font-bold font-primary text-[1.1rem] vsm:text-[1.5rem] gsm:text-[1.8rem] gsm:leading-[2.5rem]">
          To: {request?.petOwner?.name}
        </h3>
        <h3 className="petName uppercase font-bold font-primary text-[1.1rem] vsm:text-[1.5rem] gsm:text-[1.8rem] gsm:leading-[2.5rem]">
          {request?.petOwner?.email}
        </h3>
        <div className="buttons flex w-full justify-center mt-4">
          <DarkButton buttonText="Delete" styles={"bg-yellow-500 text-black"} />
        </div>
      </div>
    </div>
  );
};

export default SentRequests;
