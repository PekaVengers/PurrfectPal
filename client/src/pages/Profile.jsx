/* eslint-disable no-unused-vars */
import { Link, useLoaderData } from "react-router-dom";
import AddPetButton from "../components/pets/DarkButton";
import SectionHeading from "../components/SectionHeading";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ProfileCard from "../components/profile/ProfileCard";
// import ReceivedRequests from "../components/profile/ReceivedRequests";
// import SentRequests from "../components/profile/SentRequests";
import ProfilePetsList from "../components/profile/ProfilePetsList";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import checkAuth from "../utils/checkAuth";
import apiRequest from "../utils/apiRequest";
import { redirect } from "react-router-dom";
import Cursor from "../components/Cursor";

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
  console.log(import.meta.env.VITE_BASE_URL);
  const IMG_BASE_URL = import.meta.env.VITE_BASE_URL;
  const online = useOnline();
  const loaderData = useLoaderData();
  const [userPets, setUserPets] = useState(loaderData?.petsData || []);
  const [userData, setUserData] = useState(loaderData?.userData || null);
  console.log(loaderData);

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      <Cursor />
      {userPets && (
        <div className="w-full min-h-screen pt-[10rem] pb-[5rem] bg-[#919177] flex flex-col items-center">
          <SectionHeading heading="Profile" />
          <ProfileCard
            username={userData?.name}
            userLocation={userData?.location}
            phoneNo={userData?.phone}
            email={userData?.username}
          />

          <SectionHeading heading="Profile" />
          <ProfileCard
            username={userData?.name}
            userLocation={userData?.location}
            phoneNo={userData?.phone}
            email={userData?.username}
          />

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

          {userPets && (
            <>
              <h2 className="relative text-[2.5rem] vsm:text-[3rem] font-primary uppercase font-bold my-[1rem]">
                Your Pets
              </h2>
              <div className="pets mt-[2rem] w-full xl:w-[80%] flex flex-wrap justify-center gap-x-[2rem] gap-y-[3rem]">
                {userPets.map(
                  ({ id, profile_img, name, category, breed, birth_year }) => (

                    <ProfilePetsList
                      key={id}
                      id={id}
                      petName={name}
                      petType={category}
                      petBreed={breed}
                      petAge={new Date().getFullYear() - birth_year}
                      profile={IMG_BASE_URL + profile_img}
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
