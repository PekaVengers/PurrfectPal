import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex justify-between px-[2rem] md:px-[5rem] bg-[#565637] py-[0.5rem] gsm:py-[1rem] text-[1.2rem] gsm:text-[1.5rem] lg:text-[2rem] font-primary text-[#D6DFF4] font-semibold">
      <span>&copy; 2023 PetCare </span>
      <ul className="footer flex gap-[1rem] md:gap-[2rem]">
        <div className="flex items-center">
          <a href="https://github.com/PekaVengers/PurrfectPal">
            <FaGithub />
          </a>
        </div>
        <div className="flex gap-[0.3rem] items-center">
          <a href="mailto:pekavenger@gmail.com">
            <MdEmail />
          </a>
        </div>
      </ul>
    </footer>
  );
}
