import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function ExpertiseCard() {
  const features = [
    {
      title: "E-commerce Solution",
      description:
        "We build scalable e-commerce platforms that enhance user experience, streamline operations, and boost conversions with automation.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Healthcare Solution",
      description:
        "Our healthcare solutions provide secure, compliant systems for patient management, telemedicine, and seamless care delivery.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Fintech Solution",
      description:
        "We create secure fintech platforms for payments, digital wallets, and financial services, leveraging AI and user-friendly technology.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Education Platform",
      description:
        "We develop interactive e-learning platforms and virtual classrooms that support engaging, scalable, and seamless learning experiences.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Custom Software Development Service",
      description:
        "We provide tailored software development services, crafting web and mobile apps that meet your business needs with agility and precision.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Travel & Tourism Solution",
      description:
        "We deliver custom travel tech solutions that enhance bookings, customer service, and overall travel experiences.",
      icon: <IconAdjustmentsBolt />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10  mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex w-full overflow-x-hidden flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-full relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
