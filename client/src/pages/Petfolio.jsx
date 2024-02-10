import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import PetBioCard from "../components/petfolio/PetBioCard";
import { fetchPetDetails } from "../utils/fetchPetDetails";
// import OwnerDetails from "../components/petfolio/OwnerDetails";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import puppy1 from "../assets/images/puppy1.jpg";
import puppy2 from "../assets/images/puppy2.jpg";
import puppy3 from "../assets/images/puppy3.jpg";

export default function Petfolio() {
  const online = useOnline();
  const [loader, setLoader] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [petId, setPetId] = useState(useParams().petId);
  // const [adopterMessage, setAdopterMessage] = useState("");
  const [petDetails, setPetDetails] = useState({});
  const [availableForBorrow, setIsAvailableForBorrow] = useState(false);
  const images = [
    puppy1, puppy2, puppy3
  ];

  useEffect(() => {
    setLoader(true);
    fetchPetDetails(petId, setPetDetails, toast);
    console.log("Pet Details = ", petDetails);
    setIsAvailableForBorrow(petDetails?.availableForBorrow);
    setLoader(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [petDetails?.availableForBorrow, petId]);

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      {petDetails ? (
        <div className="bg-[#919177] w-full min-h-screen flex items-center">
          <main className="w-[95%] xl:w-[80%] 2xl:w-[60%] mt-[5rem] vsm:mt-[7rem] gsm:mt-[10rem] mb-[2rem] gsm:mb-[5rem] flex flex-col justify-center items-center mx-auto">
            <SectionHeading heading="Petfolio" styles="inline" />
            <PetBioCard
              petDetails={petDetails}
              petId={petId}
              toast={toast}
              availableForBorrow={availableForBorrow}
              setLoader={setLoader}
            />
            {petDetails?.petPrecautions && (
              <h2 className="p-2 px-[0.7rem] gsm:px-4 rounded-[1rem] text-[1.2rem] vsm:text-[1.5rem] gsm:text-[1.7rem] font-primary text-[#EAA124] bg-[#0B0019] overflow-auto max-w-[90%] flex flex-col md:flex-row items-center vsm:mt-4">
                <span className="font-semibold text-center md:text-left text-[#D9D9D9]">
                  {" " + petDetails?.petPrecautions}
                </span>
              </h2>
            )}

            <div className="photoGallery max-w-md bg-[#EEF3FF] rounded-[3rem] shadow-custom py-[0.8rem] px-[1.5rem] md:px-[2rem] md:py-[1rem] md:w-fit text-center mt-[1rem]">
              <h1 className="uppercase font-primary text-[1.5rem] vsm:text-[2rem] md:text-[3rem] font-bold mb-[0.3rem]">Photo Gallery</h1>
              <div className="caraousal w-full flex justify-center items-center gap-[1rem]">
                {
                  Array.from({ length: 3 }, (_, i) => {
                    return (
                      <div key={i} className="w-[4rem] h-[4rem] vsm:w-[5rem] vsm:h-[5rem] gsm:w-[6rem] gsm:h-[6rem] msm:w-[7rem] msm:h-[7rem] md:w-[8rem] md:h-[8rem] overflow-hidden rounded-[1rem] border-2 border-[#0B0019]">
                        <img
                          src={images[i]}
                          alt="pet_image"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    );
                  })
                }
              </div>
            </div>

            {/* <h1 className="mx-auto uppercase font-primary text-[2rem] vsm:text-[2.5rem] gsm:text-[3rem] md:text-[4rem] text-center font-bold mt-[2rem] mb-4">
                Owner Details
              </h1>
              <div className="flex flex-col items-center vsm:gap-2 2-[95%] gsm:w-[80%]">
                <OwnerDetails text="name" />
                <OwnerDetails text="location" />
                <OwnerDetails text="phoneNo" />
                <OwnerDetails text="email" />
                <h2 className="p-2 px-[0.7rem] gsm:px-4 rounded-[1rem] text-[1.2rem] vsm:text-[1.5rem]  gsm:text-[1.7rem] font-primary text-[#EAA124] bg-[#0B0019] overflow-auto max-w-[90%] flex flex-col md:flex-row items-center mt-2">
                  <strong className="font-semibold uppercase text-[#EEF3FF] md:hidden">
                    {`Owner's Message`}
                  </strong>
                  <span className="text-center md:text-left">
                    {petDetails.ownerMessage}
                  </span>
                </h2>
              </div> */}
          </main>
        </div>
      ) : (
        <SectionHeading
          heading="Error in fetching pet data..."
          styles="text-[3rem] inline"
        />
      )}
      <ToastContainer position="top-center" />
      {loader && <Loader />}
    </>
  );
}
