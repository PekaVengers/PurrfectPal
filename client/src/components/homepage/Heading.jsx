// eslint-disable-next-line react/prop-types
const Heading = ({ text, styles }) => {
  return (
    <h1
      className={`text-[#0B0019] mx-auto uppercase font-primary text-[2rem] vsm:text-[2.5rem] gsm:text-[3rem] md:text-[4rem] text-center font-bold mt-[2rem] mb-4 md:mt-[5rem]  ${
        styles ? styles : ""
      }`}
    >
      {text}
    </h1>
  );
};

export default Heading;
