import Image from "next/image";

// Dummy
import { tutorialConvert } from "@/dummy";

const HowToCard = () => {
  const items = tutorialConvert;

  return (
    <>
      {items?.map((item) => (
        <div
          key={item.id}
          className="group space-y-1 rounded-lg border px-4 py-2 transition duration-100 ease-linear hover:border-accent-foreground hover:bg-accent-foreground"
        >
          <h3 className="font-display text-sm font-semibold text-primary-foreground group-hover:text-white">
            {item.id}. {item.title}
          </h3>
          <p className="text-sm group-hover:text-white">{item.desc}</p>
        </div>
      ))}
    </>
  );
};

export default HowToCard;
