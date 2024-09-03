import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

function PrimaryBtn({ children }: any) {
  return (
    <Button className="bg-primary w-fit mx-auto text-white flex gap-3 group duration-200  rounded-[25px] py-3 pr-1">
      {children}{" "}
      <div className="w-[30px] h-[30px] rounded-full bg-white group-hover:bg-brand-200 p-1 box-border flex items-center justify-center">
        {" "}
        <ArrowRight size={18} className="text-primary m-0" />{" "}
      </div>
    </Button>
  );
}

export default PrimaryBtn;
