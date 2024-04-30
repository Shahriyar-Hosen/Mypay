import { SliderSection } from "@/components/common";
import {
  API,
  Hero,
  Information,
  Review,
  Subscribe,
} from "@/components/page/home";

const Home = () => {
  return (
    <div className="w-full min-h-screen space-y-[25px] lg:space-y-[50px]">
      <Hero />
      <SliderSection
        title="Nos supports de paiement"
        className="text-xl xl:text-3xl font-semibold text-[#dcdcdc]"
      />
      <Subscribe />
      <API />
      <SliderSection title="Nos clients" className="pt-10" />
      <Review />
      <Information />
    </div>
  );
};

export default Home;
