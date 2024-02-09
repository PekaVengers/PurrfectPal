// eslint-disable-next-line react/prop-types
const OwnerDetails = ({ text, headingText, styles }) => (
  <h2
    className={`text-[1.2rem] vsm:text-[1.7rem] font-primary text-[#0B0019] font-semibold text-center ${
      styles ? styles : ""
    }`}
  >
    {headingText ? headingText : `${localStorage.getItem(text)}`}
  </h2>
);

export default OwnerDetails;
