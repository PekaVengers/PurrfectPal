const YellowButton = (props) => {
    // eslint-disable-next-line react/prop-types
    const { buttonText, styles } = props;
    return (
      <button className={`text-[1.2rem] uppercase font-bold bg-[#F8AA26] px-[3rem] py-[0.5rem] font-primary text-[##0B0019] rounded-[2rem] hover:bg-[#DFE8FD] hover:text-[#0B0019] border-2 border-[#0B0019] ${styles?styles:""}`}>
        {buttonText}
      </button>
    );
  };
  
  export default YellowButton;