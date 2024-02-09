const Loader = () => {
  return (
    <div className="loaderContainer w-[100vw] fixed top-[0] bottom-[0] right-[0] left-[0] bg-[#272829] flex justify-center items-center opacity-[90%] z-[2] ">
      <div className="p-[2rem] w-[4rem] h-[4rem] border-4 border-[#565637] rounded-[50%] animate-spin">
        <div className="w-[3rem] h-[3rem] border-2 border-[#DFE8FD] rounded-[50%] animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
