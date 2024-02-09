import avatar from "../../assets/images/avatar.png";

const Testimonial = () => {
  return (
    <div className="w-full p-[2rem] md:p-[3rem] bg-[#EEF3FF] flex flex-col justify-center items-center gap-[1rem] md:gap-[1.5rem]">
      <img src={avatar} alt="user_avatar" className="w-[4rem] vsm:w-[5rem] md:w-[6rem]" />
      <p className="text-[#565637] md:font-semibold font-primary text-[1.2rem] vsm:text-[1.5rem] gsm:text-[2rem] md:text-[2rem] w-[95%] md:w-[60%] text-center">It is a long and the thing is that you have to be strong when you are not mentally established.</p>
    </div>
  )
}

export default Testimonial;
