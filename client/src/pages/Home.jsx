import Banner from "../assets/images/banner.png";
import Hero from "../components/homepage/Hero";
import CTA from "../components/homepage/CTA";
import Testimonial from "../components/homepage/Testimonial";
import Heading from "../components/homepage/Heading";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";
import Cursor from "../components/Cursor";

export default function Home() {
  const online = useOnline();
  if (!online) {
    return <Offline />;
  }


  return (
<>
<Cursor/>
<div className="w-full min-h-screen bg-[#919177] relative">
      <div className="w-full mt-[4rem] vsm:pt-[2rem] md:pt-[5rem] xl:w-[90%] mx-auto 2xl:w-[80%]">
        <img
          src={Banner}
          alt="banner_image"
          className="object-cover w-[90%] vsm:w-[80%] gsm:w-[70%] md:w-[60%] lg:w-[50%] m-auto"
        />
      </div>
      <main className="lg:w-[100%] xl:w-[90%] 2xl:w-[70%] 3xl:w-[60%] 4xl:w-[55%] m-auto">
        <Heading text={"Our Vision"} />
        <Hero />
        <Heading text={"Call To Action"} styles=""/>
        <CTA />
        <Heading text={"Testimonial"} />
        <Testimonial />
      </main>
    </div>
</>
  );
}
