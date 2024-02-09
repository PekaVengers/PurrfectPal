// eslint-disable-next-line react/prop-types
const Input = ({required, type, name, id }) => (
  <>
    <input
      required={required}
      className="mb-4 w-full p-2 border border-gray-300 rounded-md outline-none bg-[#0B0019] text-[#EEF3FF]"
      type={type}
      name={name}
      id={id}
    />
  </>
);

export default Input;
