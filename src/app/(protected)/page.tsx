import { SliderSection } from "@/components/common";
import { Hero, Subscribe } from "@/components/page/home";

const Home = () => {
  return (
    <div className="w-full min-h-screen space-y-[25px] lg:space-y-[50px]">
      <Hero />
      <SliderSection title="Nos supports de paiement" />
      <Subscribe />
    </div>
  );
};

export default Home;
