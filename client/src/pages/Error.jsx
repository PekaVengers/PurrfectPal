import Offline from "../components/Offline";
import useOnline from "../hooks/useOnline";
import errorPuppy from "../assets/images/errorPuppy.png";
import Cursor from "../components/Cursor";

export default function Error() {
  const online = useOnline();
  if (!online) {
    return <Offline />;
  }

  return (
    <>
      <Cursor />
      <div className="w-full h-screen flex md:flex-col flex-row justify-center items-center bg-[#919177]">
        <img src={errorPuppy} alt="puppy" className="w-[2rem] md:w-[10rem]" />
        <h1 className="font-bold uppercase font-primary vsm:text-[1.5rem] gsm:text-[2rem] md:text-[3rem]">
          Invalid Route!
        </h1>
      </div>
    </>
  );
}
