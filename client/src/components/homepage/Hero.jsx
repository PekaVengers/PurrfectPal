import DogBlob from "../../assets/images/DoggyBlob.png";
import CatBlob from "../../assets/images/CatBlob.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col font-primary md:pb-[2rem] gap-4 border-2 border-[#0B0019] border-dotted">
      <div className="dogpart w-[100%] flex justify-center items-center gap-[1rem] md:gap-[2rem]">
        <img src={DogBlob} alt="dog_image" className="w-[8rem] vsm:w-[10rem] gsm:w-[15rem]  md:w-[20rem]" />
        <h1 className="w-[60%] text-[1.7rem] vsm:text-[2rem] gsm:text-[3rem] md:text-[4rem]">
          <span className="bg-[#D6DFF4] text-[#565637] px-[0.5rem] uppercase">
            !guau!
          </span>
          <br />
          <span className="bg-[#D6DFF4] text-[#565637] px-[0.5rem]">{`Adopt me, Buddy.`}</span>
        </h1>
      </div>
      <div className="catpart w-[100%] flex justify-center items-center gap-[1rem] md:gap-[2rem]">
        <h1 className="w-[60%] text-[1.7rem] vsm:text-[2rem] gsm:text-[3rem] md:text-[4rem] text-right">
          <span className="bg-[#D6DFF4] text-[#565637] px-[0.5rem] uppercase">
            !Meow!
          </span>
          <br />
          <span className="bg-[#D6DFF4] text-[#565637] px-[0.5rem]">{`Let me care for you :)`}</span>
        </h1>
        <img src={CatBlob} alt="cat_image" className="w-[8rem] vsm:w-[10rem] gsm:w-[15rem] md:w-[20rem] vsm:pr-4 gsm:pr-0" />
      </div>
    </div>
  );
};

export default Hero;
