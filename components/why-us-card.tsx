import Image from "next/image";

// Copywritting
import { whyUs } from "@/dummy";

const WhyUsCard = () => {
  const items = whyUs;

  return (
    <>
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 rounded-2xl p-4 transition-colors duration-300 ease-linear first:bg-white hover:bg-white hover:shadow-2xl hover:shadow-slate-500/10 sm:p-6"
        >
          <div className="flex items-end gap-4">
            <Image
              src={item.img}
              alt={item.title}
              width={68}
              height={68}
              className="h-8 w-8 md:h-11 md:w-11"
            />
            <h3 className="h3 font-bold text-primary-foreground">
              {item.title}
            </h3>
          </div>
          <p>{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default WhyUsCard;
