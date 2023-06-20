// CSS
import { Container } from "postcss";
import styled from "styled-components";
import tw from "tailwind-styled-components";
import capa from "../images/capa.gif";

export const CapaDivSC = styled.div``;
// background-image: url(${capa});
// background-size: cover;
// background-position: center;

export const CapaDiv = tw(CapaDivSC)`
  h-screen w-full
  flex flex-col 
  justify-center items-center 
  pl-5 pr-5
  backdrop-blur
  bg-[#d66262]
`;
// lg:mr-20 lg:ml-20
// sm:ml-30 sm:mr-30
// sm:w
export const Title = tw.div`
  lg:mb-3    
  font-montserrat font-bold  
  text-4xl text-center text-white
  lg:text-[72px]
  lg:leading-[120%]
  `;

export const Subtitle = tw.div`
  font-montserrat
  text-base text-center text-black
  lg:text-3xl
`;

export const AuthorText = tw.div`
  font-montserrat
  text-sm text-center text-white
  lg:text-base
  mt-[60px]
`;

export const IntroDiv = tw.div`
  w-full h-[140vh]
  backdrop-blur
  flex flex-col 
  justify-center items-center 
`;

export const IntroTitle = tw.div`
  font-bold  font-montserrat
  text-3xl text-left text-white
  self-start
  mb-6
  lg:self-start
`;

export const IntroText = tw.div`
  font-montserrat  
  text-[15px] text-justify text-white
  leading-normal 
  opacity-100
  max-w-[600px]
  `;

export const FimDiv = tw.div`
  w-full h-auto
  min-h-[100vh]
  flex flex-col 
  justify-center
  items-center 
`;

export const FimTitle = tw.div`
  font-bold  font-montserrat
  text-3xl text-left text-white
`;

export const FimText = tw.div`
  font-montserrat  
  text-[15px] text-center text-white 
  leading-normal 
  opacity-100
  max-w-[600px]
  mt-[10px]
  `;

export const ChapterGenericDiv = tw.div`
  flex
  w-full h-[100vh]
  items-center
  justify-center
  text-white
  -z-10
  `;

export const ChapterGenericDiv1 = tw.div`
  flex
  w-full h-[150vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;

  export const ChapterGenericDiv2 = tw.div`
  flex
  w-full h-[150vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;

  export const ChapterGenericDiv3 = tw.div`
  flex
  w-full h-[150vh] 
  items-start
  justify-end
  lg:justify-end
  lg:p-[10%]
  text-white
  -z-10 
  `;

export const ChapterMapDiv = tw.div`
  flex
  w-full h-[80vh] 
  items-center
  justify-center
  lg:justify-start
  lg:p-[10%]
  text-white
  -z-10 
  `;

export const Footer = tw.div`
  w-full h-[20%]
  bg-opacity-40 backdrop-blur
  flex flex-col 
  justify-center items-center 
  bg-black/50
  pr-[10%] pl-[10%]
  lg:pr-[25%]
  lg:pl-[25%]
`;

export const ContainerCard = tw.div`
  p-[3.25rem]
  backdrop-blur-[20px]
bg-white/90
  max-w-xs
  lg:max-w-[600px]
  rounded-[10px]
`;

export const ContainerCard1 = tw.div`
  p-5
  bg-opacity-[20%] backdrop-blur-sm
  bg-black/75
  max-w-xs
  lg:max-w-lg
`;

export const ContainerCard2 = tw.div`
max-w-xs
lg:max-w-[36rem]
`;

export const TextCard = tw.div`
  font-montserrat  
  text-[15px]
  text-left
  text-black
`;

export const TextHighlightBold = tw.div`
  font-montserrat font-bold
  text-[15px]
  text-left
  text-white
  inline
`;

export const TextHighlightGreen = tw.div`
  font-montserrat font-bold
  text-[42px]
  text-left
  text-white
  inline-block
  bg-[#a9d3a2]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightGreenBig = tw.div`
  font-montserrat font-bold
  text-[70px]
  text-left
  text-white
  inline-block
  bg-[#a9d3a2]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightGreenSmall = tw.div`
  font-montserrat font-bold
  text-[15px]
  text-left
  text-white
  inline-block
  bg-[#a9d3a2]
  py-0
  px-2
`;

export const TextHighlightOrange = tw.div`
  font-montserrat font-bold
  text-[42px]
  text-left
  text-white
  inline-block
  bg-[#dab68a]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightOrangeBig = tw.div`
  font-montserrat font-bold
  text-[70px]
  text-left
  text-white
  inline-block
  bg-[#dab68a]
  py-1
  px-3
  lg:mb-[10px]
`;


export const TextHighlightOrangeSmall = tw.div`
  font-montserrat font-bold
  text-[15px]
  text-left
  text-white
  inline-block
  bg-[#dab68a]
  py-0
  px-2
`;

export const TextHighlightBlue = tw.div`
  font-montserrat font-bold
  text-[42px]
  text-left
  text-white
  inline-block
  bg-[#639ed8]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightBlueBig = tw.div`
  font-montserrat font-bold
  text-[70px]
  text-left
  text-white
  inline-block
  bg-[#639ed8]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightBlueSmall = tw.div`
  font-montserrat font-bold
  text-[15px]
  text-left
  text-white
  inline-block
  bg-[#639ed8]
  py-0
  px-2
`;

export const TextHighlightRed = tw.div`
  font-montserrat font-bold
  text-[42px]
  text-left
  text-white
  inline-block
  bg-[#d66262]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightRedBig = tw.div`
  font-montserrat font-bold
  text-[70px]
  text-left
  text-white
  inline-block
  bg-[#d66262]
  py-1
  px-3
  lg:mb-[10px]
`;

export const TextHighlightRedSmall = tw.div`
  font-montserrat font-bold
  text-[15px]
  text-left
  text-white
  inline-block
  bg-[#d66262]
  py-0
  px-2
`;

export const TextCard1 = tw.div`
  font-montserrat  
  text-[15px]
  text-left
  text-black
  mt-0
  mb-0
`;

export const Grid1 = tw.div`
  flex
  gap-x-0
  gap-y-5
  items-end
  justify-start
  mb-5
`;

export const Grid = tw.div`
  block
  gap-x-0
  gap-y-8
`;

export const BigNumber = tw.div`
  font-montserrat  
  font-bold
  text-5xl
  text-left
  test-white
  self-end
  lg:text-[140px]
`;

export const BigNumber1 = tw.div`
  text-2xl
  lg:text-[60px]
  font-bold
  test-white
`;

export const BigNumber2 = tw.div`
  text-2xl
  lg:text-[20px]
  font-bold
  test-white
`;

export const BigNumber3 = tw.div`
  text-2xl
  leading-[120%]
  lg:text-[60px]
  font-bold
  test-white
`;

export const BigNumber4 = tw.div`
  text-2xl
  leading-[120%]
  lg:text-[42px]
  font-bold
  text-black
`;

export const BigNumber5 = tw.div`
  text-2xl
  leading-[120%]
  lg:text-[42px]
  font-bold
  text-black
  text-right
`;

const TextyellowSC = styled.div`
  background: #a96e04;
`;

export const Textyellow = tw(TextyellowSC)`
  text-white
  inline
`;
