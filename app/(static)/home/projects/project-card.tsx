"use client";

import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
interface ProjectCardProps {
  title: string;
  subTitle: string;
  link: string;
  img: string;
}
export function ProjectCard({ img, link, subTitle, title }: ProjectCardProps) {
  return (
    <CardContainer className="inter-var !py-0 w-full">
      <CardBody className="bg-gray-50 py-0 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem translateZ="100" className="w-full ">
          <Image
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <CardItem
          translateZ="50"
          className="text-xl mt-5 font-bold text-neutral-600 dark:text-white"
        >
          {title}{" "}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {subTitle}
        </CardItem>
        <div className="flex justify-between items-center mt-5">
          <CardItem
            translateZ={20}
            as={Link}
            href={link}
            target="__blank"
            className="px-4 py-2 hover:bg-primary hover:text-white rounded-lg text-xs border-[1px] font-normal dark:text-white"
          >
            Live now →
          </CardItem>
          {/* <ProjectsModal /> */}
        </div>
      </CardBody>
    </CardContainer>
  );
}
