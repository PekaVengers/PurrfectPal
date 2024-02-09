import { Link } from "react-router-dom";
import AddPetButton from "../components/pets/DarkButton";
import SectionHeading from "../components/SectionHeading";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import { ToastContainer, toast } from "react-toastify";
import {
  getUserPets,
  getReceivedRequest,
  getSentRequest,
} from "../utils/profilePageHelpers";
import ProfileCard from "../components/profile/ProfileCard";
import ReceivedRequests from "../components/profile/ReceivedRequests";
import SentRequests from "../components/profile/SentRequests";
import ProfilePetsList from "../components/profile/ProfilePetsList";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import { allPets } from "../constants/config";

export default function Profile() {
  const online = useOnline();
  const [receivedRequests, setReceivedRequests] = useState([]);
  const [sentRequests, setSentRequests] = useState([]);
  const [loader, setLoader] = useState(false);
  const [pets, setPets] = useState([]);
  const [request] = useState(false);

  const isLoggedIn = true;

  // load user's pets initially on first render
  useEffect(() => {
    if (isLoggedIn) {
      setLoader(true);
      getUserPets(setPets);
      getReceivedRequest(setReceivedRequests);
      getSentRequest(setSentRequests);
      setLoader(false);
    }
  }, [isLoggedIn]);

  // If user is not logged in then early return
  if (!isLoggedIn) {
    return (
      <SectionHeading
        heading="login to continue."
        styles="text-center"
      ></SectionHeading>
    );
  }

  if (!online) {
    return <Offline />;
  }

  return (
    <>
      {loader && <Loader />}
      {pets && (
        <div className="w-full min-h-screen pt-[10rem] pb-[5rem] bg-[#919177] flex flex-col items-center">
          <SectionHeading heading="Profile" />
          <ProfileCard />

          {
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
          }

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
