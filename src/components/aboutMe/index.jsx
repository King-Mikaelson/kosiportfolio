import Image from "next/image";
import kosiImg from "../../../public/kosiImg.png";
function AboutMe() {
  return (
    <main className=" w-full py-10 lg:py-16 lg:px-6 xl:px-36 px-4 flex flex-col gap-20">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full my-0 mx-auto">
        <div className="w-full flex items-center">
          <Image src={kosiImg} alt="kosi" className="object-contain" />
        </div>

        <div className="justify-between flex flex-col md:py-10 py-6 gap-6">
          <p className="text-[#040722] text-3xl md:text-[2.5rem] font-bold font-sans leading-snug">
            “Man shall not live by bread alone, but by the codes that proceeds
            from his fingers and keyboard...”
          </p>
          <p className="text-[#040722] text-2xl font-normal font-sans">
            “Man shall not live by bread alone, but by the codes that proceeds
            from his fingers and keyboard...”
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between divide-solid md:divide-x divide-[#040722] gap-12">
        <aside className="md:w-3/5">
          Talking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk about
          every thing you are okay with letting everyone know. Could sprinkle
          childhood tales and anything that sparks you imagination... blah blah
          blahTalking about myself here because if I don’t, who will? Talk{" "}
        </aside>
        <ul className="md:w-2/5 flex flex-col md:py-6 md:px-20 list-disc">
          <li>Music I listen to</li>
          <li>where you traveled to</li>
          <li>puzzle quiz?</li>
          <li>Oh maybe just anything</li>
        </ul>
      </div>
    </main>
  );
}

export default AboutMe;
