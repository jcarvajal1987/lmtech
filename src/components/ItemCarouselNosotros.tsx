import Image from "next/image";
import React from "react";

export const ItemCarouselNosotros = ({ children, icon, title, text, index }: any) => {
  const heightImg= React.useRef<any | null>(null);
  const [heightMenu, setHeightMenu] = React.useState("50px")
  React.useEffect(() => {
    // 👉️ TypeScript knows that ref is not null here
    setHeightMenu(heightImg.current.clientHeight)



}, [heightMenu])

  return (<>
    <div className=" px-2 md:px-10 min-w-full ">
      <div className="h-full flex rounded-3xl overflow-hidden bg-white flex-col md:flex-row">
        <div className="md:w-5/12 lg:w-4/12 flex items-center justify-center p-10 md:p-0 ">
          <div ref={heightImg}  className="overflow-hidden h-full rounded-[1000px] md:rounded-none w-full border-4 md:border-[1px] border-neutral-300 max-w-[551px]">

          <Image src={icon} quality={100}
          
          
          sizes="100vh,100vh"
          style={{
            objectFit: 'cover',
            height: '100%',
          }} alt="LM Tech" />
        </div>
        </div>
        <div className=" h-full flex items-center md:justify-center flex-col md:w-7/12 lg:w-8/12 md:text-left px-4 md:px-20 pt-0 pb-16 md:py-20 ">
          
          <div className="flex w-full">
            <span className="card-title flex-1 monstserrat">{title}</span>
          </div>
          <p className="text-xl font-medium md:font-normal leading-8 mt-3 flex text-black">{text}</p>
        </div>
      </div>
    </div>
    <div className="px-2 md:px-10">
                <div className="reflejo2 mascara">
                <div className="md:w-5/12 lg:w-4/12 flex items-center justify-center p-10 md:p-0 ">
          <div style={{height:`${heightMenu}px`}} className="hidden md:block overflow-hidden h-full rounded-[1000px] md:rounded-none w-full border-4 md:border-[1px] border-neutral-300 max-w-[551px] espejo2">

          <Image src={icon} quality={100}
          
          
          sizes="100vh,100vh"
          style={{
            objectFit: 'cover',
            height: "100%",
          }} alt="LM Tech" />
        </div>
        </div>
                </div>
              </div>
          </>
  );
};
