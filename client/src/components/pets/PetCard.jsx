/* eslint-disable react/prop-types */
import DarkButton from "./DarkButton";
import { Link } from "react-router-dom";

const PetCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const {
    petName,
    category,
    breed,
    startDate,
    endDate,
    ownerMessage,
    petId,
    profile,
  } = props;
  return (
    <div className="py-[1.5rem] px-[1rem] md:px-[1rem] rounded-[3rem] bg-[#EEF3FF] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[0.6rem] vsm:gap-[1rem] items-center shadow-custom w-[95%] md:w-[65%] mmd:w-[60%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] 3xl:w-[35%] 4xl:w-[30%]">
      <div className="petDetails flex flex-col md:flex-row gap-[0.5rem] gsm:gap-[1rem] md:gap-[1.5rem] items-center justify-center">
        <div className="overflow-hidden w-[5rem] h-[5rem] lg:w-[6rem] lg:h-[6rem] xl:w-[7rem] xl:h-[7rem] rounded-[50%] border-2 border-black">
          <img
            src={profile?.url}
            alt="pet_profile"
            className="min-w-full min-h-full object-cover"
          />
        </div>
        <div className="details text-[#0B0019] font-primary flex flex-col text-center md:text-left">
          <h1 className="petName uppercase font-bold text-[1.7rem] vsm:text-[2.2rem] lg:text-[2.5rem] leading-[2rem] vsm:leading-[2.5rem]">
            {petName}
          </h1>
          <h3 className="breed text-[1.3rem] vsm:text-[1.5rem] lg:text-[2rem]">{`${category}, ${breed}`}</h3>
          <h2 className="dateRange font-semibold text-[1rem] vsm:text-[1.3rem] lg:text-[1.5rem]">
            {`${startDate} - ${endDate}`}
          </h2>
        </div>
      </div>
      {ownerMessage && (
        <h2 className="dateRange w-[90%] font-primary leading-[1.7rem] vsm:leading-[1.8rem] text-[1.3rem] vsm:text-[1.5rem] gsm:px-4 text-center overflow-auto">
          {ownerMessage ? `${ownerMessage.slice(0, 51) + "..."}` : ""}
        </h2>
      )}
      <Link to={`/pets/${petId}`}>
        <DarkButton buttonText="More Details" styles={"mt-[0.3rem]"}/>
      </Link>
    </div>
  );
};

export default PetCard;
