import Image from "next/image";

// Dummy
import { convertRate } from "@/dummy";

const RateCard = () => {
  const items = convertRate;

  return (
    <div className="grid w-full grid-cols-2 gap-2 sm:gap-6 md:grid-cols-4">
      {/* Cards */}
      {items?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center rounded-2xl bg-white pb-3 transition-shadow duration-300 ease-linear hover:shadow-xl sm:pb-6 md:rounded-3xl"
        >
          <Image
            src={item.img}
            alt={item.provider}
            width={150}
            height={150}
            className="w-1/2 sm:w-1/2"
          />

          <div className="flex items-center justify-center gap-1 sm:gap-2">
            <h3 className="text-sm font-bold sm:text-xl">{item.provider}</h3>
            <span className="text-xs font-bold text-[#f48034] sm:text-lg">
              {item?.range}
            </span>
          </div>

          <span className="mt-1 text-2xl font-semibold leading-none sm:text-6xl">
            {item.rate}
          </span>
        </div>
      ))}
      {/* ./ Cards */}
    </div>
  );
};

export default RateCard;
