import Image from "next/image";

export const LogoClouds = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-16">
      {/* Col */}
      <div className="">
        <Image
          src="/media/idx.png"
          alt="Image"
          width={240}
          height={240}
          className="h-12 w-auto md:h-16"
        />
      </div>
      {/* Col */}
      <div className="">
        <Image
          src="/media/kompas.png"
          alt="Image"
          width={100}
          height={100}
          className="h-12 w-auto md:h-16"
        />
      </div>
      {/* Col */}
      <div className="">
        <Image
          src="/media/glints.png"
          alt="Image"
          width={100}
          height={100}
          className="h-12 w-auto md:h-16"
        />
      </div>
      {/* Col */}
      <div className="">
        <Image
          src="/media/pewarta-indonesia.png"
          alt="Image"
          width={100}
          height={100}
          className="h-12 w-auto md:h-16"
        />
      </div>
    </div>
  );
};
