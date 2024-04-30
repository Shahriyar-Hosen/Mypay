import { SliderSection } from "@/components/common";
import { API, Hero, Subscribe } from "@/components/page/home";

const Home = () => {
  return (
    <div className="w-full min-h-screen space-y-[25px] lg:space-y-[50px]">
      <Hero />
      <SliderSection title="Nos supports de paiement" />
      <Subscribe />
      <API />
      <SliderSection
        title="Nos clients"
        className="text-xl md:text-3xl lg:text-5xl font-medium text-[#f7f7f7] pt-10"
      />
    </div>
  );
};

export default Home;
