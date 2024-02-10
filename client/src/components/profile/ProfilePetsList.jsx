/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import avatar from "../../assets/images/avatar.png";
import { deletePetHandler } from "../../utils/profilePageHelpers";

const ProfilePetsList = ({
  id,
  profile,
  petName,
  petType,
  petBreed,
  petAge,
  toast,
}) => {
  return (
    <div className="w-[90%] bg-[#EEF3FF] vsm:w-[80%] msm:w-[65%] md:w-[60%] mmd:w-[55%] lg:w-[45%] xl:w-[40%] 2xl:w-[35%] 3xl:w-[30%] relative py-[1rem] px-[1rem] vsm:px-[2rem] rounded-[3rem] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-2 gsm:gap-[1.5rem] items-center shadow-custom">
      <div className="petDetails flex flex-col gsm:flex-row gap-[0.5rem] vsm:gap-[1rem] gsm:gap-[2rem] items-center">
        <div className="overflow-hidden w-[4rem] h-[4rem] vsm:w-[5rem] vsm:h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-[50%] border-2 border-black">
          <img
            src={profile ? profile : avatar}
            alt="pet_profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="details text-[#0B0019] font-primary flex flex-col justify-center items-center">
          <h1 className="petName uppercase font-bold text-[1.5rem] vsm:text-[2rem] gsm:text-[2.5rem] leading-[1.5rem] vsm:leading-[2rem] gsm:leading-[2.5rem]">
            {petName}
          </h1>
          <h3 className="breed text-gray-800 font-semibold text-[1.2rem] vsm:text-[1.5rem]">{`${petType}, ${petBreed}`}</h3>
          <h2 className="dateRange text-gray-600 font-bold text-[1.1rem] vsm:text-[1.5rem]">
            {`${petAge} Years`}
          </h2>
        </div>
      </div>
      <div className="buttons flex flex-col md:flex-row justify-between gap-[0.5rem] vsm:gap-[1rem] md:gap-[2rem]">
        <button
          className={`text-[1rem] vsm:text-[1.2rem] text-[#DFE8FD] uppercase font-bold px-[3rem] py-[0.5rem] font-primary bg-[#565637] rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019]  px-[1rem] vsm:px-[1.5rem] vsm:py-[0.2rem] gsm:px-[3rem]`}
          onClick={() => deletePetHandler(id, toast)}
        >
          Delete
        </button>
        <Link to={`/open-adopt/${id}`}>
          <button>Open for Adopt</button>
        </Link>
      </div>
    </div>
  );
};

export default ProfilePetsList;
