import Image from "next/image"
function Hero() {
  return (
    <main className=" w-full px-4 lg:pt-24 pt-12 lg:px-6 xl:px-28">
      <div className="flex flex-col md:grid grid-cols-2 md:gap-40 w-full relative ">
      <div className="block absolute top-0 left-16 md:right-2/3 md:left-20   z-0 opacity-50 hover:opacity-100">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        this.onreadystatechange = function () console.log( "XMLHttpRequest.onreadystatechange" ); console.log( this )</p>
      </div>
        <div className="flex gap-8 flex-col self-center w-full relative">
        <div className="flex gap-2 flex-col">
        <h1 className="text-[#FFF] font-normal font-nunitoSans md:text-2xl text-base">Hi, I am a </h1>
        <p className="text-[#FFF] font-nunitoSans md:z-30  font-extrabold text-[rgba(254,254,254,1.00)] text-[2rem] lg:text-5xl  xl:text-[4.625rem]  md:whitespace-nowrap w-[8ch] md:w-full">PLATFORM ENGINEER.</p>
        <p className="text-[#FFF] font-nunitoSans text-xs font-light md:font-normal lg:text-2xl md:text-base lg:w-[35ch] xl:w-[50ch] w-[30ch]">I build and merge standard system infrastructure and tech solutions for engineering teams to work optimally.</p>
        </div>
        
        <div className="text-[rgba(254,254,254,1.00)] lg:text-2xl text-sm md:text-base border border-solid rounded border-[rgba(254,254,254,1.00)] py-3 w-fit px-6 whitespace-nowrap">
            <button>
            <p className="font-nunitoSans font-semibold">Learn more about me and what I do </p>
            </button>
        </div>
        <div className=" absolute bottom-16 md:bottom-6 md:left-auto left-20 md:-right-24 z-0 opacity-25 hover:opacity-100 lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
        </div>
        <div className="absolute -bottom-24 -left-2 xl:-bottom-24 lg:-bottom-12 md:right-1/2 z-0 opacity-25 hover:opacity-100 lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
        </div>
        </div>
        <div className=" w-full relative z-20">
        <div className="hidden md:block absolute top-24 right-2/3  lg:w-[30ch] z-0 opacity-25 hover:opacity-100">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">def __init__(self, input_file, cache_index=True):		if isinstance(input_file, basestring):			self.source_file = open(input_file,'rb')			filename = input_file</p>
        </div>
         <Image src="/Kosihero.png" alt="hero" width={900} height={900} className="max-w-full " />
        </div>
        <div className=" absolute bottom-4 left-20 md:left-auto md:bottom-4 md:right-1/2 z-0 opacity-50 hover:opacity-100 lg:w-[25ch]">
        <p className="text-[0.75rem] text-[#A59F9F] font-serif">
        def __init__(self, input_file, cache_index=True): if isinstance(input_file, basestring): self.source_file = open(input_file,'rb') filename = input_file</p>
        </div>
      </div>
    </main>
  )
}

export default Hero
