import { BackButton, SectionTitle } from "@/components/common";
import { ContactUsForm, InfoCard } from "@/components/page/contact-us";

const ContactUs = () => {
  return (
    <main className="min-h-screen lg:py-10 relative">
      <SectionTitle>Contactez-nous</SectionTitle>

      <section className="relative w-fit md:w-full max-w-[1130px] mx-auto rounded-[30px] bg-[#f3f3f3] my-10 p-1 md:p-2 flex flex-col md:flex-row justify-center md:justify-start items-center md:items-end gap-5 md:gap-10">
        <BackButton className="absolute -top-[65px] md:-top-20 lg:-top-[100px] left-0 md:left-10" />
        <InfoCard />
        <ContactUsForm />
      </section>
    </main>
  );
};

export default ContactUs;
