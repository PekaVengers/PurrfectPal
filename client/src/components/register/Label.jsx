// eslint-disable-next-line react/prop-types
const Label = ({ htmlFor, text }) => (
  <>
    <label className="block md:mb-2 text-[1.2rem] gsm:text-[1.5rem]" htmlFor={`${htmlFor}`}>
      {text}
    </label>
  </>
);

export default Label;
