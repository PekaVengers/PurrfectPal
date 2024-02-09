import { Link } from "react-router-dom";
import DarkButton from "../buttons/DarkButton";
import LightButton from "../buttons/LightButton";

const CTA = () => {
  return (
    <div className="w-full flex flex-col md:flex-row font-primary md:mt-8">
      <div className="left w-full md:w-[50%] bg-[#DFE8FD] flex flex-col justify-center items-center gap-[1rem] md:gap-[2rem] border-b-2 md:border-r-2 md:border-b-0 border-black py-[2rem] md:py-[3rem] border-dotted">
        <h1 className="w-[90%] vsm:w-[70%] msm:w-[60%] font-medium text-[#565637] text-center text-[1.5rem] vsm:text-[2rem] gsm:text-[2.5rem] md:text-[2.5rem]">
          Want to adopt a pet today?
          <br />
          Go Ahead!
        </h1>
        <Link to="/pets">
          <DarkButton buttonText="Adopt Pet" styles="text-[1rem] vsm:text-[1.5rem]"/>
        </Link>
      </div>

      <div className="right w-full md:w-[50%] bg-[#565637] flex flex-col justify-center items-center gap-[1rem] md:gap-[2rem] border-black py-[2rem] md:py-[3rem]">
        <h1 className="w-[90%] vsm:w-[70%] msm:w-[60%] font-medium text-[#DFE8FD] text-center text-[1.5rem] vsm:text-[2rem] gsm:text-[2.5rem] md:text-[2.5rem]">
          Want to lend a pet today?
          <br />
          Go Ahead!
        </h1>
        <Link to="/add-pet">
          <LightButton buttonText="Lend Pet" className="bg-red-700" styles="text-[1rem] vsm:text-[1.5rem]"/>
        </Link>
      </div>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CTA;
