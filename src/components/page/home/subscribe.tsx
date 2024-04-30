import { Button } from "@/components/ui/button";

export const Subscribe = () => {
  return (
    <section className="py-20">
      <div className="text-center font-medium py-5 space-y-5">
        <h1 className="text-xl md:text-3xl xl:text-5xl">
          Choisissez votre pack & Abonnez-vous
        </h1>
        <p className="text-xs md:text-base lg:text-lg text-[#E1E1E1]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      <div className="w-full max-w-[800px] h-[800px] bg-gradient-to-r from-[#4B86FC] to-[#75F2F6]  p-[2px] rounded-[10px] relative">
        <div className="w-full h-full bg-slate-800 rounded-[10px] ">
          <div className="w-full h-full bg-[#F1F1FF]/20 rounded-[10px] relative">
            <div className="absolute -top-5 left-20 w-[356px] h-[444px] rotate-[47.46deg] rounded-[200px] bg-gradient-to-l from-[#26D0CE] to-[#1A2980] filter blur-[400px]" />
            <Button>hello</Button>
          </div>
        </div>
      </div>
    </section>
  );
};
