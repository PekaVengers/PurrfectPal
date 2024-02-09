import avatar from "../../assets/images/avatar.png";

const ProfileCard = () => {
  const [username, userLocation, phoneNo, email] = [
    localStorage.getItem("name"),
    localStorage.getItem("location"),
    localStorage.getItem("phoneNo"),
    localStorage.getItem("email"),
  ];
  return (
    <div className="rounded-[3rem] bg-[#EEF3FF] relative mb-[1rem] py-[1.5rem] px-[2rem] rounded-[3rem] border-t-2 border-l-2 border-[#0B0019] flex flex-col gap-[1rem] items-center shadow-custom">
        <div className="overflow-hidden w-[4rem] h-[4rem] vsm:w-[5rem] vsm:h-[5rem] lg:w-[6rem] lg:h-[6rem] rounded-[50%] border-2 border-black">
          <img
            src={avatar}
            alt="pet_profile"
            className="w-full h-full object-cover"
          />
          </div>
        <div className="petDetails flex gap-[2rem] items-center">
          <div className="details text-[#0B0019] font-primary flex flex-col items-center">
            <h1 className="petName uppercase font-bold text-[1.5rem] vsm:text-[2rem] gsm:text-[2.5rem] leading-[2.5rem]">
              {username}
            </h1>
            <h2 className="dateRange font-semibold text-[1.1rem] vsm:text-[1.3rem] gsm:text-[1.5rem]">
              {`${userLocation}`}
            </h2>
            <h3 className="dateRange font-semibold text-[1rem] vsm:text-[1.1rem] gsm:text-[1.3rem]">
              {`${phoneNo}`}
            </h3>
            <h3 className="breed text-[1rem] vsm:text-[1.1rem] gsm:text-[1.3rem]">{email}</h3>
          </div>
        </div>
      </div>
  );
};

export default ProfileCard;
