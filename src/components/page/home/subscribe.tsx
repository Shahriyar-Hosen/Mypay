import { Button } from "@/components/ui/button";
import React from "react";

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
      <div className="bg-[#F1F1FF]/20 rounded-[10px] max-w-[800px]">
        <Button>hello</Button>
      </div>
    </section>
  );
};
