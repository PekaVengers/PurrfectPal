import Banner from "../assets/images/banner.png";
import Hero from "../components/homepage/Hero";
import CTA from "../components/homepage/CTA";
import Testimonial from "../components/homepage/Testimonial";
import Heading from "../components/homepage/Heading";
import useOnline from "../hooks/useOnline";
import Offline from "../components/Offline";

export default function Home() {
  const online = useOnline();
  if (!online) {
    return <Offline />;
  }


  return (
    <div className="w-full min-h-screen bg-[#919177] relative">
      <div className="w-full">
        <img
          src={Banner}
          alt="banner_image"
          className="w-full h-full object-cover"
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
  );
}
