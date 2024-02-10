/* eslint-disable react/prop-types */
import DarkButton from "../pets/DarkButton";
import { adoptPet } from "../../utils/adoptPetHandler";

const PetBioCard = ({
  petDetails,
  petId,
  availableForBorrow,
  toast,
}) => {
  const adoptNowHandler = async () => {
    const message = prompt("Enter a message for the pet owner: ");
    adoptPet(message, petId, toast);
  };

  return (
    <div className="w-[90%] vsm:w-[80%] gsm:w-[70%] msm:w-[60%] md:max-w-[50%] mmd:w-[40%] lg:w-[35%] rounded-[3rem] bg-[#D9D9D9] relative py-[1.5rem] px-[1rem] gsm:px-[2rem] mb-[1rem] border-t-2 border-l-2 border-[#0B0019] shadow-custom flex flex-col gap-[1rem] items-center">
        <div className="rounded-[50%] w-[6rem] h-[6rem] overflow-hidden rounded-[50%] border-2 border-[#0B0019]">
          <img
            src={petDetails?.profile?.url}
            alt="pet_profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="petDetails flex gap-[2rem] items-center">
          <div className="details text-[#0B0019] font-primary flex flex-col items-center">
            <h1 className="petName uppercase font-bold text-[1.5rem] vsm:text-[2rem] msm:text-[2.3rem] md:text-[2.5rem] leading-[2.5rem]">
              {petDetails.petName}
            </h1>
            <h2 className="dateRange font-semibold text-[1.1rem] vsm:text-[1.5rem] opacity-[0.8]">
              {`${petDetails.petAge} Years, ${petDetails.petGender}`}
            </h2>
            <h3 className="dateRange font-semibold text-[1rem] vsm:text-[1.3rem] opacity-[0.7]">
              {`${petDetails.petType}, ${petDetails.petBreed}`}
            </h3>
            {availableForBorrow && (
              <h3 className="breed text-[1rem] vsm:text-[1.2rem] opacity-[0.8]">
                {`${petDetails.startDate
                  .slice(0, 10)
                  .split("-")
                  .join("/")} - ${petDetails.endDate
                  .slice(0, 10)
                  .split("-")
                  .join("/")}`}
              </h3>
            )}
          </div>
        </div>
        <div className="buttons flex justify-between gap-[2rem]">
          {availableForBorrow ? (
            <DarkButton
              buttonText="Adopt Now"
              styles="text-[1rem] px-[2.5rem] py-[0.2rem]"
              onclick={adoptNowHandler}
            />
          ) : null}
        </div>
      </div>
  );
};

export default PetBioCard;
