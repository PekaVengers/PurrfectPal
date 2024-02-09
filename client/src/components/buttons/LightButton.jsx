const LightButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const { buttonText, styles } = props;
    return (
<button className={`text-[1.5rem] uppercase font-bold bg-[#DFE8FD] px-[3rem] py-[0.5rem] font-primary text-[#323225] rounded-[2rem] hover:bg-[#565637] hover:text-[#DFE8FD] border-2 border-[#0B0019] ${styles?styles:""}`}>{buttonText}</button>
    );
  };
  
  export default LightButton;
  