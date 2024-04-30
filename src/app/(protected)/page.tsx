import { SliderSection } from "@/components/common";
import { Hero } from "@/components/page/home";

const Home = () => {
  return (
    <div className="w-full min-h-screen space-y-[25px] lg:space-y-[50px]">
      <Hero />
      <SliderSection title="Nos supports de paiement" />
    </div>
  );
};

export default Home;
