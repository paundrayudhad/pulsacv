import Image from "next/image";

// Dummy
import { paymenyMethod } from "@/dummy";

const PaymentCard = () => {
  const items = paymenyMethod;

  return (
    <>
      {items?.map((item) => (
        <div
          key={item.id}
          className="rounded-lg border bg-white p-2 transition-shadow duration-300 ease-linear hover:shadow-2xl"
        >
          <Image
            src={item.img}
            alt={item.provider}
            height={100}
            width={100}
            className="h-5 w-auto md:h-10"
          />
        </div>
      ))}
    </>
  );
};

export default PaymentCard;
