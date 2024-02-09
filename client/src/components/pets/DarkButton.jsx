const DarkButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const { buttonText, styles, onclick } = props;
    return (
      <button className={`text-[1rem] vsm:text-[1.2rem] uppercase font-bold bg-[#565637] px-[2.5rem] vsm:px-[3rem] py-[0.3rem] vsm:py-[0.5rem] font-primary text-[#DFE8FD] rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019] ${styles?styles:""}`} onClick={onclick ? onclick : null}  >
        {buttonText}
      </button>
    );
  };
  
  export default DarkButton;