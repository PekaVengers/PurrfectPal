import SectionHeading from "../components/SectionHeading";
import PetCard from "../components/pets/PetCard";
import DarkButton from "../components/buttons/DarkButton";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";
import { pets as dummyPets } from "../constants/config";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import { allPets } from "../constants/config";
import Cursor from "../components/Cursor";
import apiRequest from "../utils/apiRequest";

export async function loader() {
  console.log("Loader called");
  try {
    const res = await apiRequest("/api/pets/adopt/");
    console.log(res);
    return res;
    
  } catch (error) {
    console.log(error);
    return error.response.data;
  }
}

export default function PetsList() {
  
  const online = useOnline();
  const loaderData = useLoaderData();
  console.log(loaderData);
  const allPets = loaderData || [];
  const [availablePets, setAvailablePets] = useState(allPets);
  console.log(`Available pets = ${availablePets}`);

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

        <div className="pets mt-[2rem] gsm:mt-[3rem] md:mt-[4rem] mb-[3rem] max-w-[90%] flex flex-wrap gap-x-[3rem] gap-y-[2rem] items-stretch justify-center">
          {availablePets.map(
            ({
              id,
              name,
              category,
              breed,
              profile_img,
              ownerMessage,
              startDate,
              endDate,
            }) => {
              return (
                <PetCard
                  key={id}
                  petId={id}
                  petName={name}
                  category={category}
                  breed={breed}
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
                  profile={profile_img}
                />
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
