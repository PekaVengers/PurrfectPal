import dogPaw from "../assets/images/dogPaw.png";

const SectionHeading = (props) => {
  // eslint-disable-next-line react/prop-types
  const { heading, styles } = props;
  return (
    <h1
      className={`relative text-[2.5rem] vsm:text-[4.5rem] md:text-[6rem] font-primary uppercase font-bold my-[1rem] ${
        styles ? styles : ""
      }`}
    >
      {heading}{" "}
      <img
        src={dogPaw}
        alt="dogPaw"
        className="w-[2.5rem] vsm:w-[4rem] md:w-[5rem] absolute top-[-0.1rem] vsm:top-[-0.8rem] md:top-[-0.5rem] md:top-[-0.5rem] right-[-1.5rem] vsm:right-[-2rem] md:right-[-2.5rem] rotate-[30deg]"
      />
    </h1>
  );
};

export default SectionHeading;
