import SectionHeading from "../components/SectionHeading";
import PetCard from "../components/pets/PetCard";
import DarkButton from "../components/buttons/DarkButton";
import { Link } from "react-router-dom";
import { useState } from "react";
import { pets as dummyPets } from "../constants/config";
import Loader from "../components/Loader";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import { allPets } from "../constants/config";
import Cursor from "../components/Cursor";

export default function PetsList() {
  const online = useOnline();
  const [pets, setPets] = useState(dummyPets);
  const isLoggedIn = true;

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      <Cursor />
      <div className="bg-[#919177] w-full min-h-screen flex flex-col justify-center items-center">
        <SectionHeading
          heading="Pets"
          styles="mt-[6rem] vsm:mt-[10rem] mb-[1rem] gsm:mb-[1.5rem]"
        />
        {isLoggedIn && (
          <Link to="/add-pet">
            <DarkButton buttonText="Add your pet" />
          </Link>
        )}
        <div className="pets mt-[2rem] gsm:mt-[3rem] md:mt-[4rem] mb-[3rem] max-w-[90%] flex flex-wrap gap-x-[3rem] gap-y-[2rem] items-stretch justify-center">
          {allPets.map(
            ({
              _id,
              petName,
              petType,
              petBreed,
              ownerMessage,
              startDate,
              endDate,
              profile,
            }) => {
              return (
                <PetCard
                  key={_id}
                  petId={_id}
                  petName={petName}
                  category={petType}
                  breed={petBreed}
                  ownerMessage={ownerMessage || ""}
                  startDate={
                    startDate
                      ? startDate.slice(0, 10).split("-").join("/")
                      : "15/01/2000"
                  }
                  endDate={
                    endDate
                      ? endDate.slice(0, 10).split("-").join("/")
                      : "25/01/2000"
                  }
                  profile={profile}
                />
              );
            }
          )}
        </div>
      </div>
      {/* {<Loader />} */}
    </>
  );
}
