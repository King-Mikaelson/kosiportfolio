import Image from "next/image";
import myData from "../../../public/myData.png";
import goMarket from "../../../public/goMarket.png";
import goggle from "../../../public/google.png";
import andela from "../../../public/andela.png";
import meta from "../../../public/meta.png";
import okra from "../../../public/okra.png";

export default function Brands() {
  return (
    <div className="relative flex-col flex justify-center  w-full">
      <div className="flex flex-col items-center md:items-stretch">
        <div className="grid grid-cols-2 md:flex items-center flex-col md:flex-row justify-around mx-4 lg:mx-20 xl:mx-48 xl:gap-14 lg:gap-1 gap-3 ">
          <Image
            src={okra}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={goMarket}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />

          <Image
            src={meta}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={goggle}
            alt="myData"
            className="w-[7rem] h-[7rem] object-contain"
            priority={true}
          />
          <Image
            src={andela}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={okra}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={andela}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={myData}
            alt="myData"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
        </div>
        <div className="grid grid-cols-2 md:flex  items-center flex-col md:flex-row  justify-around  mx-4  lg:mx-20 xl:mx-48 xl:gap-14 lg:gap-1 gap-3 border-b-2 border-[#EEEEEE] solid pb-12">
          <Image
            src={goggle}
            alt="myData"
            className="w-[7rem] h-[7rem] object-contain"
            priority={true}
          />
          <Image
            src={andela}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={goMarket}
            alt="myData"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={myData}
            alt="myData"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={andela}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />

          <Image
            src={myData}
            alt="myData"
            className="w-[3rem] h-[3rem] object-contain"
            priority={true}
          />
          <Image
            src={okra}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
          <Image
            src={meta}
            alt="myData"
            className="w-[5rem] h-[5rem] object-contain"
            priority={true}
          />
        </div>
      </div>
    </div>
  );
}
