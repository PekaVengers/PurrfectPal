import { Link, useLoaderData } from "react-router-dom";
import AddPetButton from "../components/pets/DarkButton";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ProfileCard from "../components/profile/ProfileCard";
import ReceivedRequests from "../components/profile/ReceivedRequests";
import SentRequests from "../components/profile/SentRequests";
import ProfilePetsList from "../components/profile/ProfilePetsList";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import { allPets } from "../constants/config";
import checkAuth from "../utils/checkAuth";
import apiRequest from "../utils/apiRequest";

export async function loader({ params, request }) {
  if (!checkAuth()) {
    return redirect("/login");
  }
  const finalData = {};

  try {
    const data = await apiRequest("/api/users/details/", "GET");
    if (data?.redirect == true) {
      return redirect("/login");
    }
    finalData.userData = data;

  } catch (error) {
    console.log(error);
  }

  try {
    const data = await apiRequest("/api/pets/", "GET");
    if (data?.redirect == true) {
      return redirect("/login");
    }
    finalData.petsData = data;

  } catch (error) {
    console.log(error);
  }

  return finalData;
}

export default function Profile() {
  const online = useOnline();
  const [pets, setPets] = useState([]);
  const loaderData = useLoaderData();
  const [userPets, setUserPets] = useState(loaderData?.petsData || []);
  const [userData, setUserData] = useState(loaderData?.userData || null);

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      {pets && (
        <div className="w-full min-h-screen pt-[10rem] pb-[5rem] bg-[#919177] flex flex-col items-center">
          <SectionHeading heading="Profile" />
          <ProfileCard />

          {/* {
            request && (
              <div className="requests w-[90%] md:w-[80%] xl:w-[65%] 2xl:w-[60%] 3xl:w-[50%] flex md:flex-wrap md:flex-row flex-col gap-4 items-stretch justify-center my-8">
                {receivedRequests &&
                  receivedRequests.map((request) => (
                    <ReceivedRequests request={request} key={request?._id} />
                  ))}

                {sentRequests &&
                  sentRequests.map((request) => (
                    <SentRequests request={request} key={request?._id} />
                  ))}
              </div>
            )
          } */}

          <Link to="/add-pet">
            <AddPetButton buttonText="Add your pet" styles="my-8" />
          </Link>

          {allPets && (
            <>
              <h2 className="relative text-[2.5rem] vsm:text-[3rem] font-primary uppercase font-bold my-[1rem]">
                Your Pets
              </h2>
              <div className="pets mt-[2rem] w-full xl:w-[80%] flex flex-wrap justify-center gap-x-[2rem] gap-y-[3rem]">
                {allPets.map(
                  ({ _id, profile, petName, petType, petBreed, petAge }) => (
                    <ProfilePetsList
                      key={_id}
                      id={_id}
                      petName={petName}
                      petType={petType}
                      petBreed={petBreed}
                      petAge={petAge}
                      profile={profile?.url}
                      toast={toast}
                    />
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}
      <ToastContainer position="top-center" />
    </>
  );
}
